import type { IconNames } from "~/constants/typeInference";

const resumeLink =
  "https://drive.google.com/file/d/1qAhqlPGqBdURD958C8yNdTVteQZKCQBJ/view?usp=sharing";

// TODO: make a map to store icons

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

const fpJobPointers = [
  "Engineered modern applications with a variety of different languages, framework and testing libraries such as React, Typescript, Jest and Cypress.",
  "Collaborated with other engineers to develop front-end interfaces on company internal tools, allowing other employees to easily modify the configurations in the parcel delivery service.",
  "Improved API periodic tests by reducing test flakiness and implementing reattempts on timeout errors, resulting in a ~85% reduction in false positive errors.",
  "Involved in setting up CI/CD pipeline with bash script and GitHub Actions to fully automate testing and deployment stage which increased the team’s productivity by ~50%.",
];

const siaecJobPointers = [
  "Performed composite laminate and aluminium sheet metal repairs.",
  "Applied aircraft systems knowledge during OJTs on A380 & B787 aircraft.",
  "Exposed and familiarized to OEM manuals such as AMM and SRM in AirNav.",
];

export const workExperiences = new Map([
  [
    "foodpanda",
    {
      index: 0,
      startDate: "Oct 2022",
      endDate: "Mar 2023",
      title: "Software Engineer Trainee",
      company: "foodpanda",
      url: "https://www.foodpanda.com",
      jobPointers: fpJobPointers,
      skills: ["JavaScript", "TypeScript", "React", "Jest", "Cypress"],
    },
  ],
  [
    "siaec",
    {
      index: 1,
      startDate: "Jan 2022",
      endDate: "Sep 2022",
      title: "Aircraft Engineer Trainee",
      company: "SIAEC",
      url: "https://www.siaec.com.sg",
      jobPointers: siaecJobPointers,
    },
  ],
]);

const voucherManagementProject = {
  id: 0,
  imageURL: "/images/voucher_management.webp",
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
  imageURL: "/images/handsanitizer.webp",
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

const pepsiProject = {
  id: 3,
  imageURL: "/images/pepsi-corporate.webp",
  links: [
    {
      icon: iconAlias.get("github"),
      text: "GitHub",
      url: "https://github.com/nicholas5538/fp-mini-project",
    },
  ],
  projectTitle: "Pepsi corporate SPA",
  projectDescription:
    "Creating a new React-based single-page application from the beginning, in order to gain familiarity with various tools, including Typescript, React Router, framer motion, and the vitest unit testing framework.",
  techStack: ["TypeScript", "React", "Framer Motion"],
};

export const projects = new Map([
  ["Voucher Management", voucherManagementProject],
  ["StocksTracker", stocksProject],
  ["IoT Hand Sanitizer", ioTProject],
  ["Pepsi SPA", pepsiProject],
]);
