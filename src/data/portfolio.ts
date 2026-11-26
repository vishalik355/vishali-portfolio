export const SOURCE_SITE = "https://vishali-ui-portfolio.netlify.app";

export const profile = {
  name: "Vishali",
  title: "Frontend / Full Stack Developer",
  tagline: "JavaScript | React.js | Node.js | MongoDB",
  availability: "Full Stack Developer @ Needle Ads Technology, Mohali",
  intro:
    "Frontend Developer with 4+ years of experience in frontend development, including 2 years of hands-on experience with React.js. Skilled in JavaScript (ES6+), responsive UI development, reusable components, and REST API integration — now building full stack web applications with React.js and Node.js.",
  about:
    "I'm a developer based in Chandigarh, India, currently working as a Full Stack Developer at Needle Ads Technology, Mohali, where I build and maintain web applications with React.js, JavaScript, and Node.js — from REST APIs and server-side logic to database CRUD operations. Before that, I spent 4+ years as a Frontend Developer architecting reusable React components and custom hooks, managing state with the Context API, and optimizing performance with lazy loading, code splitting, and memoization — cutting page load times by 25%. I work closely with design and product teams to turn UI/UX wireframes into accessible, responsive, production-ready interfaces.",
  email: "vishalik355@gmail.com",
  /** WhatsApp number in international format, digits only (country code 91 + number). */
  whatsapp: "918580797626",
  whatsappMessage: "Hi Vishali, I came across your portfolio and would like to connect.",
  location: "Chandigarh, India",
  photo: "/profile.jpg",
  resume: "/Vishali_FullStack_CV.pdf",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/** Project palette fed to GlowBorderCard (it expects 10 stops). */
export const brandGlow: string[] = [
  "#3b82f6", "#22d3ee", "#818cf8", "#3b82f6", "#0ea5e9",
  "#22d3ee", "#6366f1", "#818cf8", "#38bdf8", "#3b82f6",
];

export const stats = [
  { value: 30, suffix: "+", label: "Projects Completed" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
] as const;

export const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "React Hooks",
  "Context API",
  "Node.js",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "WordPress",
  "Git & GitHub",
  "GitHub Actions (CI/CD)",
  "Vercel",
  "Netlify",
  "Claude Code",
  "Google Gemini API",
  "UI/UX Design",
  "Figma",
  "Adobe Photoshop",
  "Web Design",
  "Responsive Design",
  "Debugging",
  "Problem-Solving",
] as const;

export const services = [
  {
    icon: "⚛️",
    title: "React.js Development",
    description:
      "Building dynamic and scalable web applications using React with modern frontend architecture.",
  },
  {
    icon: "💻",
    title: "Frontend Development",
    description:
      "Responsive and high-performance websites using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description:
      "Integrating REST APIs and handling dynamic data using React hooks like useState and useEffect.",
  },
  {
    icon: "🚀",
    title: "Website Optimization",
    description:
      "Improving performance, responsiveness, and overall user experience of web applications.",
  },
] as const;

export type ProjectCategory = "Next.js" | "React" | "WordPress" | "HTML";

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: readonly string[];
  category: ProjectCategory;
  url: string;
  image: string;
};

