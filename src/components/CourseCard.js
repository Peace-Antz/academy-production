import React, { Fragment, useState, useEffect } from 'react';
import { useStorage } from "@thirdweb-dev/react";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Rating from './Rating';
import CoursesData from "../data/coursesData";
import Courses from "../pages/Courses";
import feather from 'feather-icons';
import { ethers } from "ethers";
import Button from '@mui/joy/Button';
import LinearProgress from '@mui/joy/LinearProgress';
import CircularProgress from '@mui/joy/CircularProgress';
import Tooltip from '@mui/joy/Tooltip';
import Input from '@mui/joy/Input';
import { Input as BaseInput } from '@mui/base/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import { MediaRenderer } from "@thirdweb-dev/react";
import TextField from '@mui/material/TextField';
import Badge from '@mui/joy/Badge';





export default function CourseCard({
  //key,
  item,
  academyAddress,
  onCardSelect,
  onCardClick,
  //courseInfo,
  // courseNumber,
   //category,
   //title,
   rareFind = false,
   liked = false,
   thumbnail = null,
}) {
  const [selectedSyllabus, setSelectedSyllabus] = useState(null);

  console.log("selectedSyllabus", selectedSyllabus);

  console.log('Received item in CourseCard:', item);

  const {
    initializeCourse,
    isInitializingCourse,
    setPayment,
    isSettingPayment,
    enroll,
    isLoadingEnroll,
    withdraw,
    isLoadingWithdraw,
    sponsor,
    isLoadingSponsor,
    unsponsor,
    isLoadingUnsponsor,
    startCourse,
    isLoadingStartCourse,
    bootStudent,
    isLoadingBoot,
    claimPayment,
    isLoadingClaim,
    dropOut,
    isLoadingDropout,
    grantRole,
    isLoadingGrantRole,
    revokeRole,
    isLoadingRevokeRole,
    passStudent,
    isLoadingPass,
    isPaymentClaimed,
    factoryAddress,
    teacherAddress,
    uri,
    courseStatus,
    isLoadingCourseStatus,
    payment,
    isLoadingPayment,
    paymentStatus,
    isLoadingPaymentStatus,
    paymentTimestamp,
    isLoadingPaymentTimestamp,
    sponsorshipTotal,
    isLoadingSponsorshipTotal,
    sponsorshipTotalError,
    studentDeposit,
    isLoadingStudentDeposit,
    studentStake,
    isLoadingStudentStake,
    courseInfo,
    courseLStatus,
    sponsorAmount,
    sponsorAmountInWei,
    balance,
    enrolledEvents,
    address,
    enrolledStudents,
    syllabusPdf,
    pdfData,
    studentsInProgress,
    studentsPassed,
    studentsFailed,
    
    setSponsorAmount,
    enrollCall,
    dropCall,
    withdrawCall,
    sponsorCall,
    unsponsorCall,
    initializeCourseCall,
    handlePdf,
    setPaymentCall,
    startCourseCall,
    passCall,
    bootCall,
    claimCall,
    
  } = CoursesData(item, academyAddress);

  const storage = new useStorage({
    gatewayUrls: ["https://peace-antz-academy.infura-ipfs.io","https://ipfs.thirdwebcdn.com/ipfs/"],
  });


  const {
    open,
    setOpen,
    formSubmitted,
    uploading,
    handleFileChange,
    modalTitle,
    modalSetTitle,
    modalDescription,
    setDescription,
    modalTimeCommitment,
    setTimeCommitment,
    modalStartDate,
    setStartDate,
    modalCalendarLink,
    setModalCalendarLink,
    modalPayment,
    modalSetPayment,
    setFormSubmitted,
    fileUploaded,
    setFileUploaded,
    imageUploading,
    imageUploaded,
    handleImageUpload,
    courseImage,
    uploadFile,
    paymentAmountInWei
  } = CourseDetailsModalData();

  console.log("Course Card uploading syllabus status", uploading)
  console.log("Course Card uploading course image status", imageUploading)


  const extractFileNameFromURI = (uri) => {
    const filename = uri.split('/').pop();
    return decodeURIComponent(filename);
};



  useEffect(() => {
    console.log('CourseCard has re-rendered!');
}, []);

// useEffect(() => {
//   if (selectedSyllabus !==null) {
//     onSelect(syllabus);
//     // setCourseCount(data.length);
//   }
// }, [selectedSyllabus]);

const [studentModalOpen, setStudentModalOpen] = useState(false);


// Use default values if courseInfo is null or undefined
const defaultInfo = courseLStatus === "Pending" ? "TBD" : "Fetching Data...";
const {
  title = defaultInfo,
  description = defaultInfo,
  timeCommitment = defaultInfo,
  startDate = defaultInfo,
  image = defaultInfo,
  calendarLink = defaultInfo,
  syllabus = defaultInfo,
} = courseInfo || {};



let progress;
let maticNeeded;
let progressMessage = "";

if (payment === 0) {
  progressMessage = "Course is free, enroll before it starts!";
  progress = 100;  // Setting it to 100% for a free course.
} else if (!paymentStatus && !courseStatus) {
  progressMessage = "Whatever you set as the payment amount will be the amount required to sponsor";
  progress = 0; // Default to 0% if undefined or null.
} else {
  progress = (sponsorshipTotal / payment) * 100;
  maticNeeded = Number(payment - sponsorshipTotal) * 0.000000000000000001;
}

let color;
let badgeContent;

switch(courseLStatus) {
  case 'Pending':
    color = 'danger';
    badgeContent = 'Pending';
    break;
  case 'Open':
    color = 'success';
    badgeContent = 'Open';
    break;
  case 'In-Progress':
    color = 'primary';
    badgeContent = 'In-Progress';
    break;
  case 'Complete':
    color = 'neutral';
    badgeContent = 'Complete';
    break;
  default:
    color = 'neutral';
    badgeContent = 'Unknown';
}

console.log('progress', progress);
console.log('maticNeeded', maticNeeded);
console.log('payment CC check', payment);
console.log('studentsInProgress', studentsInProgress);
console.log('studentsPassed', studentsPassed);
console.log('studentsInProgress', studentsFailed);

const isEnrolled = enrolledStudents && enrolledStudents.includes(address);

const courseStarted = courseStatus === true;

let buttonLabel = "";
let buttonColor = "success";
let buttonAction = null;

// Check if the student is enrolled
if (studentDeposit >0) {
    if (courseStarted) {
        buttonLabel = "Dropout";
        buttonColor = "danger";
        buttonAction = dropCall;
    } else {
        buttonLabel = "Withdraw";
        buttonColor = "warning";
        buttonAction = withdrawCall;
    }
} else {  // If student is not enrolled
    switch (courseLStatus) {
        case "Open":
            buttonLabel = "Enroll";
            buttonColor = "success";
            buttonAction = enrollCall;
            break;
        case "Pending":
        case "Complete":
            buttonLabel = "Course Locked";
            buttonColor = "neutral";
            buttonAction = null;
            break;
        default:
            // Handle any unexpected cases or log an error
            console.error("Unexpected courseLStatus: ", courseLStatus);
    }
}


console.log('courseStarted', courseStarted);
console.log('courseLStatus', courseLStatus);
console.log('enrolledEvents', enrolledEvents);
console.log('enrolledStudents', enrolledStudents);
console.log('isEnrolled', isEnrolled);
  console.log('courseInfo received by course card:', courseInfo);
  console.log('syllabus to send to Courses.js:', syllabus);
  console.log('sponsorAmountInWei CC.js', sponsorAmountInWei);

  const [isLiked, setIsLiked] = useState(liked);



  const displayAddress = teacherAddress ? `${teacherAddress.substring(0, 4)}...${teacherAddress.slice(-4)}` : '';

  const tooltipContent = React.createElement(
    Box,
    {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        gap: 1,
        alignItems: 'center'
      }
    },
    React.createElement(
      Input,
      {
        placeholder: "Enter amount in MATIC",
        value: sponsorAmount === '0' ? '' : sponsorAmount,
        onChange: (s) => {
          const value = s.target.value;
          if (!isNaN(value) && Number(value) >= 0) {
            setSponsorAmount(value);
          } else {
            setSponsorAmount('0');
          }
        },
        type: "number",
        min: "0",
        step: "0.000000000000000001",
        sx: {
          '&::before': {
            display: 'none',
          },
          '&:focus-within': {
            outline: '2px solid var(--Input-focusedHighlight)',
            outlineOffset: '2px',
          },
        }
      }
    ),
    React.createElement(
      Button,
      {
        variant: 'solid',
        color: 'success',
        onClick: () => {
          (async () => {
            try {
              // Call the sponsor function
              await sponsorCall(item.data.courseId, sponsorAmountInWei);
            } catch (error) {
              console.error("Error sponsoring:", error);
              // Handle the error, for example, by setting an error state or showing a notification
            }
          })();
        },
      },
      "Sponsor"
    ),
    React.createElement(
      Button,
      {
        variant: 'solid',
        color: 'danger',
        onClick: () => {
          // Call the unsponsor function
          unsponsorCall(item.data.courseId, sponsorAmountInWei);
        },
      },
      "Unsponsor"
    )
  );

  function isCourseLocked(courseLStatus) {
    return courseLStatus === "In-Progress" || courseLStatus === "Complete";
}

  useEffect(() => {
    feather.replace();
  }, []);

  function InitializeButton() {
    return (
      <Button
        variant="outlined"
        color="danger"
        onClick= {initializeCourseCall}
        disabled={isInitializingCourse}
      >
        Initialize Me!
      </Button>
    );
  }
  
  const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const LoadingOverlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7); // semi-transparent white
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; // to ensure it's above other content
`;


function CourseDetailsModalData() {
  const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [fileUploaded, setFileUploaded] = React.useState(false);

  const [modalTitle, modalSetTitle] = React.useState('');
  const [modalDescription, setDescription] = React.useState('');
  const [modalTimeCommitment, setTimeCommitment] = React.useState('');
  const [modalStartDate, setStartDate] = React.useState('');
  const [modalCalendarLink, setModalCalendarLink] = React.useState('');
  const [modalPayment, modalSetPayment] = React.useState('0');
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [courseImage, setCourseImage] = useState(null);
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const paymentAmountInWei = modalPayment > 0 
  ? ethers.utils.parseUnits(modalPayment.toString(), 'ether') 
  : ethers.utils.parseUnits("0", 'ether');

  console.log('Payment in wei', paymentAmountInWei)

  

  const handleFileChange = async (file) => {
    setUploading(true);
    try {
      await handlePdf(file);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setUploading(false);
    setFileUploaded(true);
  };

const handleImageUpload = async (file) => {
  setImageUploading(true);
  try {
    const uploadedImage = await storage.upload(file);
    setCourseImage(uploadedImage);
    setImageUploaded(true);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
  setImageUploading(false);
};


  return {
    open,
    setOpen,
    uploading,
    fileUploaded,
    modalTitle,
    modalSetTitle,
    modalDescription,
    setDescription,
    modalTimeCommitment,
    setTimeCommitment,
    modalStartDate,
    setStartDate,
    modalCalendarLink,
    setModalCalendarLink,
    modalPayment,
    modalSetPayment,
    formSubmitted,
    setFormSubmitted,
    setFileUploaded,
    handleFileChange,
    imageUploading,
    imageUploaded,
    setImageUploaded,
    courseImage,
    setCourseImage,
    handleImageUpload,
    paymentAmountInWei
  };
}

function formatNumberBasedOnValue(value) {
  if (!value) return "0";
  if (value >= 10) {
      const formatted = parseFloat(value.toFixed(1));
      return formatted % 1 === 0 ? formatted.toFixed(0) : formatted.toFixed(1);
  } else {
      const formatted = parseFloat(value.toFixed(2));
      return formatted % 1 === 0 ? formatted.toFixed(0) : formatted.toFixed(2);
  }
}

let formattedStake = "0"; // default value
if(studentStake !== undefined) {
    formattedStake = formatNumberBasedOnValue(parseFloat(ethers.utils.formatEther(studentStake.toString())));
}

function StudentEvaluationModal({
  open,
  setOpen,
  studentsInProgress = [],
  studentsPassed = [],
  studentsFailed = [],
  passCall,
  bootCall,
}) {
  const handlePass = async (studentAddress) => {
    try {
      await passCall(studentAddress); // Assuming passCall accepts the student address.
      // If needed, update local state or cache after passing a student.
    } catch (error) {
      console.error("Failed to pass student:", error);
    }
  };

  const handleFail = async (studentAddress) => {
    try {
      await bootCall(studentAddress); // Assuming bootCall accepts the student address.
      // If needed, update local state or cache after failing a student.
    } catch (error) {
      console.error("Failed to fail student:", error);
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalOverflow>
        <ModalDialog>
          <DialogTitle>Student Evaluation</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <Typography variant="h6">In Progress</Typography>
              {studentsInProgress && studentsInProgress.map(studentAddress => (
                <div key={studentAddress}>
                  {studentAddress}
                  <Button onClick={() => handlePass(studentAddress)}>Pass</Button>
                  <Button onClick={() => handleFail(studentAddress)}>Fail</Button>
                </div>
              ))}

              <Typography variant="h6">Passed</Typography>
              {studentsPassed && studentsPassed.map(studentAddress => (
                <div key={studentAddress}>
                  {studentAddress}
                </div>
              ))}

              <Typography variant="h6">Failed</Typography>
              {studentsFailed && studentsFailed.map(studentAddress => (
                <div key={studentAddress}>
                  {studentAddress}
                </div>
              ))}
            </Stack>
          </DialogContent>
          {!studentsInProgress.length && !isPaymentClaimed ? 
              <Button onClick={claimCall}>
                  Claim Payment
              </Button>
          :
              isPaymentClaimed &&
              <Button disabled style={{ backgroundColor: 'grey' }}>Distribute Unlock Certificates *Coming Soon!*</Button>
          }

        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
}

  
  if (teacherAddress === '0x0000000000000000000000000000000000000000') {
    return (
      <Card
        variant='outlined'
        orientation='horizontal'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',  // Adjust this value based on your design needs
          boxShadow: 'none',
          borderRadius: 'sm',
        }}
      >
        <InitializeButton />
      </Card>
    );
  } else {
  return React.createElement(
    Card,
    {
      variant: 'outlined',
      orientation: 'horizontal',
      sx: {
        transition: '250ms all',
        padding: {
          xs: 0,
          sm: 2,
        },
        boxShadow: 'none',
        borderRadius: 'sm',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      },
       onClick: () => {
      if (onCardClick && onCardSelect && syllabus) {
        onCardClick(onCardSelect(syllabus));
      }
    }
  },  
    React.createElement(
      Stack,
      {
        flexDirection: 'row',
        direction: {
          xs: 'column',
          sm: 'row',
        },
        width: '100%',
        spacing: 2.5,
      },
      React.createElement(
        Badge,
        {
          color: color,
          badgeContent: badgeContent,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          sx: {
            
            width: {
              xs: '100%',
              sm: 200,
            },
            marginBottom: {
              xs: -2.5,
              sm: 0,
            },
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          },
        },
      React.createElement(
        Box,
        {
          sx: {
            
            width: {
              xs: '100%',
              sm: 200,
            },
            marginBottom: {
              xs: -2.5,
              sm: 0,
            },
          },
        },
        React.createElement(
          AspectRatio,
          {
            ratio: 16 / 9,
            sx: (theme) => ({
              borderRadius: 'xs',
              [theme.breakpoints.down('sm')]: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            }),
          },
          React.createElement(MediaRenderer, { alt: 'Thumbnail', src: image, width: '100%', height: '100%' }),
          // rareFind && (
          //   React.createElement(
          //     Chip,
          //     {
          //       variant: 'soft',
          //       startDecorator: React.createElement('i', { 'data-feather': 'award' }),
          //       size: 'sm',
          //       sx: { position: 'absolute', bottom: 8, left: 8 },
          //     },
          //     'Rare find'
          //   )
          // ),
        ),
        // Inside the return statement of CourseCard

  address === teacherAddress && (
    courseLStatus === "Pending" ? 
    <React.Fragment>
    <Button
      variant="outlined"
      color="neutral"
      onClick={(event) => {
        event.stopPropagation();
        setFormSubmitted(false);
        setOpen(true);
      }}
      startDecorator={
        <SvgIcon>
        <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M6.634,13.591H2.146c-0.247,0-0.449,0.201-0.449,0.448v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449v-2.692C7.083,13.792,6.881,13.591,6.634,13.591 M6.185,16.283h-3.59v-1.795h3.59V16.283zM6.634,8.205H2.146c-0.247,0-0.449,0.202-0.449,0.449v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V8.653C7.083,8.407,6.881,8.205,6.634,8.205 M6.185,10.897h-3.59V9.103h3.59V10.897z M6.634,2.819H2.146c-0.247,0-0.449,0.202-0.449,0.449V5.96c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V3.268C7.083,3.021,6.881,2.819,6.634,2.819 M6.185,5.512h-3.59V3.717h3.59V5.512z M15.933,5.683c-0.175-0.168-0.361-0.33-0.555-0.479l1.677-1.613c0.297-0.281,0.088-0.772-0.31-0.772H9.336c-0.249,0-0.448,0.202-0.448,0.449v7.107c0,0.395,0.471,0.598,0.758,0.326l1.797-1.728c0.054,0.045,0.107,0.094,0.161,0.146c0.802,0.767,1.243,1.786,1.243,2.867c0,1.071-0.435,2.078-1.227,2.837c-0.7,0.671-1.354,1.086-2.345,1.169c-0.482,0.041-0.577,0.733-0.092,0.875c0.687,0.209,1.12,0.314,1.839,0.314c0.932,0,1.838-0.173,2.673-0.505c0.835-0.33,1.603-0.819,2.262-1.449c1.322-1.266,2.346-2.953,2.346-4.751C18.303,8.665,17.272,6.964,15.933,5.683 M15.336,14.578c-1.124,1.077-2.619,1.681-4.217,1.705c0.408-0.221,0.788-0.491,1.122-0.812c0.97-0.929,1.504-2.168,1.504-3.485c0-1.328-0.539-2.578-1.521-3.516c-0.178-0.17-0.357-0.321-0.548-0.456c-0.125-0.089-0.379-0.146-0.569,0.041L9.769,9.327v-5.61h5.861l-1.264,1.216c-0.099,0.094-0.148,0.229-0.137,0.366c0.014,0.134,0.088,0.258,0.202,0.332c0.313,0.204,0.61,0.44,0.882,0.7c1.158,1.111,2.092,2.581,2.092,4.145C17.405,12.026,16.48,13.482,15.336,14.578"></path>
						</svg>
        </SvgIcon>
      }
    >
      Input Course Details
    </Button>
    <Modal onClick={(event) => event.stopPropagation()} open={open} onClose={() => { if (formSubmitted || !uploading) setOpen(false); }}>
      <ModalOverflow>
      <ModalDialog>
        <DialogTitle>Input Course Details</DialogTitle>
        <DialogContent>Fill in the information of the course.</DialogContent>
        <form
          onSubmit={() => {
            //event.preventDefault();
            //event.stopPropagation();
            setPaymentCall(modalTitle, modalDescription, modalTimeCommitment, modalStartDate, modalCalendarLink, pdfData, courseImage, paymentAmountInWei);
            setFormSubmitted(true);
            setOpen(false);
          }}
        >
          <Stack  spacing={1}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input maxLength="5" value={modalTitle} onChange={(e) => modalSetTitle(e.target.value)} placeholder="Name your course" autoFocus required />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input slotProps={{ input: { multiline: true, rows:"2", maxLength:"250" } }} value={modalDescription} onChange={(e) => setDescription(e.target.value)} placeholder="Write a brief description" required />
            </FormControl>
            <FormControl>
              <FormLabel>Time Commitment in hours</FormLabel>
              <Input type="number" value={modalTimeCommitment} onChange={(e) => setTimeCommitment(e.target.value)}placeholder="Recommend 1-2hr" required />
            </FormControl>
            <FormControl>
              <FormLabel>Course Starts</FormLabel>
              <Input type="datetime-local" value={modalStartDate} onChange={(e) => setStartDate(e.target.value)} required />
            </FormControl>
            <FormControl>
            <FormLabel>Calender Link</FormLabel>
              <Input type="url" value={modalCalendarLink} onChange={(e) => setModalCalendarLink(e.target.value)} placeholder="Link to a course calendar"/>
            </FormControl>
            <FormControl>
            <FormLabel>Set Your Payment</FormLabel>
              <Input type="number" value={modalPayment} onChange={(e) => modalSetPayment(e.target.value)} placeholder="Enter amount in MATIC" required />
            </FormControl>
            <FormControl>
            <div style={{ position: 'relative' }}>
    {fileUploaded ? (
      <Typography>
    {extractFileNameFromURI(pdfData)}
    <p></p>
              <Button
              onClick={(event) => event.stopPropagation()}
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              startDecorator={
                <SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="green"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                >
							<path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                </svg>
                </SvgIcon>
              }
          >
              Upload New Syllabus
              <VisuallyHiddenInput
                  type="file"
                  accept=".pdf"
                  value={syllabusPdf}
                  onChange={async (e) => {
                    e.stopPropagation();
                    try {
                        await handleFileChange(e.target.files[0]);
                        setFileUploaded(true);
                    } catch (error) {
                        console.error("Error uploading file:", error);
                        // Handle the error appropriately
                    }
                }}
              />
          </Button>
          </Typography>
    ) : (
        <Button
            onClick={(event) => event.stopPropagation()}
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="neutral"
            startDecorator={
              <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </SvgIcon>
            }
        >
            Upload Syllabus
            <VisuallyHiddenInput
                required
                type="file"
                accept=".pdf"
                value={syllabusPdf}
                onChange={async (e) => {
                  e.stopPropagation();
                  try {
                      await handleFileChange(e.target.files[0]);
                      setFileUploaded(true);
                  } catch (error) {
                      console.error("Error uploading file:", error);
                      // Handle the error appropriately
                  }
              }}
            />
        </Button>
    )}
    {uploading && (
        <LoadingOverlay>
            <CircularProgress />
            Uploading...
        </LoadingOverlay>
    )}
</div>
<div style={{ position: 'relative', marginTop: '1rem' }}>
    {imageUploaded ? (
      <div>
        <AspectRatio
        variant="outlined"
        ratio="16/9"
        sx={{
          width: 300,

          borderRadius: 'md',
        }}
      >
        {courseImage && <MediaRenderer 
        src={courseImage} 
        alt="Uploaded Course Image" 
        width={300}
        height='100%'
        />}
        </AspectRatio>
        <Button
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="outlined"
          color="neutral"
          startDecorator={
            <SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="green"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                >
							<path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                </svg>
          </SvgIcon>
          }
        >
          Upload New Image
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={async (e) => {
              try {
                  await handleImageUpload(e.target.files[0]);
              } catch (error) {
                  console.error("Error uploading image:", error);
                  // Handle the error appropriately
              }
          }}
          />
        </Button>
        </div>
    ) : (
      <Button
        component="label"
        role={undefined}
        tabIndex={-1}
        variant="outlined"
        color="neutral"
        startDecorator={
          <SvgIcon>
            <svg viewBox="0 0 20 20">
            <path d="M18.555,15.354V4.592c0-0.248-0.202-0.451-0.45-0.451H1.888c-0.248,0-0.451,0.203-0.451,0.451v10.808c0,0.559,0.751,0.451,0.451,0.451h16.217h0.005C18.793,15.851,18.478,14.814,18.555,15.354 M2.8,14.949l4.944-6.464l4.144,5.419c0.003,0.003,0.003,0.003,0.003,0.005l0.797,1.04H2.8z M13.822,14.949l-1.006-1.317l1.689-2.218l2.688,3.535H13.822z M17.654,14.064l-2.791-3.666c-0.181-0.237-0.535-0.237-0.716,0l-1.899,2.493l-4.146-5.42c-0.18-0.237-0.536-0.237-0.716,0l-5.047,6.598V5.042h15.316V14.064z M12.474,6.393c-0.869,0-1.577,0.707-1.577,1.576s0.708,1.576,1.577,1.576s1.577-0.707,1.577-1.576S13.343,6.393,12.474,6.393 M12.474,8.645c-0.371,0-0.676-0.304-0.676-0.676s0.305-0.676,0.676-0.676c0.372,0,0.676,0.304,0.676,0.676S12.846,8.645,12.474,8.645"></path>
          </svg>
        </SvgIcon>
        }
      >
        Upload Course Image
        <VisuallyHiddenInput
          required
          type="file"
          accept="image/*"
          onChange={async (e) => {
            try {
                await handleImageUpload(e.target.files[0]);
            } catch (error) {
                console.error("Error uploading image:", error);
                // Handle the error appropriately
            }
        }}
        />
      </Button>
    )}
    {imageUploading && (
      <LoadingOverlay>
        <CircularProgress />
        Uploading Image...
      </LoadingOverlay>
    )}
</div>


            </FormControl>
            <Button
              type="submit"
              variant="outlined"
              color="danger"
              startDecorator={
                <SvgIcon>
              <svg viewBox="0 0 20 20">
							<path d="M18.344,16.174l-7.98-12.856c-0.172-0.288-0.586-0.288-0.758,0L1.627,16.217c0.339-0.543-0.603,0.668,0.384,0.682h15.991C18.893,16.891,18.167,15.961,18.344,16.174 M2.789,16.008l7.196-11.6l7.224,11.6H2.789z M10.455,7.552v3.561c0,0.244-0.199,0.445-0.443,0.445s-0.443-0.201-0.443-0.445V7.552c0-0.245,0.199-0.445,0.443-0.445S10.455,7.307,10.455,7.552M10.012,12.439c-0.733,0-1.33,0.6-1.33,1.336s0.597,1.336,1.33,1.336c0.734,0,1.33-0.6,1.33-1.336S10.746,12.439,10.012,12.439M10.012,14.221c-0.244,0-0.443-0.199-0.443-0.445c0-0.244,0.199-0.445,0.443-0.445s0.443,0.201,0.443,0.445C10.455,14.021,10.256,14.221,10.012,14.221"></path>
						</svg>
              </SvgIcon>
              }
            >
              Submit (Cannot Undo)
            </Button>

          </Stack>
        </form>
      </ModalDialog>
      </ModalOverflow>
    </Modal>
    
  </React.Fragment> :
    courseLStatus === "Open" ?
      <Button fullWidth= 'true' variant="outlined" color="neutral" onClick={startCourseCall}>Start Course</Button> :
    // For "In-Progress" we will add the modal for Pass/Fail/Claim Payment in the next step
    (courseLStatus === "In-Progress" || courseLStatus === "Complete") && (
      <React.Fragment>
        {isPaymentClaimed ? 
      <Button 
        variant="outlined" 
        color="neutral"
        disabled
      >
        Airdrop Certificates *Coming Soon!*
      </Button>
      :
      <Button 
        variant="outlined" 
        color="neutral"
        onClick={() => setStudentModalOpen(true)}
      >
        Pass/Fail/Claim Payment
      </Button>
    }
        <StudentEvaluationModal
          open={studentModalOpen}
          setOpen={setStudentModalOpen}
          studentsInProgress={studentsInProgress || []}
          studentsPassed={studentsPassed || []}
          studentsFailed={studentsFailed || []}
          passCall={passCall}
          bootCall={bootCall}
        />
      </React.Fragment>
    )
  )
      ),
      ),
      
      React.createElement(
        Stack,
        {
          sx: {
            padding: {
              xs: 2,
              sm: 0,
            },
          },
          spacing: 1,
          flex: 1,
        },
        React.createElement(
          Stack,
          {
            spacing: 1,
            direction: 'row',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          },
          
          React.createElement(
            Chip,
            {
              component: "a",
              href: `https://polygonscan.com/address/${item.data.courseId}`,
              clickable: true,
              target: "_blank",  // This opens the link in a new tab
              rel: "noopener noreferrer",  // This is a best practice for security when using target="_blank"      
              size: 'sm',
              variant: 'outlined',
              sx: {
                flexDirection: 'row',
                height: '0.1', // Adjust this to control the chip height
                padding: '0.25rem 0.5rem', // Adjust the padding as needed
              },
            },
          `Course ID: ${item.data.courseId}`
        ),
        React.createElement(
          Chip,
          {
            size: 'sm',
            variant: 'soft',
            sx: {
              flexDirection: 'row',
              height: '0.01', // Adjust this to control the chip height
              padding: '0.25rem 0.5rem', // Adjust the padding as needed
            },
          },
          `Contract Balance: ${balance}`
        ),
        ),
        React.createElement(
          Stack,
          {
            spacing: 1,
            direction: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          },
          React.createElement(
            'div',
            null,
            React.createElement(
              Typography,
              {
                color: 'primary',
                fontSize: 'lg',
                fontWeight: 'lg',
              },
              title
            ),
            React.createElement(
              Typography,
              {
                fontWeight: 'md',
                fontSize: 'sm',
              },
              React.createElement(
                Box,
                {
                  overlay: true,
                  underline: 'none',
                  href: '#interactive-card',
                  sx: { color: 'text.primary' },
                },
                description
              )
            )
          ),
        ),
        React.createElement(
          Stack,
          {
            spacing: 1,
            direction: 'row',
          },
          React.createElement(Rating, null),
          React.createElement(Typography, null, '*Reviews coming soon!*')
        ),
        React.createElement(
          Stack,
          {
            spacing: 3,
            direction: 'row',
          },
          React.createElement(
            Typography,
            {
              startDecorator: React.createElement('i', { 'data-feather': 'user' }),
              fontSize: 'xs',
            },
            displayAddress
          ),
          React.createElement(
            Link,
            {
              href: calendarLink, // The URL you want to link to
              target: '_blank',       // Optional: Opens the link in a new tab
              rel: 'noopener noreferrer', // Best practice when using target="_blank" for security reasons
              color: 'neutral'
            },
          React.createElement(
            Typography,
            {
              startDecorator: React.createElement('i', { 'data-feather': 'calendar' }),
              fontSize: 'xs',
              display: {
                xs: 'none',
                md: 'flex',
              },
            },
            new Date(startDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short"
          })
          ),
          ),
          React.createElement(
            Typography,
            {
              startDecorator: React.createElement('i', { 'data-feather': 'clock' }),
              fontSize: 'xs',
              display: {
                xs: 'none',
                md: 'flex',
              },
            },
            timeCommitment + 'hr'
          ),
          React.createElement(
            Typography,
            {
              sx: { flexGrow: 1, textAlign: 'right' },
            },
            React.createElement(
              'strong',
              null,
              <p>{formattedStake} MATIC to Enroll</p>
            ),
          )
        ),

        isPaymentClaimed ?
        React.createElement(
          Typography,
          {
            fontSize: 'xs',
            color: 'success',
            sx: {
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 2
            },
            zIndex: 1000,
          },
          'Payout Complete!'
        )
        :
        isCourseLocked(courseLStatus) ?
        React.createElement(
          Typography,
          {
            fontSize: 'xs',
            color: 'success',
            sx: {
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 2
            },
            zIndex: 1000,
          },
          'Sponsorship locked for payout!'
        )
        :
        React.createElement(
          Tooltip,
          {
              placement: "top-end",
              variant: "outlined",
              arrow: true,
              title: tooltipContent
          },
          React.createElement(
              LinearProgress,
              {
                  determinate: true,
                  value: progress,
                  variant: 'outlined', // Choose your preferred variant
                  size: 'sm',       // Choose your preferred size
                  sx: {
                      '--LinearProgress-radius': '20px',
                      '--LinearProgress-thickness': '24px',
                  },
              },
              progressMessage ? 
              React.createElement(
                  Typography,
                  {
                      fontSize: 'xs',
                      display: {
                          xs: 'none',
                          md: 'flex',
                      },
                      zIndex: 1000,
                  },
                  progressMessage
              ) :
              React.createElement(
                  Typography,
                  {
                      fontSize: 'xs',
                      display: {
                          xs: 'flex',
                          md: 'flex',
                      },
                      zIndex: 1000,
                  },
                  maticNeeded + ' MATIC needed to start course'
              )
          ),
      ),
        
        (courseLStatus !== "Complete" && buttonAction) && React.createElement(
          Button,
          {
            variant: 'solid',
            color: buttonColor,
            onClick: buttonAction,
            sx: { zIndex: 1000 }
          },
          buttonLabel
        )
                            
      )
    )
  );
}
}