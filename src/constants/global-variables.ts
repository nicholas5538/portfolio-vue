import type { IconNames } from "~/constants/type-inference";

const resumeLink =
  "https://drive.google.com/file/d/1qAhqlPGqBdURD958C8yNdTVteQZKCQBJ/view?usp=sharing";

export const iconAlias = new Map<IconNames, string>([
  ["externalLink", "mdi:external-link"],
  ["github", "mdi:github"],
  ["instagram", "mdi:instagram"],
  ["linkedin", "mdi:linkedin"],
  ["mail", "material-symbols:mail-outline"],
  ["moon", "solar-moon-bold-duotone"],
  ["location", "mdi:location"],
  ["resume", "mdi:resume"],
  ["profile", "iconamoon:profile"],
  ["sun", "solar:sun-line-duotone"],
  ["youtube", "mdi:youtube"],
]);

export const resumeButtonProps = {
  ariaLabel: "Resume PDF",
  link: resumeLink,
  target: "_blank",
  text: "Resume",
};

export const externalLinks = new Map([
  [
    "Resume",
    {
      icon: iconAlias.get("resume"),
      text: "Resume",
      url: resumeLink,
    },
  ],
  [
    "LinkedIn",
    {
      icon: iconAlias.get("linkedin"),
      text: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/nicholas-yjy",
    },
  ],
  [
    "GitHub",
    {
      icon: iconAlias.get("github"),
      text: "GitHub Profile",
      url: "https://www.github.com/nicholas5538",
    },
  ],
  [
    "Instagram",
    {
      icon: iconAlias.get("instagram"),
      text: "Instagram Profile",
      url: "https://www.instagram.com/frivolousnicholas",
    },
  ],
]);

const bandlabJobPointers = [
  "Built and maintained modern full-stack web applications using React, TypeScript, Next.js, GraphQL and Tailwind CSS, ensuring clean architecture and maintainable codebases",
  "Spearheaded development of a headless CMS that enabled dynamic content delivery, contributing to a ~50% increase in user traffic",
  "Enhanced frontend performance by migrating from REST to GraphQL, streamlining data retrieval and reducing payload sizes to achieve 35% lower server costs and improved SEO",
  "Implemented server-side authentication using Supabase, ensuring secure user management and seamless authentication flows across applications",
];
const foodpandaJobPointers = [
  "Developed and maintained React applications with TypeScript, implementing comprehensive testing strategies using Jest and Cypress",
  "Improved API periodic tests by reducing test flakiness and implementing reattempts on timeout errors, resulting in a ~85% reduction in false positive errors",
  "Involved in setting up CI/CD pipeline with bash script and GitHub Actions to automate unit testing which increased the team’s productivity by ~50%",
];

export const workExperiences = new Map([
  [
    "bandlab",
    {
      startDate: "Jul 2024",
      endDate: "Present",
      title: "Full Stack Web Developer",
      company: "BandLab Technologies",
      url: "https://bandlabtechnologies.com",
      jobPointers: bandlabJobPointers,
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "GraphQL",
        "Supabase",
      ],
    },
  ],
  [
    "foodpanda",
    {
      startDate: "Oct 2022",
      endDate: "Mar 2023",
      title: "Software Engineer Trainee",
      company: "foodpanda",
      url: "https://www.foodpanda.com",
      jobPointers: foodpandaJobPointers,
      skills: ["JavaScript", "TypeScript", "React", "Jest", "Cypress"],
    },
  ],
]);

const voucherManagementProject = {
  id: 0,
  imageURL: "/images/voucher-management.webp",
  links: [
    {
      icon: iconAlias.get("github"),
      text: "GitHub",
      url: "https://github.com/nicholas5538/fp-voucher-FE",
    },
    {
      icon: iconAlias.get("externalLink"),
      text: "Website",
      url: "https://fp-voucher-portal.onrender.com",
    },
  ],
  projectTitle: "Voucher Management",
  projectDescription:
    "This is a web-based program that enables users to carry out CRUD operations on vouchers. It also provides a data table for convenient access to all information related to the vouchers.",
  techStack: [
    "TypeScript",
    "Node.js",
    "Express.js",
    "React",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "Docker",
  ],
};

const stocksProject = {
  id: 1,
  imageURL: "/images/stocks-portfolio.webp",
  links: [
    {
      icon: iconAlias.get("github"),
      text: "GitHub",
      url: "https://github.com/nicholas5538/StocksTracker",
    },
    {
      icon: iconAlias.get("youtube"),
      text: "YouTube",
      url: "https://youtu.be/T_cgG668pf4",
    },
  ],
  projectTitle: "Stockstracker",
  projectDescription:
    "This is a web-based program that enables users to quickly analyze the performance of their stock portfolio. It also allows users to save and make changes to their transaction history, which can be easily accessed on a single page.",
  techStack: ["Python", "Django", "HTML", "CSS", "Bootstrap", "PostgreSQL"],
};

const ioTProject = {
  id: 2,
  imageURL: "/images/hand-sanitizer.webp",
  links: [
    {
      icon: iconAlias.get("github"),
      text: "GitHub",
      url: "https://github.com/nicholas5538/sanitizer-IoT",
    },
    {
      icon: iconAlias.get("youtube"),
      text: "YouTube",
      url: "https://www.youtube.com/watch?v=G4GZ-QFubOY",
    },
  ],
  projectTitle: "IoT Hand Sanitizer",
  projectDescription:
    "A hand sanitizer product that incorporates data analytics and simple machine learning techniques to forecast certain data points, such as the number of times the sanitizer dispenser needs to be used before it runs out.",
  techStack: ["Python", "Jupyter Notebook", "Arduino"],
};

export const projects = new Map([
  ["Voucher Management", voucherManagementProject],
  ["StocksTracker", stocksProject],
  ["IoT Hand Sanitizer", ioTProject],
]);
