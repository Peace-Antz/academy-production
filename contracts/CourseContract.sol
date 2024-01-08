    pragma solidity ^0.8.0;
// SPDX-License-Identifier: MIT

import "./CourseFactory.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CourseContract is AccessControl, Initializable {

    bool public courseStatus; //Is determined by the teacher. Can be used with signup status to give 4 states: pending, open, in progress and closed.
    bool public paymentStatus; //Once payment is set by teacher, enrollment can begin
    uint public payment; //Amount requested by the teacher, also the amount that needs to be sponsored to start the course
    uint public studentStake; //Amount student needs to stake to enroll in the course, possible platform rewards for staking in future versions?
    uint public sponsorshipTotal; //Total Sponsorship amount
    uint public paymentTimestamp; //Timestamp of payment of Teacher.
    uint internal div = 15; // payment/div = studentStake
    address public teacher;
    address[] public sponsors;
    address[] public students;
    address public peaceAntzCouncil = 0x6bE3d955Cb6cF9A52Bc3c92F453309931012D386; //address that will be sent stake of students who dropout
//This address is basically the address that gets further funding to sustain and develop the Dapp :)
    string public uri; //for viewing course info


//Events for pretty much each function
    event GrantRole(bytes32 role, address account);
    event RevokeRole(bytes32 role, address account);
    event DropOut(address indexed account);
    event CourseStatus(bool courseStatus);
    event PaymentStatus(bool paymentStatus);
    event StudentEnrolled(address account);
    event Sponsored(uint indexed sponsorDeposit, address account);
    event CourseCompleted(address indexed account);
    event ClaimPayment(uint paymentTimestamp);

    //Need to track each address that deposits as a sponsor or student
    mapping (address => uint) public studentDeposit;
    mapping (address => uint) public sponsorDeposit;
    //track pass/fail for each student
    mapping (address => bool) public courseCompleted;

//Different Roles stored as bytes32 as detailed by openzeppelin Access Control Contract
//NOTE: ADMIN will be set to the multisig address.
    //0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42
    bytes32 public constant ADMIN = keccak256("ADMIN");
    //0x534b5b9fe29299d99ea2855da6940643d68ed225db268dc8d86c1f38df5de794
    bytes32 public constant TEACHER = keccak256("TEACHER");
    //0xc951d7098b66ba0b8b77265b6e9cf0e187d73125a42bcd0061b09a68be421810
    bytes32 public constant STUDENT = keccak256("STUDENT");
    //0x5f0a5f78118b6e0b700e0357ae3909aaafe8fa706a075935688657cf4135f9a9
    bytes32 public constant SPONSOR = keccak256("SPONSOR");

//CourseFactory Contract address to update Teacher, Student, Sponsor and Academy info.
    address public factoryAddress;
    CourseFactory factory;

//After factory deployment, this is thie first function the teacher writes and sets
//the contract creator as the TEACHER and the multisig wallet as the ADMIN & Default Admin.
    function initialize(address _teacher, address _factoryAddress) public initializer {
        _grantRole(DEFAULT_ADMIN_ROLE, peaceAntzCouncil);
        _grantRole(ADMIN, peaceAntzCouncil);
        _grantRole(TEACHER, _teacher);
        factoryAddress = _factoryAddress;
        factory = CourseFactory(factoryAddress);
        teacher = _teacher;
    }

//Teacher Functions
    //"Start Course" Button, locks in enrollments and sponsorship payments
    function updateCourseStatus() external onlyRole(TEACHER){
        require(courseStatus==false);
        require(paymentStatus==true);
        require(payment == sponsorshipTotal, "Course is has not been fully sponsored yet :(");
        uint256 studentFunds = address(this).balance - sponsorshipTotal;
        require(studentFunds >= studentStake, "You need to have at least one Student enrolled to start the Course!");
        courseStatus=true;
        paymentStatus=false;
        factory.updateTeacherProgress(msg.sender,payment);
        factory.updateSponsorsProgress(sponsors);
        emit CourseStatus(true);
        emit PaymentStatus(false);
    }
    //Teacher sets how much they want to be paid, allows enrollment to start, cannot be changed.
    function setAmount(uint _payment, string memory _uri) external onlyRole(TEACHER){
        require(paymentStatus==false, "You cannot change change payment after it has been set, please create another course.");
        require(courseStatus==false, "You cannot change the payment.");
        payment = _payment;
        uri = _uri;
        unchecked {
            studentStake= _payment/div;
        }
        paymentStatus=true;
        emit PaymentStatus(true);
    }
    //Teacher passes student which completes the course and pays back each student that passes.
    function passStudent(address _account) external onlyRole(TEACHER){
        require(hasRole(STUDENT, _account),"Not a student!");
        require(courseStatus==true);
        courseCompleted[_account]=true;
        paymentStatus = true;
        //send money to student
        (bool success, ) = _account.call{value: studentStake}("");
        require(success, "Failed to send stake back to student");
        factory.updateStudentCourses(msg.sender, _account, studentStake);
        emit PaymentStatus(true);
        emit CourseCompleted(_account);
    }
    //Teacher can also boot student which sends student's stake to multisig.
    function bootStudent(address _account) external onlyRole(TEACHER){
        require(hasRole(STUDENT, _account),"Address is not enrolled :/");
        _revokeRole(STUDENT, _account);
        (bool success, ) = peaceAntzCouncil.call{value: studentStake}("");
        require(success, "Failed to boot >:(");
        factory.updateBoot(_account, studentStake);
        emit DropOut(_account);
    }
    //After the first student is passed the teacher can claim the sponsored payment at will.
    function claimPayment() external onlyRole(TEACHER){
        require(courseStatus == true,"You have to start and complete the course to collect sponsor payment.");
        require(paymentStatus == true,"Please pass a student to complete the course.");

        // Cast msg.sender to address payable
        address payable recipient = payable(msg.sender);

        // Use the send method and capture its return value
        bool success = recipient.send(payment);
        require(success, "Failed to claim :(");
        factory.updatePaymentRank(msg.sender, sponsors, address(this), payment);
        emit ClaimPayment(block.timestamp);
    }



