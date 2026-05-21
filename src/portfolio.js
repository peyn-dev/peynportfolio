/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hashem Ampatua",
  title: "Hi all, I'm Hashem",
  subTitle: emoji(
    "A passionate Web Developer 🚀 with experience in developing responsive and dynamic web applications using modern technologies, frameworks, and libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/peyn-dev",
  linkedin: "https://www.linkedin.com/in/hashem-s-ampatua-394b3527a/",
  gmail: "ampatuahashem25@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/hashem.ampatua/",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mindanao State University",
      logo: require("./assets/images/images.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2014 - 2022"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Datu Calaca Memorial National High School",
    //   logo: require("./assets/images/images1.jfif"),
    //   subHeader: "High School",
    //   duration: "2013 - 2014"
    //   // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // },
    // {
    //   schoolName: "University Training Center",
    //   logo: require("./assets/images/download.jfif"),
    //   subHeader: "High School",
    //   duration: "2010 - 2013"
    //   // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // },
    // {
    //   schoolName: "Amai Pakpak Central Elementary School",
    //   logo: require("./assets/images/download1.jfif"),
    //   subHeader: "Elementary / Basic Education",
    //   duration: "2005 - 2010"
    //   // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Lancaster Technology and Development Corporation",
      companylogo: require("./assets/images/lancastertechdevphilsinc_logo.jfif"),
      date: "July 2025 – Present",
      desc: "Web Developer | Managed Services Unit | Lancaster Technology and Development Corporation",
      descBullets: [
        "Development & Maintenance: Managing the full lifecycle of the university’s official websites and web-based systems, including security and UI enhancements.",
        "Cross-Functional Collaboration: Working with various departments to implement new features, maintain brand consistency, and ensure accessibility standards.",
        "Digital Transformation: Leading website optimization and troubleshooting while integrating modern technologies to support institutional growth.",
        "Infrastructure Support: Configuring servers and databases, documenting system updates, and improving overall operational efficiency."
      ]
    },
    {
      role: "Web Developer",
      company: "Antajia Software Development Services",
      companylogo: require("./assets/images/antajia.jpg"),
      date: "Aug 2024 – March 2025",
      desc: "Web Developer | Antajia Software Development Services",
      descBullets: [
        "Build dynamic interfaces using Svelte and Angular frameworks.",
        " Design and integrate RESTful APIs using Java.",
        "Manage and optimize PostgreSQL databases for performance and scalability.",
        " Collaborate on Webflow-based projects, leveraging its visual development tools with minimal custom coding.",
        "Collaborated on the development of a Hospital Management System using Angular for the frontend and Kotlin for the backend."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "ITS Marawi IT Solution",
      companylogo: require("./assets/images/ITSMarawi.jpg"),
      date: "May 2023 – March 2024",
      desc: "Software Engineer Intern | ITS Marawi IT Solution",
      descBullets: [
        "Focusing on debugging, automation testing, and web front-end development.",
        "Collaborated with cross-functional teams to ensure project success.",
        "Achieved seamless integration of front-end design with backend functionality.",
        "Implemented automation testing to improve system efficiency and reliability."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "SOME STARTUPS, COMPANIES AND GOVERNMENT INSTITUTIONS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/eseqr.svg").default,
      projectName: "e-SeQR",
      projectDesc:
        "The Electronic Secured QR-Code (e-SeQR) is a record authentication system designed to counter the proliferation of fake records, such as Vehicle Pass, Identification Cards, Diplomas, Certificates, Transcript of Records and other relevant records. It generates encrypted QR-codes that serve as authentication seals, securely placed on records by authorized personnel.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://e-seqr.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/MSU.png"),
      projectName: "MSU Inventory System",
      projectDesc:
        "The MSU Inventory System is a web-based application developed to efficiently manage and track assets and inventory within Mindanao State University. It provides a centralized platform for monitoring item records, ensuring accurate tracking, and improving overall operational efficiency across departments.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://inventory.msumain.edu.ph/"
        }
      ]
    },
    {
      image: require("./assets/images/qariyb.jfif"),
      projectName: "Qariyb",
      projectDesc:
        "Qariyb is a modern event management platform focused on connecting Muslim communities through meaningful and accessible events. Inspired by the concept of “nearness,” Qariyb enables users to easily discover, create, and manage events that foster unity, learning, and community engagement.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://qariyb.com/"
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

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63-905-215-8779",
  email_address: "ampatuahashem25@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
