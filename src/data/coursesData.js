import { useContract, useContractRead, useContractWrite, useContractEvents, useStorage, useAddress } from "@thirdweb-dev/react";
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ethers } from "ethers";

//Course Contract functions
export default function CoursesData( item, academyAddress ) {

    //This uses the contract of each separate course
    console.log("First Item ", item);
    console.log("First CourseID ", item.data.courseId);
    const { contract } = useContract( item.data.courseId );

    const address = useAddress();
  
    const storage = new useStorage({
      gatewayUrls: ["https://peace-antz-academy.infura-ipfs.io","https://ipfs.thirdwebcdn.com/ipfs/"],
    });
  
  
    // const [_address, setAddress] = useState("");
    // useEffect(() => {
    //   if (address) {
    //     setAddress(address);
    //   }
    // }, [address]);
  
    //Roles
    const role = {
      "ADMIN": "0xa0f2aec2c0a3b5c1c964e3277c8ca4f6a9a7f6474a1b9c3f912258c8e46e7a28",
      "TEACHER": "0x5d2b5dbf9587f8e7d3e3f5b98b75a8e7ddd5a41a94b4742bc1b17040e7e62468",
      "STUDENT": "0x8b93a5a0cb4c6e3780e3b19b3b1651c2c2a8237b1ea5693b5f839a153f3a3e6c",
      "SPONSOR": "0x5f0a5f78118b6e0b700e0357ae3909aaafe8fa706a075935688657cf4135f9a9",
    };
    
    //Write hooks
    const { mutateAsync: initializeCourse, isLoading: isInitializingCourse } = useContractWrite(contract, "initialize");
    const { mutateAsync: setPayment, isLoading: isSettingPayment } = useContractWrite(contract, "setAmount");
    const { mutateAsync: enroll, isLoading: isLoadingEnroll } = useContractWrite(contract, "enroll");
    const { mutateAsync: withdraw, isLoading: isLoadingWithdraw } = useContractWrite(contract, "withdraw");
    const { mutateAsync: sponsor, isLoading: isLoadingSponsor } = useContractWrite(contract, "sponsor", { gasPrice: 5000000000 });
    const { mutateAsync: unsponsor, isLoading: isLoadingUnsponsor } = useContractWrite(contract, "unsponsor");
    const { mutateAsync: startCourse, isLoading: isLoadingStartCourse } = useContractWrite(contract, "updateCourseStatus");
    const { mutateAsync: bootStudent, isLoading: isLoadingBoot } = useContractWrite(contract, "bootStudent");
    const { mutateAsync: claimPayment, isLoading: isLoadingClaim } = useContractWrite(contract, "claimPayment");
    const { mutateAsync: dropOut, isLoading: isLoadingDropout } = useContractWrite(contract, "dropOut");
    const { mutateAsync: grantRole, isLoading: isLoadingGrantRoll } = useContractWrite(contract, "grantRole");
    const { mutateAsync: revokeRole, isLoading: isLoadingRevokeRoll } = useContractWrite(contract, "revokeRole");
    const { mutateAsync: passStudent, isLoading: isLoadingPass } = useContractWrite(contract, "passStudent");
    
    //Read hooks
    const { data: factoryAddress } = useContractRead(contract, "factoryAddress");
    const { data: teacherAddress } = useContractRead(contract, "teacher");
    const { data: uri } = useContractRead(contract, "uri");
  
    //const { data: courseCompleted, isLoading: isLoadingCourseCompleted } = useContractRead(contract, "courseCompleted", { args: [studentCheckAddress] });
    const { data: courseStatus, isLoading: isLoadingCourseStatus } = useContractRead(contract, "courseStatus");
    //const { data: role, isLoading: isLoadingRole } = useContractRead(contract, "hasRole", [role, account]);
    const { data: payment, isLoading: isLoadingPayment } = useContractRead(contract, "payment");
    const { data: paymentStatus, isLoading: isLoadingPaymentStatus } = useContractRead(contract, "paymentStatus");
    const { data: paymentTimestamp, isLoading: isLoadingPaymentTimestamp } = useContractRead(contract, "paymentTimestamp");
    //const { data: sponsorDeposit, isLoading: isLoadingSponsorDeposit } = useContractRead(contract, "sponsorDeposit", { args: [sponsorCheckAddress] });
    //const { data: sponsorCheck, isLoading: isLoadingSponsorCheck } = useContractRead(contract, "sponsors", { args: [sponsorCheckAddress] });
    const { data: sponsorshipTotal, isLoading: isLoadingSponsorshipTotal, error: sponsorshipTotalError } = useContractRead(contract, "sponsorshipTotal");
    const { data: studentDeposit, isLoading: isLoadingStudentDeposit, error: studentDepositError } = useContractRead(contract, "studentDeposit", [address]);
    const { data: studentStake, isLoading: isLoadingStudentStake, error: studentStakeError } = useContractRead(contract, "studentStake");
    //const { data: studentCheck, isLoading: isLoadingStudentCheck } = useContractRead(contract, "students", { args: [studentCheckAddress] });
    // Can instantiate the downloader with the default gateway URLs
  
    if (sponsorshipTotalError) {
      console.log("failed to read contract", sponsorshipTotalError);
    }
  
    
    
    //Event hooks
    const { data: paymentStatusEvents } = useContractEvents(
      contract,
      "PaymentStatus",
      {
        queryFilter: {
          filters: {},
          fromBlock: 50488912, // Events starting from this block
          toBlock: "latest", // Events up to this block
          order: "asc", // Order of events ("asc" or "desc")
        },
        subscribe: true, // Subscribe to new events
      },
    );
    const { data: roleGrantedEvents } = useContractEvents(
      contract,
      "RoleGranted",
      {
        queryFilter: {
          filters: {},
          fromBlock: 50488912, // Events starting from this block
          toBlock: "latest", // Events up to this block
          order: "asc", // Order of events ("asc" or "desc")
        },
        subscribe: true, // Subscribe to new events
      },
    );
    const { data: enrolledEvents } = useContractEvents(
      contract,
      "StudentEnrolled",
      {
        queryFilter: {
          filters: {},
          fromBlock: 50488912, // Events starting from this block
          toBlock: "latest", // Events up to this block
          order: "asc", // Order of events ("asc" or "desc")
        },
        subscribe: true, // Subscribe to new events
      },
    );
    const { data: roleRevokedEvents } = useContractEvents(
      contract,
      "RoleRevoked",
      {
        queryFilter: {
          filters: {},
          fromBlock: 50488912, // Events starting from this block
          toBlock: "latest", // Events up to this block
          order: "asc", // Order of events ("asc" or "desc")
        },
        subscribe: true, // Subscribe to new events
      },
    );
    const { data: dropoutEvents } = useContractEvents(
      contract,
      "DropOut",
      {
        queryFilter: {
          filters: {},
          fromBlock: 50488912, // Events starting from this block
          toBlock: "latest", // Events up to this block
          order: "asc", // Order of events ("asc" or "desc")
        },
        subscribe: true, // Subscribe to new events
      },
    );

    const { data: courseCompletedEvents } = useContractEvents(
      contract,
      "CourseCompleted", // Name of the event related to claiming the payment
      {
        queryFilter: {
          filters: {},
          fromBlock: 50488912, // Events starting from this block
          toBlock: "latest", // Events up to this block
          order: "asc", // Order of events ("asc" or "desc")
        },
        subscribe: true, // Subscribe to new events
      },
    );

    const { data: claimPaymentEvents } = useContractEvents(
        contract,
        "ClaimPayment", // Name of the event related to claiming the payment
        {
          queryFilter: {
            filters: {},
            fromBlock: 50488912, // Events starting from this block
            toBlock: "latest", // Events up to this block
            order: "asc", // Order of events ("asc" or "desc")
          },
          subscribe: true, // Subscribe to new events
        },
      );
      
    
    
    //State hooks
  
    const [roleGranted, setRoleGranted] = useState(false);
    const [paymentSet, setPaymentSet] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState(0);
    const paymentAmountInWei = ethers.utils.parseUnits(paymentAmount.toString(), 'ether');
  
    const [sponsorAmount, setSponsorAmount] = useState(0);
    let sponsorAmountInWei = '0';
      if (sponsorAmount !== '') {
          sponsorAmountInWei = ethers.utils.parseUnits(sponsorAmount.toString(), 'ether');
      }
  
    
    const [bootAddress, setBootAddress] = useState("");
    const [studentAddress, setStudentAddress] = useState("");
    const [unsponsorAddress, setUnsponsorAddress] = useState("");
    // const [unsponsorAmount, setUnsponsorAmount] = useState(0);
    // const unsponsorAmountInWei = ethers.utils.parseUnits(unsponsorAmount.toString(), 'ether');
  
    const [initData, setInitData] = useState([]);
    const [account, setAccount] = useState("");
    const [courseCount, setCourseCount] = useState(0);
    const [data, setData] = useState([]);
    const [balance, setBalance] = useState(null);
    const [uriData, setUriData] = useState("");
    const [uriSyl, setUriSyl] = useState("");
    const [json, setJson] = useState("");
    //const [courseId, setCourseId] = useState([]);
  
      // Additional state Course Info
      const [courseTitle, setCourseTitle] = useState("");
      const [description, setDescription] = useState("");
      const [timeCommitment, setTimeCommitment] = useState("");
      const [courseInfo, setCourseInfo] = useState(null);
      const [isLoadingCourseInfo, setIsLoadingCourseInfo] = useState(true);
      const [pdfData, setPdfData] = useState("");
      const [syllabusPdf, setSyllabusPdf] = useState(null);    
      const [startDateTime, setStartDateTime] = useState("");
      const [courseLStatus, setCourseLStatus] = useState('Pending');
      const [studentStatus, setStudentStatus] = useState({});
      const [studentsInProgress, setStudentsInProgress] = useState([]);
      const [studentsPassed, setStudentsPassed] = useState([]);
      const [studentsFailed, setStudentsFailed] = useState([]); // Dropout represents failure in this context.

      const [errorMessage, setErrorMessage] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isPaymentClaimed, setIsPaymentClaimed] = useState(false);

  
  
  
    let enrollStake;
    if (studentStake) {
      enrollStake = ethers.utils.formatEther(studentStake.toString());
    }
  
    // const studentStakeWei = ethers.BigNumber.from(studentStake);
    // const studentStakeEther = ethers.utils.formatEther(studentStakeWei);
    
    console.log("enrollStake", enrollStake);
    console.log("sponsorAmountInWei cD.js", sponsorAmountInWei);
    console.log("sponsorAmount", sponsorAmount);
    // console.log("sponsorAmountInWei", unsponsorAmountInWei);
    // console.log("sponsorAmount", unsponsorAmount);
    // console.log("studentStakeWei", studentStakeWei);
    // console.log("studentStakeEther", studentStakeEther);

    useEffect(() => {
      console.log('coursesData.js has re-rendered!');
  }, []);
  
  
    useEffect(() => {
      if (!paymentStatus && !courseStatus) {
        setCourseLStatus("Pending");
      } else if (paymentStatus && !courseStatus) {
        setCourseLStatus("Open");
      } else if (!paymentStatus && courseStatus) {
        setCourseLStatus("In-Progress");
      } else if (paymentStatus && courseStatus) {
        setCourseLStatus("Complete");
      }
    }, [paymentStatus, courseStatus]);

    useEffect(() => {
        if (claimPaymentEvents && claimPaymentEvents.length > 0) {
          setIsPaymentClaimed(true);
        }
      }, [claimPaymentEvents]);
      
      useEffect(() => {
        if (syllabusPdf) {
          setSyllabusPdf(syllabusPdf);
        }
      }, [syllabusPdf]);
  
    useEffect(() => {
      if (item && address && roleGrantedEvents && roleGrantedEvents.length > 0) {
        setRoleGranted(true);
        setAccount(address);
      }
    }, [roleGrantedEvents, address, item]);
  
    useEffect(() => {
      if (paymentStatusEvents && paymentStatusEvents.some(event => event.data.paymentStatus === true)) {
        setPaymentSet(true);
      } else {
        setPaymentSet(false);
      }
    }, [paymentStatusEvents, roleGrantedEvents]);
  
    useEffect(()=>{
      if (studentAddress){
        setStudentAddress(studentAddress);
      }
  
    }, [studentAddress]);
  
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const web3 = new Web3(Web3.givenProvider || "https://peace-antz-academy.infura-ipfs.io");
                if (web3.utils.isAddress(item?.data?.courseId)) {
                    const contractBalance = await web3.eth.getBalance(item?.data?.courseId);
                    console.log("Raw Balance in Wei:", contractBalance); 
                    setBalance(web3.utils.fromWei(contractBalance, 'ether'));
                } else {
                    console.error(`Invalid address: ${item?.data?.courseId}`);
                }
            } catch (error) {
                console.error(`Error fetching balance for address ${item?.data?.courseId}:`, error);
            }
        };
      
        fetchBalance(item?.data?.courseId);
    }, [item?.data?.courseId, courseCompletedEvents, enrolledEvents, roleRevokedEvents, dropoutEvents]);
    
  

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       if (courseInfo) {
    //         setCourseInfo(courseInfo);
    //         const uriData = await uriCall();
    //         setUriData(uriData);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching course data:', error);
    //     }
    //   };
  
    // }, [courseInfo, uriData]);
  
    useEffect(() => {
      if (pdfData) {
        setPdfData(pdfData);
      }
    },[syllabusPdf]);
  
    useEffect(() => {
      if (uriData && uriData.ok && uriData.headers && uriData.headers.get('content-type') === 'application/json') {
        uriData.json().then((data) => {
          setCourseInfo(data.courseInfo);
          
        }).catch((error) => {
          console.error('Failed to parse JSON data:', error);
        });
      }
    }, [uriData, paymentStatusEvents]);
  
    useEffect(() => {
      if (!courseInfo && uri) {
        uriCall();
  
      }
  }, [isLoadingStudentDeposit, paymentStatusEvents, uri]);
  
  useEffect(() => {
    const newStatus = { ...studentStatus };
  
        if (enrolledEvents) {
          enrolledEvents.forEach(e => {
            if (!newStatus[e.data.account] || e.transaction.blockNumber > newStatus[e.data.account].blockNumber) {
              newStatus[e.data.account] = { status: "inProgress", blockNumber: e.transaction.blockNumber };
            }
          });
        }
      
        if (courseCompletedEvents) {
          courseCompletedEvents.forEach(e => {
            if (!newStatus[e.data.account] || e.transaction.blockNumber > newStatus[e.data.account].blockNumber) {
              newStatus[e.data.account] = { status: "passed", blockNumber: e.transaction.blockNumber };
            }
          });
        }
      
        if (dropoutEvents) {
          dropoutEvents.forEach(e => {
            if (!newStatus[e.data.account] || e.transaction.blockNumber > newStatus[e.data.account].blockNumber) {
              newStatus[e.data.account] = { status: "failed", blockNumber: e.transaction.blockNumber };
            }
          });
        }
      
        setStudentStatus(newStatus);
      }, [enrolledEvents, courseCompletedEvents, dropoutEvents]);

      useEffect(() => {
        const inProgress = [];
        const passed = [];
        const failed = [];
      
        Object.keys(studentStatus).forEach(student => {
          switch (studentStatus[student].status) {
            case "inProgress":
              inProgress.push(student);
              break;
            case "passed":
              passed.push(student);
              break;
            case "failed":
              failed.push(student);
              break;
            default:
              break;
          }
        });
      
        setStudentsInProgress(inProgress);
        setStudentsPassed(passed);
        setStudentsFailed(failed);
      }, [studentStatus]);
      
  
  
      //TROUBLESHOOTING
  //console.log("item:", item);
  console.log("factoryAddress:", factoryAddress);
  console.log("teacherAddress:", teacherAddress);
  console.log("courseStatus:", courseStatus);
  console.log("payment:", payment);
  console.log("paymentStatus:", paymentStatus);
  console.log("paymentTimestamp:", paymentTimestamp);
  console.log("sponsorshipTotal:", sponsorshipTotal);
  console.log("studentDeposit:", studentDeposit);
  console.log("studentStake:", studentStake);
  console.log("paymentStatusEvents:", paymentStatusEvents);
  console.log("roleGrantedEvents:", roleGrantedEvents);
  console.log("courseInfo", courseInfo);
  console.log("pdfData", pdfData);
  console.log("syllabusPdf", syllabusPdf);
  console.log("studentAddress", studentAddress);
  console.log("enrolledEvents", enrolledEvents);
  console.log("courseCompletedEvents", courseCompletedEvents);
  console.log("dropoutEvents", dropoutEvents);
  console.log("claimPaymentEvents", claimPaymentEvents);
  
  
    //JS Functions
    // Function to retrieve course information from local storage
  
    
    const handlePdf = async (syllabusPdf) => {
      try {
        const pdfData = await storage.upload(syllabusPdf); // Assuming you have the `storage` object already defined
        console.log("PDF uploaded successfully:", pdfData);
        setPdfData(pdfData);
      } catch (error) {
        console.error("Failed to upload PDF:", error);    
      }
    };
  
    const uploadFile = async (courseTitle, description, timeCommitment, startDateTime, calendarLink, pdfData, imageData) => {
      try {
        // Validate that all required information is present
        if (!courseTitle || !description || !timeCommitment || !startDateTime || !pdfData || !imageData) {
          throw new Error("Missing required course information");
        }
    
        const jsonFile = {
          courseInfo: {
            title: courseTitle,
            description: description,
            timeCommitment: timeCommitment,
            startDate: startDateTime,
            calendarLink: calendarLink,
            syllabus: pdfData,
            image: imageData
          }
        };
    
        const courseInfo = await storage.upload(jsonFile);
        console.log("File uploaded successfully:", courseInfo);
        return courseInfo;
      } catch (error) {
        console.error("Failed to upload file:", error);
        setErrorMessage(error.message); // set error message
        setIsModalOpen(true); // open error modal
      }
    };
    
    
    
  
    const initializeCourseCall = async () => {
      try {
        const initData = await initializeCourse({ args: [item.data.account, academyAddress] });
        console.info("contract call success", initData);
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
    console.log("initData:", initData);
  
    const setPaymentCall = async (courseTitle, description, timeCommitment, startDateTime, calendarLink, pdfData, imageData, paymentAmountInWei) => {
      try {
        // Upload the file and get the course info
        let courseInfo;
        try {
          courseInfo = await uploadFile(courseTitle, description, timeCommitment, startDateTime, calendarLink, pdfData, imageData);
        } catch (err) {
          console.error("Failed to upload file:", err);
          let errorReason;
          if (err.message.includes('Reason:')) {
              errorReason = err.split('Error: ')[1]?.split(' ')[0]?.trim();
          } else {
              errorReason = err.message;
          }
          setErrorMessage(errorReason);
        setIsModalOpen(true);
          return;
        }
      
        // Check if courseInfo is available
        if (!courseInfo) {
          console.error("Course info is not available");
          return;
        }
      
        const setPaymentData = await setPayment({ args: [paymentAmountInWei, courseInfo] });
        console.info("Contract call success", setPaymentData);
        const uriData = await uriCall();
        console.info("uriData call success", uriData);
      } catch (err) {
        console.error("Contract call failure", err);
        let errorReason;
          if (err.message.includes('Reason:')) {
              errorReason = err.message.split('Error: ')[1]?.split(' ')[0]?.trim();
          } else {
              errorReason = err.message;
          }
          setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    };
    
  
    const enrollCall = async () => {
      try {
        const enrollData = await enroll({ 
          args: [], 
          overrides: { 
            value: studentStake
          } 
        }); 
        console.info("contract call success", enrollData);
      } catch (error) {
        console.error("contract call failure", error);
        const errorReason = error.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
  
    const sponsorCall = async () => {
      try {
        const sponsorData = await sponsor({ 
          args: [], 
          overrides: { 
            value: sponsorAmountInWei
          } 
        }); 
        console.info("contract call success", sponsorData);
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
    const unsponsorCall = async () => {
      try {
        const unsponsorData = await unsponsor({ args: [address, sponsorAmountInWei] });
        console.info("contract call successs", unsponsorData);
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
    const startCourseCall = async () => {
      try {
        const startData = await startCourse({ args: [] }); 
        console.info("contract call success", startData);
        
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
    const bootCall = async (studentAddress) => {
      try {
        const bootData = await bootStudent({ args: [studentAddress] });
        console.info("contract call success", bootData);
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
    
  
    const passCall = async (studentAddress) => {
      try {
        const passData = await passStudent({ args: [studentAddress] });
        console.info("contract call successs", passData);
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
    const claimCall = async () => {
      try {
        const claimData = await claimPayment({ args: [] });
        console.info("contract call successs", claimData);
        
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
    const dropCall = async () => {
      try {
        const dropData = await dropOut({ args: [] });
        console.info("contract call successs", dropData);
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
    // const grantRoleCall = async () => {
    //   try {
    //     const grantRoleData = await grantRole({ args: [role, address] });
    //     console.info("contract call successs", grantRoleData);
    //   } catch (err) {
    //     console.error("contract call failure", err);
    //   }
    // }
  
    // const revokeCall = async () => {
    //   try {
    //     const revokeData = await revokeRole({ args: [role, address] });
    //     console.info("contract call successs", revokeData);
    //   } catch (err) {
    //     console.error("contract call failure", err);
    //   }
    // }
  
    const withdrawCall = async () => {
      try {
        const withdrawData = await withdraw({ args: [] });
        console.info("contract call successs", withdrawData);
      } catch (err) {
        console.error("contract call failure", err);
        const errorReason = err.message.split('Reason: ')[1].split('╔')[0].trim();
        setErrorMessage(errorReason);
        setIsModalOpen(true);
      }
    }
  
    const uriCall = async () => {
      try {
          if (uri !== null && uri !== undefined && uri !== "") {
              const uriData = await storage?.download(uri);
              setUriData(uriData);
              console.info("URI call success", uriData);
              return uriData;
          } else {
              console.error("URI is null or undefined.");
          }
      } catch (err) {
          console.error("URI call failure", err);
          throw err;
      }
  };
  
  
    
    
    console.log("uri", uri);
    console.log("json", json);
    console.log("uriSyl", uriSyl);
    console.log("uriData", uriData);
  //Course Card Design
  //if (!address) return <div>No wallet connected</div>;

  console.log('Title on course data:', courseTitle);
  console.log('Description on course data:', description);
  
  return {
    // State Variables
    account,
    address,
    factoryAddress,
    teacherAddress,
    uri,
    courseStatus,
    payment,
    paymentStatus,
    paymentTimestamp,
    sponsorshipTotal,
    studentDeposit,
    studentStake,
    paymentStatusEvents,
    roleGrantedEvents,
    enrolledEvents,
    roleRevokedEvents,
    dropoutEvents,
    courseCompletedEvents,
    balance,
    initData,
    data,
    uriData,
    uriSyl,
    json,
    pdfData,
    courseInfo,
    courseTitle,
    description,
    timeCommitment,
    startDateTime,
    courseLStatus,
    errorMessage,
    isModalOpen,
    paymentSet,
    paymentAmount,
    sponsorAmount,
    bootAddress,
    studentAddress,
    unsponsorAddress,
    roleGranted,
    courseCount,
    sponsorAmountInWei,
    studentsInProgress,
    studentsPassed,
    studentsFailed,
    // Method to mutate state or interact with contracts
    initializeCourseCall,
    setPaymentCall,
    enrollCall,
    sponsorCall,
    unsponsorCall,
    startCourseCall,
    bootCall,
    passCall,
    claimCall,
    dropCall,
    withdrawCall,
    uriCall,
    uploadFile,
    handlePdf,
    // Loader states
  
    isLoadingPayment,
    isLoadingEnroll,
    isLoadingWithdraw,
    isLoadingSponsor,
    isLoadingUnsponsor,
    isLoadingStartCourse,
    isLoadingBoot,
    isLoadingClaim,
    isLoadingDropout,
    isLoadingGrantRoll,
    isLoadingRevokeRoll,
    isLoadingPass,
    isLoadingCourseStatus,
    isLoadingPayment,
    isLoadingPaymentStatus,
    isLoadingPaymentTimestamp,
    isLoadingSponsorshipTotal,
    isLoadingStudentDeposit,
    isLoadingStudentStake,
    isLoadingCourseInfo,
    isPaymentClaimed,
    isSettingPayment,
    // Setter methods for state
    setRoleGranted,
    setPaymentSet,
    setPaymentAmount,
    setSponsorAmount,
    setBootAddress,
    setStudentAddress,
    setUnsponsorAddress,
    setInitData,
    setAccount,
    setCourseCount,
    setData,
    setBalance,
    setUriData,
    setUriSyl,
    setJson,
    setPdfData,
 
    setCourseInfo,
    setCourseTitle,
    setDescription,
    setTimeCommitment,
    setStartDateTime,
    setCourseLStatus,
    setErrorMessage,
    setIsModalOpen,
  };
  
  }