export const projects: readonly Project[] = [
  {
    name: "Vondrart Studio",
    subtitle: "Brand & Marketing Studio Website",
    description:
      "Built a bold, editorial website for a Brno-based branding studio, with oversized typography, animated gradient visuals and a smooth case-study flow.",
    tech: ["React.js", "React", "Tailwind CSS"],
    category: "Next.js",
    url: "https://vondrart.studio/",
    image: "/project-vondrart.png",
  },
  {
    name: "Uncommon",
    subtitle: "Creative Digital Agency Website",
    description:
      "Developed an immersive agency site with rich motion, video-led storytelling and featured project showcases that put the studio's work front and centre.",
    tech: ["React.js", "React", "Framer Motion"],
    category: "Next.js",
    url: "https://uncommondesign.group/",
    image: "/project-uncommon.png",
  },
  {
    name: "The Matic Studio",
    subtitle: "3D Design & CGI Studio Website",
    description:
      "Built a dark, cinematic portfolio for a 3D design lab, presenting CGI, motion graphics and interactive WebGL work with a polished loading experience.",
    tech: ["React.js", "React", "WebGL"],
    category: "Next.js",
    url: "https://www.thematicstudio.com/",
    image: "/project-thematic.jpg",
  },
  {
    name: "PRAX",
    subtitle: "Premium Grooming Studio Website",
    description:
      "Created a high-end website for a Los Angeles men's grooming studio, with a video hero, service pages and clear booking calls to action.",
    tech: ["React.js", "React", "Tailwind CSS"],
    category: "Next.js",
    url: "https://prax-lac.vercel.app/",
    image: "/project-prax.png",
  },
  {
    name: "Tech Digital Marketer",
    subtitle: "Digital Marketing Agency Website",
    description:
      "Built a fast, conversion-focused website for an Indian digital marketing agency offering SEO, Google Ads, Meta Ads and performance marketing, with animated hero visuals and clear enquiry flows.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    category: "Next.js",
    url: "https://www.techdigitalmarketer.com/",
    image: "/project-techdigitalmarketer.jpg",
  },
  {
    name: "Road to Close",
    subtitle: "Real Estate Platform with Modern UI",
    description:
      "Built a responsive real estate platform with clean UI and optimized user experience.",
    tech: ["HTML", "WordPress", "CSS"],
    category: "WordPress",
    url: "https://roadtoclose.com",
    image: `${SOURCE_SITE}/project-1.png`,
  },
  {
    name: "EI Care",
    subtitle: "Healthcare Website Focused on UX",
    description:
      "Built an accessible healthcare platform improving user experience and navigation.",
    tech: ["HTML", "WordPress", "CSS"],
    category: "WordPress",
    url: "https://eicare.com.au",
    image: `${SOURCE_SITE}/project-2.png`,
  },
  {
    name: "Factory 360",
    subtitle: "Industrial Website with Clean Design",
    description:
      "Designed a modern industrial website with structured layout and professional UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "HTML",
    url: "https://factory360.com",
    image: `${SOURCE_SITE}/project-3.png`,
  },
  {
    name: "Simcorner",
    subtitle: "E-commerce Platform for Global Users",
    description:
      "Developed a high-traffic e-commerce platform with optimized UX for global users.",
    tech: ["WordPress", "CSS", "JavaScript"],
    category: "WordPress",
    url: "https://simcorner.com",
    image: `${SOURCE_SITE}/project-4.png`,
  },
  {
    name: "TBS Factoring",
    subtitle: "Finance Platform with Structured UI",
    description:
      "Created a finance platform with clean data structure and intuitive user flow.",
    tech: ["WordPress", "CSS", "JavaScript"],
    category: "WordPress",
    url: "https://tbsfactoring.com",
    image: `${SOURCE_SITE}/project-5.png`,
  },
  {
    name: "Task Manager Dashboard",
    subtitle: "Productivity Application",
    description:
      "Built a task management application with CRUD operations and responsive UI.",
    tech: ["React", "LocalStorage", "JavaScript"],
    category: "React",
    url: "https://vk-task-manager.netlify.app/",
    image: `${SOURCE_SITE}/project-7.png`,
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: readonly string[];
  tech: readonly string[];
}

export const experience: readonly Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Needle Ads Technology",
    location: "Mohali, India",
    period: "June 2026 – Present",
    current: true,
    highlights: [
      "Develop and maintain web applications using React.js, JavaScript, and Node.js.",
      "Build and integrate REST APIs to support application functionality and backend communication.",
      "Implement server-side logic and handle application data processing based on project requirements.",
      "Work with database operations, including data storage, retrieval, and CRUD functionality.",
      "Partner with design and product teams to translate UI/UX wireframes into accessible, responsive, production-ready interfaces.",
    ],
    tech: ["React.js", "Node.js", "REST APIs", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "C.S. Soft Solutions India Pvt. Ltd.",
    location: "Mohali, India",
    period: "July 2023 – Dec 2025",
    highlights: [
      "Architected modular, reusable UI components using React.js and custom hooks, improving maintainability and development efficiency across team projects.",
      "Optimized rendering speed through lazy loading, code splitting, and memoization, reducing overall page load times by 25%.",
      "Streamlined RESTful API integrations and async data fetching with robust error handling and state management using Context API.",
      "Developed dynamic, responsive web interfaces using JavaScript, HTML5, and CSS3 across client projects.",
    ],
    tech: ["React.js", "Context API", "JavaScript", "CSS3"],
  },
  {
    role: "Frontend Developer",
    company: "Outline Systems India Pvt. Ltd.",
    location: "Mohali, India",
    period: "Oct 2022 – June 2023",
    highlights: [
      "Built reusable UI components and translated wireframes into production-ready frontend designs.",
      "Created custom, fully responsive WordPress themes and landing pages to enhance user engagement.",
      "Resolved cross-browser compatibility and responsiveness issues using CSS Grid and Flexbox.",
    ],
    tech: ["WordPress", "CSS Grid", "Flexbox", "JavaScript"],
  },
  {
    role: "Frontend Developer",
    company: "Techknow Deviser",
    location: "Mohali, India",
    period: "Jan 2021 – Oct 2022",
    highlights: [
      "Created and optimized responsive layouts with HTML5, CSS3, JavaScript, and Bootstrap, speeding up project turnaround times by 15%.",
      "Collaborated with UI/UX designers and backend developers to turn wireframes and mockups into pixel-perfect, interactive web pages.",
      "Built mobile-first components with Bootstrap grid systems and responsive utilities across device sizes.",
    ],
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
];

export const education = [
  { title: "Bachelor of Computer Applications (BCA)", place: "Dronacharya PG College (HPU)", year: "2018" },
  { title: "Frontend Development Trainee", place: "WebBlaze Softtech", year: "2019" },
] as const;

export const projectFilters = ["All", "Next.js", "React", "WordPress", "HTML"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
