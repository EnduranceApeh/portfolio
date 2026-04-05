import { Project } from "@/types";
import gadgetstore from "@/images/projects/gadgetstore.png";
import foodImg from "@/images/projects/food.png";
import mentorConnect from "@/images/projects/mentorConnect.png"

export const projects: Project[] = [
  {
    id: "mentor-connect",
    title: "mentorConnect",
    description:
      "Built a full-stack mentorship platform that connects mentees with experienced mentors, enabling seamless communication and knowledge sharing. Implemented features such as user authentication, profile management, and real-time interaction, while focusing on clean architecture, scalability, and an intuitive user experience.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    thumbnail: mentorConnect,
    liveUrl: "https://mentor-connect-liard-gamma.vercel.app/",
    githubUrl: "https://github.com/EnduranceApeh/mentor-connect",
    featured: true,
    problemStatement:
      "Mentors and mentees needed a centralized way to connect and share knowledge.",
    solution:
      "I built a modern mentorship platform with Next.js App Router for fast page loads and real-time data synchronization using Firebase.",
  },
  {
    id: "gadget-store",
    title: "Online Gadget Store",
    description:
      "Developed a responsive e-commerce web application for browsing and purchasing gadgets, featuring product listing, filtering, cart management, and checkout functionality. Emphasized performance optimization, reusable components, and efficient state management to deliver a smooth user experience",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: gadgetstore,
    githubUrl: "https://github.com/EnduranceApeh/gadget-store",
    featured: false,
  },
  {
    id: "food ordering app",
    title: "Food Ordering App",
    description:
      "Designed and built an interactive food ordering application that allows users to browse menus, place orders, and manage their cart in real time. Integrated dynamic UI updates, asynchronous data handling, and a user-friendly interface to ensure a fast and engaging ordering experience.",
    technologies: ["HTML", "CSS", "Firebase"],
    thumbnail: foodImg,
    githubUrl: "https://github.com/EnduranceApeh/food-ordering-app",
    featured: false,
  },
];
