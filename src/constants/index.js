import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Security Analyst",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Mentor",
    icon: mobile,
  },
  {
    title: "Boxer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cybersecurity Analyst",
    company_name: "Your Company",
    
    iconBg: "#E6DEDD",
    date: "May 2023 - Future",
    points: [
      "Monitor network traffic for security incidents and events.",
"Investigate incidents and respond to events in real time.",
"Write detailed incident response reports.",
"Install and operate firewalls, encryption programs, and other security software.",
"Fix vulnerabilities.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Freelance",
    
    iconBg: "#383E56",
    date: "Oct 2021 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Experience Manager",
    company_name: "AIESEC",
    
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Boxer",
    company_name: "",
    
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Studying over the details and secrets of martial arts from elite boxers such as Mike Tyson, Sonny Liston, Rocky Marciano.",
      "Running, weightlifting and exercise sessions. Working on body conditioning and endurance.",
"Developing technical skills and mental strength.",
"Sparring in the ring with training partners.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yusif proved me wrong.",
    name: "Lamiya A.",
    designation: "CEO",
    company: "Makyaj One",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a learner who is more dedicated and willing to put their everything on hard work than him.",
    name: "Zaur M.",
    designation: "Trainer",
    company: "Azerbaijan Boxing Federation",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Yusif optimized our website, did security checks, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa W.",
    designation: "Colleague",
    company: "WCU",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sferex Agency",
    description:
      "Web-based platform that allows companies to increase their workflow quality and speed with small fee by using services like SMM, website creating, SEO and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
