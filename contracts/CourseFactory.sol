pragma solidity ^0.8.0;
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./CourseContract.sol";
import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

//This is a factory contract to deploy course contracts. 
//This contract also keeps track of rankings of the teachers, students and sponsors
//It also keeps track of the TVL, Total Sponsored and Total Staked in Peace Antz Academy.
contract CourseFactory is AccessControl {
    using SafeMath for uint256;

    struct AcademyInfo{
        uint tvl;
        uint totalSponsored;
        uint totalStaked;
        uint totalPayout;
        uint failFund;
    }

    struct TeacherRank{
        uint totalEarned;
        uint pendingPayouts;
        uint coursesTaught;
        uint coursesInProgress;
        uint studentsPassed;
        }
    struct StudentRank{
        uint totalStaked;
        uint totalLocked;
        uint coursesTaken;
        uint coursesEnrolled;
        uint coursesDropped;
    }
    struct SponsorRank{
        uint totalSponsored;
        uint pendingPayouts;
        uint coursesSponsored;
        uint inProgressSponsored;
        uint selfSponsored;
        mapping(address => bool) sponsoredCourses; // New mapping to track sponsored courses
    }

    //Need mapings to remember each account's info
    //Also a mapping to keep track of all deployed Course Contracts.
    mapping(address => TeacherRank) public teacherRank;
    mapping(address => StudentRank) public studentRank;
    mapping(address => SponsorRank) public sponsorRank;
    mapping(address => bool) public deployedContracts;
    AcademyInfo public academyInfo;
    //Not sure why I keep making events, I think they will be useful on the front end later.
    event CourseCreated(address courseId, address account);
    //Course ID basically a works like a nonce for deployed courses with an array of the deployed addresses.
    CourseContract[] public courseId;

    constructor() {
        // Just put this in as something for the contructor to do
        academyInfo = AcademyInfo(0, 0, 0, 0, 0);
    }

    //This is a main function that allows a teacher to deploy a course contract and sets the msg.sender as the teacher
    function createCourse() public{
        CourseContract courseContract = new CourseContract();
        courseId.push(courseContract);
        deployedContracts[address(courseContract)] = true;
        emit CourseCreated(address(courseContract), msg.sender);
    }
   
    modifier isValid() {
    require(deployedContracts[msg.sender], "Caller is not a Peace Antz Academy CourseContract");
    _;
    }


            // This function will update the student's rank and the academy's info 
    // when a student enrolls in a course.
    function updateStudentStake(address student, uint256 amount) external isValid {
        // We first get a reference to the student's rank using their address.
        StudentRank storage rank = studentRank[student];

        // We then update the total amount the student has staked.
        // This is the sum of all amounts the student has ever staked.
        rank.totalStaked = rank.totalStaked.add(amount);

        // We also update the total amount currently locked in courses.
        // This is the sum of all amounts the student has staked in ongoing courses.
        rank.totalLocked = rank.totalLocked.add(amount);

        // We increment the number of courses the student is currently enrolled in.
        rank.coursesEnrolled = rank.coursesEnrolled.add(1);

        // We then update the academy's info.
        // The total value locked (TVL) in the academy is the sum of all staked amounts.
        academyInfo.tvl = academyInfo.tvl.add(amount);

        // The total staked in the academy is also the sum of all staked amounts.
        academyInfo.totalStaked = academyInfo.totalStaked.add(amount);
    }

    //This updates the student from locked amount back to normals because the student had passed the course.
    function updateStudentCourses(address teacher, address student, uint stake) external isValid {
        StudentRank storage rank = studentRank[student];
        TeacherRank storage trank = teacherRank[teacher];
        rank.totalLocked = rank.totalLocked.sub(stake);
        rank.coursesEnrolled = rank.coursesEnrolled.sub(1);
        rank.coursesTaken = rank.coursesTaken.add(1);
        trank.studentsPassed = trank.studentsPassed.add(1);
        academyInfo.totalStaked = academyInfo.totalStaked.sub(stake);
        academyInfo.tvl = academyInfo.tvl.sub(stake);
    }

    //if a student gets booted their funds stay locked, they are un-enrolled and it goes on their record for courses dropped.
    function updateBoot(address student, uint stake) external isValid{
        StudentRank storage rank = studentRank[student];
        rank.coursesDropped = rank.coursesDropped.add(1);
        rank.coursesEnrolled = rank.coursesEnrolled.sub(1);
        rank.totalLocked = rank.totalLocked.sub(stake);
        academyInfo.totalStaked = academyInfo.totalStaked.sub(stake);
        academyInfo.tvl = academyInfo.tvl.sub(stake);
    }

    function updateWithdraw(address student, uint stake) external isValid{
        StudentRank storage rank = studentRank[student];
        rank.totalStaked = rank.totalStaked.sub(stake);
        rank.totalLocked = rank.totalLocked.sub(stake);
        rank.coursesEnrolled = rank.coursesEnrolled.sub(1);
        academyInfo.totalStaked = academyInfo.totalStaked.sub(stake);
        academyInfo.tvl = academyInfo.tvl.sub(stake);
    }

    function updateDropout(address student, uint stake) external isValid{
        StudentRank storage rank = studentRank[student];
        rank.coursesDropped = rank.coursesDropped.add(1);
        rank.totalStaked = rank.totalStaked.sub(stake);
        rank.totalLocked = rank.totalLocked.sub(stake);
        rank.coursesEnrolled = rank.coursesEnrolled.sub(1);
        academyInfo.totalStaked = academyInfo.totalStaked.sub(stake);
        academyInfo.tvl = academyInfo.tvl.sub(stake);
    }


    
    //function is triggered when the teacher updates the course status, which officially starts the course.
    function updateTeacherProgress(address teacher, uint payout) external isValid {
        TeacherRank storage rank = teacherRank[teacher];
        // We then update the Teacher Rank Struct
        // The total value locked (TVL) in the academy is the sum of all staked amounts.
        rank.coursesInProgress = rank.coursesInProgress.add(1);
        rank.pendingPayouts = rank.pendingPayouts.add(payout);
    }

    function updatePaymentRank(address teacher, address[] memory sponsors, address courseContract, uint payment) external isValid {
        TeacherRank storage trank = teacherRank[teacher];
        trank.coursesInProgress = trank.coursesInProgress.sub(1);
        trank.coursesTaught = trank.coursesTaught.add(1);
        trank.pendingPayouts = trank.pendingPayouts.sub(payment);
        trank.totalEarned = trank.totalEarned.add(payment);

        CourseContract cContract = CourseContract(courseContract);

        for (uint i = 0; i < sponsors.length; i++) {
            SponsorRank storage srank = sponsorRank[sponsors[i]];
            srank.inProgressSponsored = srank.inProgressSponsored.sub(1);
            uint sponsorPayment = cContract.sponsorDeposit(sponsors[i]);
            srank.pendingPayouts = srank.pendingPayouts.sub(sponsorPayment);
        }

        academyInfo.tvl = academyInfo.tvl.sub(payment);
        academyInfo.totalSponsored = academyInfo.totalSponsored.sub(payment);
        academyInfo.totalPayout = academyInfo.totalPayout.add(payment);
    }



    function updateSponsorsProgress(address[] memory sponsors) external isValid {
        for (uint i = 0; i < sponsors.length; i++) {
        SponsorRank storage rank = sponsorRank[sponsors[i]];
        rank.inProgressSponsored += 1;
        }
    }

    function updateSponsorship(address sponsor, address courseAddress, uint value) external isValid {
        SponsorRank storage rank = sponsorRank[sponsor];

        // Check if the course has already been sponsored by this sponsor
        if (!rank.sponsoredCourses[courseAddress]) {
            rank.coursesSponsored = rank.coursesSponsored.add(1);
            rank.sponsoredCourses[courseAddress] = true;
        }

        rank.totalSponsored = rank.totalSponsored.add(value);
        rank.pendingPayouts = rank.pendingPayouts.add(value);
        academyInfo.tvl = academyInfo.tvl.add(value);
        academyInfo.totalSponsored = academyInfo.totalSponsored.add(value);
    }

    function updateUnsponsor(address sponsor, uint value) external isValid {
        SponsorRank storage rank = sponsorRank[sponsor];
        rank.totalSponsored = rank.totalSponsored.sub(value);
        rank.pendingPayouts = rank.pendingPayouts.sub(value);
        if (value == rank.totalSponsored) {
            rank.coursesSponsored = rank.coursesSponsored.sub(1);
        }
        academyInfo.tvl = academyInfo.tvl.sub(value);
        academyInfo.totalSponsored = academyInfo.totalSponsored.sub(value);
    }
    
}