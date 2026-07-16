/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ava Sadasivan",
  title: "Hi, I'm Ava",
  subTitle: emoji(
    "A Computer Engineering student at Georgia Tech interested in software engineering and data-driven systems."
  ),
  resumeLink: "resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/avasadasivan",
  linkedin: "https://www.linkedin.com/in/ava-sadasivan",
  gmail: "asadasivan7@gatech.edu",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "COMPUTER ENGINEERING STUDENT WORKING ACROSS SOFTWARE, DATA, AND EMBEDDED SYSTEMS",
  skills: [
    emoji(
      "⚡ Build data pipelines that clean, validate, and unify messy real-world datasets"
    ),
    emoji(
      "⚡ Comfortable across the stack, from embedded C/Arduino to Python data tooling to iOS apps in Swift"
    ),
    emoji(
      "⚡ Applied machine learning for signal classification and feature extraction in brain-computer interface research"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "matlab",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "embedded systems / arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "risc-v assembly",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      subHeader: "Bachelor of Science in Computer Engineering, GPA 3.72/4.00",
      duration: "Expected May 2028",
      desc: "Relevant coursework: Digital Systems Design, Digital Design Lab, Circuit Analysis, Programming for HW/SW, Physics 2."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Set it to true to show Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Undergraduate Researcher",
      company: "Bio-Interfaced Translational Nanoengineering Group VIP, Georgia Tech",
      date: "Jan 2025 – Apr 2025",
      desc: "Implemented an EEG preprocessing and classification pipeline based on published brain-computer interface research.",
      descBullets: [
        "Applied Riemannian geometry feature extraction and machine learning classification to decode finger movements (89% accuracy vs. 18% Euclidean baseline)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "DATA ENGINEERING AND SOFTWARE PROJECTS I'VE BUILT",
  projects: [
    {
      projectName: "Felix-Telemetry",
      projectDesc:
        "A data engineering pipeline that cleans, validates, and unifies NASA GOLD mission satellite telemetry. Transforms ~81,000 raw, fragmented plasma-bubble detections (split across mismatched CSV and custom text formats, in non-standard coordinates) into a single high-integrity dataset, feeding FeLiX, an asynchronous federated learning framework. Processed the full dataset into 81,164 detections and 22,775 tracks with zero Pydantic validation errors.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AvaRose17/felix-telemetry"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: "asadasivan7@gatech.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
