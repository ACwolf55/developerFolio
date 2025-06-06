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
  username: "Alex Crowe",
  title: "Hi all, I'm Alex",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / MongoDB / SQL and some other cool libraries and frameworks. Currently Learning the T3 stack and always looking to learn more!"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ACwolf55",
  linkedin: "https://www.linkedin.com/in/alexander-crowe-dev/",
  gmail: "Alexcwolf5@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/16580490/acwolf",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Supabase / Vercel / Heroku"
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
      skillName: "tailwind",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "DevMountain",
      logo: require("./assets/images/devmountain-logo.png"),
      subHeader: "Full Stack Web Development ",
      duration: "",
      desc: "Learned to build React, Node, Express, SQL Web Applications",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Mesa Community College",
      logo: require("./assets/images/mcc-logo.png"),
      subHeader: "Associates of Applied Science, Music and Business",
      desc: "Completed courses in Business, Music, Communications, and Computer Science",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      role: "SME",
      company: "DevMoutain",
      companylogo: require("./assets/images/devmountain-logo.png"),
      date: "June 2021 – Present",
      desc: "Subject Matter Expert",
      descBullets: [
        "Teach students how to make full-stack applications using React, Express and SQL",
        "Help answer student questions and debug code",
        "Track and support students progress throughout the program"
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "Barngrover LLC",
      companylogo: require("./assets/images/Barngrover-LLC.jpg"),
      date: "September 2022 – March 2023",
      desc: " Freelance - Lead Developer for tech startup",
      descBullets: [
        " Build design based off client requests",
        " Made beta applications and wireframes for startup",
      ]
    },
    {
      role: "Student Web Developer",
      company: "DevMountain",
      companylogo: require("./assets/images/devmountain-logo.png"),
      date: "November 2020 – Sep 2021",
      desc: " Learned and built Full-Stack Web Applications using React/ Node / SQL",
      descBullets: [
        "Implimented mobile/responsive design for apps",
        "Used REST API to make requests with a front-end back-end connection",
        "Make user Auth with Express sessions and sequelize"
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
  title: "Projects",
  subtitle: "Fun projects I made to practice coding. Currently revamping my portfolio and reworking my projects so some might be not be online or have features not working",
  projects: [
    {
      image: require("./assets/images/farinaccifitness2025.png"),
      projectName: "Farinacci Fitness",
      projectDesc: "Freelance project; Crafted modern, responsive website for local personal trainer using Next.js, and TailwindCSS; highlights front-end development skills through clean UI/UX design.",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://www.farinaccifitness.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/posty-scrn.png"),
      projectName: "Posty",
      projectDesc: "Built fully featured social media web app enabling real-time posting and messaging via Next.js, tRPC, Prisma, and Clerk; showcases fullstack expertise with authorized user accounts, and database integration.",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://posty-phi.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/acmarket-scrn.png"),
      projectName: "AC-2-Market",
      projectDesc: "Created end-to-end e-commerce platform using React, Express, Stripe, and Supabase; allows customer checkout flows and combines React frontend, Node/Express backends, external APIs, and database integration.",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://ac-market.shop/"
        }
      ]
    },   
    {
      image: require("./assets/images/pkm-scrn.png"),
      projectName: "Pokemon Team Builder",
      projectDesc: "A full-stack Pokémon team builder with a React frontend. The backend is being reimplemented into Java / SpringBoot (originally Node.js/Express) Not working right now",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://pkmteambuilder.xyz/"
        }
      ]
    },
    {
      image: require("./assets/images/dawgsports2025.png"),
      projectName: "Dawg Sports",
      projectDesc: "Orginally a vanilla js project, but currently remaking with Vue & Tailwind and adding a Java Springboot server in the future.",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://dawgsports.xyz/"
        }
      ]
    },
    {
      image: require("./assets/images/myvcf.png"),
      projectName: "MyVcf",
      projectDesc: "A B2B project I created for Barngrover LLC. The full project was discontinued, but this one still works. Made with React, Express, and MongoDB. Uses Cloudinary to let users upload images and React Router to give users there own profile page.",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://www.myvcf.xyz"
        }
      ]
    },
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
  display: false// Set false to hide this section, defaults to true
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
  display: false// Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "716-445-0280",
  email_address: "Alexcwolf5@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
