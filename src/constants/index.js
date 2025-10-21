import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  bash,
  figma,
  mysql,
  postgres,
  docker,
  meta,
  starbucks,
  ogilvy,
  compuways,
  harvard,
  codeCollege,
  tesla,
  shopify,
  carrent,
  zaffer,
  link,
  jobit,
  tripguide,
  tshirt,
  shoe,
  rorisang,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Software Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Creative Technologist",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "mysql",
    icon: mysql,
  },
  {
    name: "postgres",
    icon: postgres,
  },
];

const experiences = [
  {
    title: "AI Software Developer",
    company_name: "Ogilvy",
    icon: ogilvy,
    iconBg: "#383E56",
    date: "April 2025 - Present",
    points: [
      "Building AI functionality into software applications through integration.",
      "Collaborating with cross-functional teams including designers, creatives, product managers, and other developers to create high-quality products.",
      "Implementing AI algorithms and logic into the deliverables of creative technology projects",
      "Using Machine Learning & Deep Learning to train the machine to solve problems the way a human would",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Compuways",
    icon: compuways,
    iconBg: "#E6DEDD",
    date: "May 2024 - Apr 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Development Student",
    company_name: "Code College",
    icon: codeCollege,
    iconBg: "#383E56",
    date: "May 2024 - Apr 2025",
    points: [
      "Learnt development and maintainance of web applications using React.js and other related technologies.",
      "Collaborated with cross-functional teams including other developers to learn to build high-quality products.",
      "Learnt responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews, receiving and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Online Student",
    company_name: "Harvard CS50",
    icon: harvard,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - May 2024",
    points: [
      "Learnt the foundations of computer science, programming and web development.",
      "Built a strong programming foundation in C and Python.",
      "Learnt about software testing, CI/CD, SDLC and Agile.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zaffer/!XARA",
    description:
      "A modern web experience for a futuristic MMORPG, built to deliver seamless animations and a visually immersive gateway into the game’s universe.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zaffer,
    source_code_link: "https://github.com/RBLucky/Zaffer",
    live_site_link: "https://zaffer.vercel.app/",
  },
  {
    name: "Link-a-thon",
    description:
      "A web platform that helps hackathon enthusiasts build teams. Users can pitch projects, browse ideas, and connect with collaborators to build the perfect team",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "github-oauth",
        color: "pink-text-gradient",
      },
    ],
    image: link,
    source_code_link: "https://github.com/RBLucky/link-a-thon",
    live_site_link: "https://link-a-thon.vercel.app/",
  },
  {
    name: "Make It Yours",
    description:
      "A 3D web app where users customize a t-shirt, upload images, materials, and patterns, or use AI to generate unique designs applied directly to the shirt in real time",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/RBLucky/3D-Shirt-Frontend",
    live_site_link: "https://make-it-yours.vercel.app/",
  },
  {
    name: "Shoe Republic",
    description:
      "Shoe Republic — born from the streets of Joburg. Your plug for fresh kicks, local heat, and streetwear made for those who walk loud and live bold.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "drizzle",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shoe,
    source_code_link: "https://github.com/RBLucky/ShoeRepublic",
    live_site_link: "https://shoe-republic-one.vercel.app/",
  },
  {
    name: "Rorisang Mathe Portfolio",
    description:
      "Rorisang Mathe is a social media specialist showcasing, in her portfolio, creative campaigns and strategies that grow brands online.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: rorisang,
    source_code_link: "https://github.com/RBLucky/rm-portfolio",
    live_site_link: "https://rorisang-mathe.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