//Student Functions
    //Student enroll by staking the studentStake amount, they can withdraw if they want but stake is locked once the course starts.
    function enroll()external payable{
        require(!hasRole(TEACHER, msg.sender),"Teachers cannot enroll in their own course!");
        require(courseStatus == false, "Course has already started :("); 
        require(!hasRole(STUDENT, msg.sender),"You are enrolled already!");
        require(msg.value == studentStake, "Please Stake the Correct Amount");
        require(paymentStatus == true, "Enrollment Closed");
        studentStake = msg.value;
        _grantRole(STUDENT, msg.sender);
        students.push(msg.sender);
        studentDeposit[msg.sender] = studentStake;
        factory.updateStudentStake(msg.sender, studentStake);
        emit StudentEnrolled(msg.sender);
    }
    //Students can withdraw before the course starts, once the course starts, the student has to pass the course to get stake back.
    function withdraw () external payable {
        require(hasRole(STUDENT, msg.sender),"You are not enrolled!");
        require(address(this).balance >= studentStake, "No balance available");
        require(courseStatus == false, "You have to dropout because the course has started.");
        require(msg.value == 0,"Leave value empty.");
        studentDeposit[msg.sender] = 0;
        _revokeRole(STUDENT, msg.sender);
        (bool success, ) = msg.sender.call{value: studentStake}("");
        require(success, "Failed to withdraw :(");
        factory.updateWithdraw(msg.sender, studentStake);
        emit RevokeRole(STUDENT, msg.sender);
    }
    //Students can dropout after the course starts but it will get logged and stake will be sent to Peace Antz Council multisig.
    function dropOut() external payable onlyRole(STUDENT){
        require(courseStatus == true, "Course has not started yet, feel free to simply withdraw :)");
        require(courseCompleted[msg.sender] == false, "You have completed the course already!");
        (bool success, ) = peaceAntzCouncil.call{value: studentStake}("");
        require(success, "Failed to drop course :(");
        _revokeRole(STUDENT, msg.sender);
        factory.updateDropout(msg.sender, studentStake);
        emit DropOut(msg.sender);
    }


//Sponsor Functions
    //Allows sponsor to send ETH to contract and sill remember the amount of each sponsor and total amount.
    function sponsor() external payable {
        require(courseStatus == false, "Course has already begun.");
        require(payment > sponsorshipTotal, "This course is fully sponsored :)");
        require(msg.value > 0, "Please input amount you wish to sponsor");
        require(msg.value <= (payment - sponsorshipTotal), "Please input the Sponsorship amount needed or less");

        // Check if msg.sender is already a sponsor
        bool isAlreadySponsor = false;
        for (uint i = 0; i < sponsors.length; i++) {
            if (sponsors[i] == msg.sender) {
                isAlreadySponsor = true;
                break;
            }
        }

        // Only grant role and add to sponsors list if not already a sponsor
        if (!isAlreadySponsor) {
            _grantRole(SPONSOR, msg.sender);
            sponsors.push(msg.sender);
        }

        uint currentDeposit = sponsorDeposit[msg.sender] + msg.value;
        uint _sponsorshipTotal = sponsorshipTotal + msg.value;
        assert(_sponsorshipTotal >= sponsorshipTotal);
        sponsorshipTotal = _sponsorshipTotal;
        sponsorDeposit[msg.sender] = currentDeposit;

        // Pass the course contract address to the factory contract
        factory.updateSponsorship(msg.sender, address(this), msg.value);

        emit Sponsored(currentDeposit, msg.sender);
    }


    //Allows user to withdraw whatever they sponsored before the course begins
    function unsponsor(address payable _to, uint _amount) external payable onlyRole(SPONSOR){
        require(courseStatus == false, "Course has already begun.");
        require(_amount>0,"Please input an amount to unsponsor");
        require(_amount<=sponsorDeposit[_to], "That is more than you have sponsored");
        require(_to == msg.sender,"You are not the owner of this address.");

        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to withdraw :(");

        uint currentDeposit = sponsorDeposit[_to] - _amount;
        assert(currentDeposit <= sponsorDeposit[_to]);
        uint _sponsorshipTotal = sponsorshipTotal - _amount;
        assert(_sponsorshipTotal <= sponsorshipTotal);
        sponsorshipTotal = _sponsorshipTotal;
        sponsorDeposit[_to]=currentDeposit;
        factory.updateUnsponsor(msg.sender, _amount);
        if (sponsorDeposit[_to] == 0){
        _revokeRole(SPONSOR, _to);
        emit RevokeRole(SPONSOR, _to);
        }
    }
}