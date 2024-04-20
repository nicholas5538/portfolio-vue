const resumeLink =
  "https://drive.google.com/file/d/1qAhqlPGqBdURD958C8yNdTVteQZKCQBJ/view?usp=sharing";

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
      name: "resume",
      text: "Resume",
      url: resumeLink,
    },
  ],
  [
    "LinkedIn",
    {
      name: "linkedin",
      text: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/nicholas-yjy",
    },
  ],
  [
    "GitHub",
    {
      name: "github",
      text: "GitHub Profile",
      url: "https://github.com/nicholas5538",
    },
  ],
  [
    "Instagram",
    {
      name: "instagram",
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
