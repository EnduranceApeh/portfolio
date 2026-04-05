export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string | any;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  problemStatement?: string;
  solution?: string;
}

export type SkillCategory =
  | "Languages"
  | "Frameworks"
  | "Tools"
  | "Platforms"
  | "Testing";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  proficiency?: "Expert" | "Proficient" | "Familiar";
}
