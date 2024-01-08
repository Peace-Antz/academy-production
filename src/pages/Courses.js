import React from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import CssBaseline from '@mui/joy/CssBaseline';
import HeaderSection from '../components/HeaderSection.js';
import Main from '../components/Main.js';
import CourseCard from '../components/CourseCard.js';
import Pagination from '../components/Pagination.js';
import Search from '../components/Search.js';
import Filters from '../components/Filters.js';
import Toggles from '../components/Toggles.js';
import { useContract, useContractRead, useContractWrite, useContractEvents, useAddress, useStorage, MediaRenderer } from "@thirdweb-dev/react";
import { useState, useEffect } from 'react';
import CoursesData from '../data/coursesData.js';
import Container from '@mui/joy/Container';



function Courses() {
  const academyAddress = "0x6BbE7Ab688761Bb5d53B6717c9009B85796A99C6"
  // eslint-disable-next-line
  const { contract, isLoadingContract, errorContract } = useContract(academyAddress); //Make sure to change initilize call (academyAddress) as well if you change this.
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourseId, setCourseId]= useState(null);
  //const { selectedContract } = useContract(selectedCourse); 
  // const { data, isLoading } = useContractRead(selectedContract, "uri", []);
  const storage = useStorage();
  const address = useAddress();
  const [account, setAccount] = useState("");
  
  console.log("contract", contract);
  // console.log("selectedContract", selectedContract);
  //console.log("Data from URI read", data);

  const [courseUri, setCourseUri] = useState(null);
  const [displayedSyllabus, setDisplayedSyllabus] = useState(null);
  const convertIpfsToHttp = (ipfsUri) => {
    if (!ipfsUri) return '';
    const ipfsPath = ipfsUri.split("ipfs://")[1];
    return `https://ipfs.io/ipfs/${ipfsPath}`;
  };

  const [convertedUri, setConvertedUri] = useState('');

  const isValidHttpUrl = (string) => {
    // Check if the string contains 'undefined'
    if (!string || string.includes('undefined')) {
      return false;
    }
  
    let url;
  
    try {
      url = new URL(string);
    } catch (_) {
      return false; // If the URL constructor fails, it's not a valid URL
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  };
  
  
  
 

  // const {
  //   courseInfo,
  // } = CoursesData();

  console.log("courseUri", courseUri);
  
  console.log("selectedCourseId", selectedCourseId);
  //console.log("selectedContract on Courses", selectedContract);
  console.log("Contract on Courses", contract);
  console.log("selectedCourse", selectedCourse);
  console.log("convertedUri", convertedUri);
  
  console.log("account:", account);
  // const { account } = address || {};
  const { data: event } = useContractEvents(
    contract,
    "CourseCreated",
    {
      queryFilter: {
        filters: {},
        fromBlock: 	44871649, // Events starting from this block
        toBlock: "latest", // Events up to this block
        order: "asc", // Order of events ("asc" or "desc")
      },
      subscribe: true, // Subscribe to new events
    },
  );
// eslint-disable-next-line
  const { data: academyInfo, isLoading: isLoadingAcademyInfo, error: academyInfoError } = useContractRead(contract, "academyInfo");
  console.log("academyInfo:", academyInfo);
  // const [courseCount, setCourseCount] = useState(0);

    useEffect(() => {
      if (address & event) {
        setAccount(address);
        // setCourseCount(data.length);
      }
    }, [address, event]);

    console.log("address:", address);

    useEffect(() => {
      console.log('Courses has re-rendered!');
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      const httpUrl = convertIpfsToHttp(selectedCourse);
      setConvertedUri(httpUrl);
      console.log('Converted URI to HTTP URL:', httpUrl);
    }
  }, [selectedCourse]);

// const handleCourseSelect = (syllabusUrl) => {
//   setDisplayedSyllabus(syllabusUrl);
// };


  // useEffect for selectedCourse changes
  // useEffect(() => {
  //   if (selectedCourse) {
  //     // Fetch and display the syllabus for the selected course
  //     fetchAndDisplaySyllabus(selectedCourse); // Pass the selected course's contract address
  //   }
  // }, [selectedCourse]);

  // console.log("displayedSyllabus", displayedSyllabus);

  

    // useEffect(() => {
    //   if (data) {
    //     setCourseCount(data.length);
    //   }
    // }, [data]);

    //TROUBLESHOOTING
    //console.log("item:", item);
    console.log("data:", event);
    
  
    // Use the useContractWrite hook to create a function for creating courses
    // eslint-disable-next-line
  const { mutateAsync: createCourse, isLoading: isCreatingCourse } = useContractWrite(contract, "createCourse");

  const createCourseCall = async () => {
    try {
      // Temporarily set args to an empty array
      const data = await createCourse({ args: [] });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  console.log("academyInfo:", academyInfo);


  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', borderRadius: 100 }}>
         <Main>
          <Grid
            container
            sx={{
              width: '100%',
              height: '100dvh',

              margin: 0,
            }}
          >
            <Grid
              xs={12}
              lg={8}
              sx={{
                overflowY: 'scroll',
                height: '100%',
                px: { xs: 2, md: 4 },
                pt: { xs: 8, md: 4 },
                pb: 5,
              }}
            >
              <Stack spacing={2}
              sx={{ minWidth: 0 }}
              >
                <HeaderSection createCourseCall={createCourseCall} />
                <Divider />
                <Box
                  sx={{
                    width: '100%',
                    height: 360,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage:
                      'url("https://github.com/Peace-Antz/academyv2/blob/e328701aabb235331d4da8486832d9a2fb5268f1/src/assets/images/antzacademyhall.png?raw=true")',
                  }}
                  display={{ xs: 'block', md: 'none' }}
                />
                {/* <Filters />
                <Search />
                <Toggles /> */}
                {event && event.length > 0 && [...event].sort((a, b) => b.transaction.blockNumber - a.transaction.blockNumber).map((item, index) => {
                console.log('Mapping item: ', item);
                console.log('Index after event sort ', index);

                return (
                  item && <CourseCard 
                    //key={index} 
                    item={item} 
                    academyAddress={academyAddress}
                    //category={description}
                    //title={courseTitle}
                    //courseInfo={courseInfo}
                    onCardSelect={setSelectedCourse}
                    onCardClick={() => {
                      console.log("Clicked");
                      setCourseId(item.data.courseId);
                      //setSelectedSyllabus(courseInfo);

                  }}
                  />
                );
              })}
                <Divider />
                {/* <Pagination /> */}
              </Stack>
            </Grid>
            <Grid
              xs={4}
              sx={{
                display: { xs: 'none', lg: 'block' },
              }}
            >
              <Box
                sx={{
                  borderLeft: '1px solid',
                  borderColor: 'divider',
                  padding: 1.5,
                  height: '100dvh',
                }}
              >
                {convertedUri && isValidHttpUrl(convertedUri) ?  
                    <iframe 
                        src={convertedUri} 
                        width="100%" 
                        height="100%" 
                        style={{border: "none"}}
                    ></iframe>
                :
                    <Box
                        sx={{
                          backgroundColor: 'background.level1',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 'sm',
                          backgroundSize: 'cover', // Changed from 'cover' to 'contain'
                          backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
                          backgroundImage:
                                'url("https://github.com/Peace-Antz/academyV2/blob/18d5ebdd75f962457106b130e14b3629fe82c6b0/src/assets/images/Colorful%20Illustration%20Kids%20Store%20Poster%20(1).png?raw=true")',
                        }}
                    />
                }
              </Box>
            </Grid>
          </Grid>
        </Main>
      </Box>  
    </Box>
  );

}

export default Courses;

