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
