type TIcons = ReadonlyMap<string, { icon: string }>;

const goodCodingIcons: TIcons = new Map([
  ["Python", { icon: "simple-icons:python" }],
  ["Django", { icon: "simple-icons:django" }],
  ["HTML5", { icon: "simple-icons:html5" }],
  ["CSS3", { icon: "simple-icons:css3" }],
  ["JavaScript", { icon: "simple-icons:javascript" }],
  ["TypeScript", { icon: "simple-icons:typescript" }],
  ["Node.js", { icon: "simple-icons:nodedotjs" }],
  ["Express.js", { icon: "simple-icons:express" }],
  ["Prisma ORM", { icon: "simple-icons:prisma" }],
  ["React", { icon: "simple-icons:react" }],
  ["Tailwind CSS", { icon: "simple-icons:tailwindcss" }],
]);

const goodDesignIcons: TIcons = new Map([
  ["Photoshop", { icon: "simple-icons:adobephotoshop" }],
  ["Lightroom", { icon: "simple-icons:adobelightroom" }],
]);

const goodIcons = new Map([
  ["goodCoding", { icons: goodCodingIcons, text: "coding" }],
  ["goodDesign", { icons: goodDesignIcons, text: "design" }],
]);

const averageCodingIcons: TIcons = new Map([
  ["Next.js", { icon: "simple-icons:nextdotjs" }],
  ["Vue.js", { icon: "simple-icons:vuedotjs" }],
  ["Spring Boot", { icon: "simple-icons:springboot" }],
  ["Docker", { icon: "simple-icons:docker" }],
  ["MongoDB", { icon: "simple-icons:mongodb" }],
  ["MySQL", { icon: "simple-icons:mysql" }],
  ["PostgreSQL", { icon: "simple-icons:postgresql" }],
  ["Framer Motion", { icon: "simple-icons:framer" }],
  ["Playwright", { icon: "simple-icons:playwright" }],
  ["Cypress", { icon: "simple-icons:cypress" }],
  ["Vitest", { icon: "simple-icons:vitest" }],
]);

const averageDesignIcons: TIcons = new Map([
  ["figma", { icon: "simple-icons:figma" }],
]);

const averageIcons = new Map([
  ["averageCoding", { icons: averageCodingIcons, text: "coding" }],
  ["averageDesign", { icons: averageDesignIcons, text: "design" }],
]);

const averageGoodIcons = new Map([
  ["average", { iconMap: averageIcons }],
  ["good", { iconMap: goodIcons }],
]);

export default averageGoodIcons;
