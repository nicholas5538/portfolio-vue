type TIcons = ReadonlyMap<string, { name: string }>;

const goodCodingIcons: TIcons = new Map([
  ["Python", { name: "simple-icons:python" }],
  ["Django", { name: "simple-icons:django" }],
  ["HTML5", { name: "simple-icons:html5" }],
  ["CSS3", { name: "simple-icons:css3" }],
  ["JavaScript", { name: "simple-icons:javascript" }],
  ["TypeScript", { name: "simple-icons:typescript" }],
  ["Node.js", { name: "simple-icons:nodedotjs" }],
  ["Express.js", { name: "simple-icons:express" }],
  ["Prisma ORM", { name: "simple-icons:prisma" }],
  ["React", { name: "simple-icons:react" }],
  ["Tailwind CSS", { name: "simple-icons:tailwindcss" }],
]);

const goodDesignIcons: TIcons = new Map([
  ["Photoshop", { name: "simple-icons:adobephotoshop" }],
  ["Lightroom", { name: "simple-icons:adobelightroom" }],
]);

const goodIcons = new Map([
  ["goodCoding", { icons: goodCodingIcons, text: "coding" }],
  ["goodDesign", { icons: goodDesignIcons, text: "design" }],
]);

const averageCodingIcons: TIcons = new Map([
  ["Next.js", { name: "simple-icons:nextdotjs" }],
  ["Vue.js", { name: "simple-icons:vuedotjs" }],
  ["Spring Boot", { name: "simple-icons:springboot" }],
  ["Docker", { name: "simple-icons:docker" }],
  ["MongoDB", { name: "simple-icons:mongodb" }],
  ["MySQL", { name: "simple-icons:mysql" }],
  ["PostgreSQL", { name: "simple-icons:postgresql" }],
  ["Framer Motion", { name: "simple-icons:framer" }],
  ["Playwright", { name: "simple-icons:playwright" }],
  ["Cypress", { name: "simple-icons:cypress" }],
  ["Vitest", { name: "simple-icons:vitest" }],
]);

const averageDesignIcons: TIcons = new Map([
  ["figma", { name: "simple-icons:figma" }],
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
