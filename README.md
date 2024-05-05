# Peace Antz Academy
## A Decentralized School Contract for Online Learning and Talent Scouting

Welcome to the Peace Antz Academy Dapp! Our decentralized school contract and course contract are smart contracts that revolutionizes online learning and talent scouting by connecting teachers, sponsors, and students on the blockchain.

## 🌟 Features
- **Course Creation**: Teachers can create and market courses. They are also responsible for preparing the syllabus for each class they create, which define the length and milestones of the course as well as have all the relavent links needed for the course.
- **Staking and Sponsorship**: Students need to stake funds to enroll in courses. Teachers get paid by sponsors for teaching. Sponsors can also scout talent by working with the teacher.
- **Ranking and Statistics**: The factory contract records rankings and statistics for teachers, students, and sponsors.
- **Decentralized and Transparent**: The smart contract is executed on the blockchain, ensuring a decentralized and transparent mechanism.

## 🚀 How It Works
1. **Course Setup**: Teachers create courses and write the syllabus, defining the length and milestones. This information is stored as an IPFS link which is stored on the course smart contract.
2. **Student Enrollment**: Students show interest by staking funds. Sponsors can then come in to sponsor these courses.
3. **Course Commencement**: Once a course is sponsored, it begins on the start date. Teachers sign the course contract as a PASS for each student who passes, releasing staked funds and a certificate of completion NFT. If the student fails the course, the teacher signs them as FAILED and those funds go to the Academy Council Gnosis safe.
4. **Course Completion**: After the course ends and all students are processed, teachers get paid, and students who complete the course successfully get their staked funds back.

## 🔧 Implementation
The Peace Antz Academy consists of two main contracts:
1. **Course Factory Contract (Peace Antz Academy Contract)**
2. **Course Contract**

### Course Factory Contract
- Written in Solidity, deployable on any EVM-compatible blockchain.
- Allows teachers to deploy new course contracts.
- Maintains rankings and statistics for teachers, students, and sponsors.
- Records academy-wide statistics including total value locked (TVL), total sponsored, total staked, total payouts, and a "fail fund".
- Ensures that functions are only called by recognized course contracts through the `isValid()` modifier.
- Updates rankings and academy information based on course-related events.

### Course Contract
- Facilitates the setup and operation of an online course system.
- Teachers have control over the course status and payment.
- Students can enroll by staking currency, and receive their stake back if they pass.
- Sponsors can deposit funds, which can be withdrawn by the teacher upon course completion.

## 📖 Usage

### As a Teacher
1. Deploy the contract with your address and the Course Factory address.
2. Set the payment amount for the course using `setAmount()`.
3. Start the course using `updateCourseStatus()`.
4. Pass students who complete the course using `passStudent()`.
5. Claim the sponsored payment using `claimPayment()`.

### As a Student
1. Enroll in a course using `enroll()` with the required stake.
2. To leave before the course starts, use `withdraw()`.
3. To drop out after the course starts, use `dropOut()`.

### As a Sponsor
1. Sponsor a course using `sponsor()`.
2. To withdraw your sponsorship before the course begins, use `unsponsor()`.

## 🔐 Dependencies
- The contract utilizes OpenZeppelin's Access Control contract for access control functionalities.
- It also uses the Initializable contract for initializing the contract in an upgradeable context.

## ⚠️ Disclaimer
Please be advised that this contract has not been audited. Use at your own risk.

## ✨ Benefits
- **For Teachers**: Earn money by teaching courses and have the freedom to define course length and milestones.
- **For Students**: Learn important skills for free upon successful completion of the course.
- **For Sponsors**: Scout talent and invest in skills they want to hire.
- **Authenticity and Transparency**: The use of smart contracts and blockchain technology ensure the authenticity of the course and completion certificates, and blockchain implementation ensures transparency.

## 🎓 Conclusion
The Peace Antz Academy Dapp is an innovative solution that can revolutionize the way we think about online learning and talent scouting. It provides a transparent, decentralized, and efficient mechanism for connecting teachers, sponsors, and students on the blockchain. With a focus on course creation, stakeholding, completion certificates, and rankings, it benefits all parties involved and can be easily implemented on any blockchain platform that supports smart contracts.

Join us in this revolutionary approach to online learning and talent scouting.

![Peace Antz Academy Overview](https://github.com/Peace-Antz/PeaceAntzAcademy/assets/overview.png)
