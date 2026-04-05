import { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages", proficiency: "Familiar" },
  { name: "JavaScript", category: "Languages", proficiency: "Expert" },
  { name: "HTML5", category: "Languages", proficiency: "Expert" },
  { name: "CSS3 / Sass", category: "Languages", proficiency: "Expert" },

  // Frameworks
  { name: "React", category: "Frameworks", proficiency: "Expert" },
  //{ name: "Next.js", category: "Frameworks", proficiency: "Expert" },
  //{ name: "Vue.js", category: "Frameworks", proficiency: "Proficient" },
  { name: "Tailwind CSS", category: "Frameworks", proficiency: "Expert" },
  { name: "Node.js", category: "Frameworks", proficiency: "Proficient" },

  // Tools
  { name: "Git", category: "Tools", proficiency: "Expert" },
  { name: "Docker", category: "Tools", proficiency: "Familiar" },
  { name: "Webpack / Vite", category: "Tools", proficiency: "Proficient" },
  { name: "Figma", category: "Tools", proficiency: "Proficient" },

  // Platforms
  { name: "Vercel", category: "Platforms", proficiency: "Expert" },
  //{ name: "AWS", category: "Platforms", proficiency: "Familiar" },
  { name: "Firebase", category: "Platforms", proficiency: "Proficient" },

  // Testing
  { name: "Jest", category: "Testing", proficiency: "Proficient" },
  { name: "Cypress", category: "Testing", proficiency: "Proficient" },
  //{ name: "Playwright", category: "Testing", proficiency: "Familiar" },
];
