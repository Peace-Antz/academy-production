import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

function AcademyResourceCenter() {
  return (
    <Box sx={{ padding: 8 }}>
      <Typography level="h1" gutterBottom>
        Resources
      </Typography>
      <Typography level="h3" color="primary" gutterBottom>
        A guide designed to support our Students, Teachers, and Sponsors
      </Typography>
      <Typography level="h4" color="secondary" gutterBottom>
        This page will evolve as users give feedback and the dapp grows!
      </Typography>

      {/* Section for Students */}
      <AccordionGroup size="lg">
      <Accordion>
      <AccordionSummary>
        For Students
      </AccordionSummary>
      <AccordionDetails level="body-md" gutterBottom>
        <p>Dive deep into the world of decentralized learning! Here's how to get started. Need help? Don't hesitate to reach out on <Link href="https://discord.gg/8XHk7qSZkD" target="_blank">Discord</Link> or <Link href="https://twitter.com/PeaceAntz" target="_blank">Twitter</Link></p>
      {/* Student Actions */}
      <Box sx={{ marginTop: 2 }}>
        <Typography>
          Follow these steps to enroll in a course:
          <ol>
            <li>Connect your wallet to the Dapp (Courses Page). Need a web3 wallet? Download <Link href="https://metamask.io/download.html" target="_blank">Metamask</Link> or <Link href="https://www.coinbase.com/wallet/downloads" target="_blank">Coinbase Wallet</Link>. You can also check out <Link href="https://learn.metamask.io/" target="_blank">Metamask Learn</Link> for a fantastic introduction to web3!</li>
            <li>Scroll down and check out the titles and descriptions of the courses, if one interests you, open up the syllabus to see the details by clicking somewhere on the course of interest.</li>
            <li>Check out the date and time commitment. If you can attend the course, click "Enroll", and confirm the transaction to stake the enrollment fee (you can withdraw this before the course starts, once the course starts, your stake will be locked up until you pass the class).</li>
            <li>Once the course has started, you must "Dropout" to leave the course, however, you will not receive the stake back, but will get a "dropout" rather than a "boot" on your record.</li>
            <li>Follow the syllabus and teacher intructions to pass the class.</li>
            <li>Once the teacher passes you, you will receive your staked enrollment fee back and build your scholastic record!</li>
          </ol>
        </Typography>
      </Box>
      </AccordionDetails>
      </Accordion>
      {/* Section for Teachers */}
      <Accordion>
      <AccordionSummary level="h2" gutterBottom>
        For Teachers
      </AccordionSummary>
      <AccordionDetails level="body-md" gutterBottom>
      Looks like you want to create your very own course on Peace Antz Academy! Although teaching a course can be inimidating, it is one of the best ways to learn.
      <Box sx={{ marginTop: 2 }}>
        <Typography>
        Here are the steps you need to take to create your course:
          <ol>
            <li>If you have a syllabus already, then have it ready in .pdf format. Otherwise you can use <Link href="https://chat.openai.com/" target="_blank">ChatGPT</Link>, <Link href="https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx" target="_blank">Bing Chat</Link> our your favorite AI tool to create a syllabus. </li>
            <li>On the Courses page, click on the "Create Course" button on the top right of the page and confirm this transaction.</li>
            <li>Once the newly created course appears on the Courses page (may take a few minutes), you need to initialize the course by clicking the button ASAP and confirm that as well</li>
            <li>After the course is initialized, the card will change and you should see a button that says "Input Course Details". Click on that to open the window to put in the course information.</li>
            <li>Determine the Title and write a short course description for what you are going to teach.<p>TIP: Know your sponsor, create a course in some skill that people need.</p></li>
            <li>Estimate the amount of hours time commitment the course will be and what the starting date and time will be.</li>
            <li>Set the amount your would like to get (in MATIC) sponsored to teach the course. You may self-sponsor your own course if needed.</li>
            <li>Upload the syllabus in .pdf format and a course image (16:9 aspect ratio) to show off your course and show students what they are signing up for!</li>
            <li>Once the course has been fully sponsored you can start the course. Best to wait until the start date to allow students to enroll. Once the course is started, funds get locked until you pass/fail the students.</li>
            <li>In order to collect your payment, you have to pass at least one student.</li>
            <li>To pass a student click on the "Pass/Fail/Claim Payment" button and the click the "Pass Student" button next to the addresses you wish to pass.</li>
            <li>If the student does not pass the class, you can boot them by clicking the "Fail Student" button. You will have a list you can copy for airdropping rewards/certificates!</li>
            <li>Once you have passed or failed all the students you can click the "Claim Payout" button.</li>
          </ol>
          CONGRATULATIONS on Teaching your first Peace Antz Academy course!
        </Typography>
      </Box>
      </AccordionDetails>
      </Accordion>
      {/* Section for Sponsors */}
      <Accordion>
      <AccordionSummary level="h2" gutterBottom>
        For Sponsors
      </AccordionSummary>
      <AccordionDetails level="body-md" gutterBottom>
      Are you are looking to onboard people to your project? Or are you simply looking to philanthropically sponsor free education for others? Or maybe a community member/teacher reached out asking for a sponsorship. Peace Antz Academy allows anyone to Sponsor a course!
      <Box sx={{ marginTop: 2 }}>
        <Typography>
        Here is how to sponsor a course:
          <ol>
            <li>Find the course that you want to sponsor. If a teacher has asked you to sponsor a particular course, you can confirm it with the Contract Address/Course ID</li>
            <li>Put in the amount (in MATIC) you would like to sponsor. You can put as little as you want and up to the amount still needed to start the course (it will not let you put in more than is needed).</li>
            <li>Make sure to check out the syllabus of the course you sponsor to see if the teacher has set up ways for sponsors to connect.</li>
            <li>Click "Sponsor" and confirm the transaction. You can withdrow this before the Course starts. Once the course start this sponsorship will be locked and only available to the teacher after the course is finished.</li>
          </ol>
          Thank you for sponsoring a course on Peace Antz Academy! Your contribution to free education using web3 will be recorded forever in history.
        </Typography>
      </Box>
      </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary level="h2" gutterBottom>
        Extra Credit!
      </AccordionSummary>
      <AccordionDetails level="body-md" gutterBottom>
      <p>Create certificates for passing students using <Link href="https://unlock-protocol.com/guides/certifications/" target="_blank">Unlock Protocol</Link> or take attendance using <Link href="https://poap.xyz/" target="_blank">POAPs</Link>!</p>
      <Box sx={{ marginTop: 2 }}>
        <Typography>
        Steps to Create a Certificate
          <ol>
            <li>Click on "Create your certification now"</li>
            <li>Create or select an image for your certificate.</li>
            <li>Create a description for your certificate (What does it do? What benefits are there to receiving it?)</li>
            <li>You can put in the URL text you want shown.</li>
            <li>Put your name or the entity you represent that is awarding certificates.</li>
            <li>You can put your organization's link or just put in: https://www.peaceantzacademy.com/</li>
            <li>If the Certification expires, put in how long it lasts, otherwise just say forever.</li>
            <li>Usually the cerificates will be free to those who pass, but you can charge to mint these certificates as well.</li>
            <li>Choose "Polygon" or whatever network you prefer for the network.</li>
            <li>Airdrop Certificates to student who Pass your course using Unlock Protocols Airdrop Keys feature.</li>
          </ol>
          Steps to Create a POAP
          <ol>
            <li>Go to the <Link href="https://poap.xyz/" target="_blank">POAP Website</Link> and click on Make a POAP</li>
            <li>Click on "Create New Drop"</li>
            <li>Create or select an image for your POAP.</li>
            <li>Create or select an image for your POAP.</li>
            <li>Create a description for your POAP (What is it for? What benefits are there to receiving it?)</li>
            <li>You can put in the URL for your website, employer website or whatever you feel is pertinent to your POAP (feel free to put in https://www.peaceantzacademy.com/ if you're not sure).</li>
            <li>Put in the event start date and end date (it is recommended to remind people to mint straight away so it doesn't expire).</li>
            <li>Select Virtual or In-person depending on the type of event you are holding.</li>
            <li>Select the Platform the Course is on and/or your account on it.</li>
            <li>Set visibility to public unless you are doing a test.</li>
            <li>Now you have the option to get links, secret passphrase, QR code webpage, or create a white list webpage! Depending on how you setup your course, you can pick which method works best for you. <p>NOTE: Once links are created, you will no longer be able to edit the POAP</p></li>
            <li>Select the option you want and follow intructions on POAP website.</li>
          </ol>
        </Typography>
      </Box>
      </AccordionDetails>
      </Accordion>

      {/* More Content */}
      {/* ... */}
      </AccordionGroup>
    </Box>
  );
}

export default AcademyResourceCenter;
