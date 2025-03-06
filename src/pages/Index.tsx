
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CodingProfiles from "../components/CodingProfiles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  // Example data - this would be replaced with real user data
  const userData = {
    name: "Aniket Sharma",
    tagline: "Frontend Developer specializing in building exceptional digital experiences.",
    about: `I'm a passionate Senior UI Developer with 5+ years of experience crafting scalable, high-performance web applications.  

I specialize in React.js, TypeScript, and modern frontend technologies, with a strong focus on building intuitive user interfaces and optimizing application performance.  

Beyond coding, I enjoy exploring cutting-edge technologies, creating UI animations, and refining web experiences through micro-interactions and futuristic design.`,
    
    skillCategories: [
      {
        category: "Frontend",
        skills: [
          { name: "React" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "HTML" },
          { name: "CSS" },
        ],
      },
      {
        category: "Backend",
        skills: [
          { name: "NodeJs" },
          { name: "Express" },
          { name: "MongoDB" },
        ],
      },
      {
        category: "DevOps & Tools",
        skills: [
          { name: "Git" },
          { name: "Jest" },
          { name: "CI/CD" },
        ],
      },
    ],
    
    projects: [
      {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with product management, cart functionality, and secure payment processing.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        githubLink: "https://github.com/username/ecommerce",
        demoLink: "https://ecommerce-demo.com",
      },
      {
        title: "Task Management App",
        description: "A productivity tool for managing tasks, projects, and team collaboration with real-time updates.",
        tags: ["React", "Firebase", "Redux", "Material UI"],
        githubLink: "https://github.com/username/task-app",
        demoLink: "https://task-app-demo.com",
      },
      {
        title: "Weather Dashboard",
        description: "An interactive weather application that provides detailed forecasts and historical weather data.",
        tags: ["JavaScript", "API", "Chart.js", "CSS"],
        githubLink: "https://github.com/username/weather-app",
        demoLink: "https://weather-app-demo.com",
      },
      {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects and skills with a modern, responsive design.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/username/portfolio",
        demoLink: "https://portfolio-demo.com",
      },
      {
        title: "Chat Application",
        description: "A real-time chat application with private messaging, group chats, and media sharing capabilities.",
        tags: ["React", "Socket.io", "Node.js", "MongoDB"],
        githubLink: "https://github.com/username/chat-app",
        demoLink: "https://chat-app-demo.com",
      },
      {
        title: "Finance Tracker",
        description: "A personal finance management tool for tracking expenses, income, and financial goals with visual reports.",
        tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
        githubLink: "https://github.com/username/finance-tracker",
        demoLink: "https://finance-tracker-demo.com",
      },
    ],
    
    profiles: [
      { platform: "Linkedin", url: "https://www.linkedin.com/in/aniketsharma24/", username: "aniketsharma24" },
      { platform: "GitHub", url: "https://github.com/AniketSharma24", username: "aniketsharma24" },
      { platform: "LeetCode", url: "https://leetcode.com/aniketsharma24", username: "aniketsharma24" },
      { platform: "HackerRank", url: "https://www.hackerrank.com/profile/aniketsharma24", username: "aniketsharma24" },
    ],
    
    email: "aniketcode24@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/aniketsharma24/",
    githubUrl: "https://github.com/AniketSharma24",
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
          <p className="text-muted-foreground">Hang tight! Loading my portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar name={userData.name} />
      <Hero name={userData.name} tagline={userData.tagline} />
      <About about={userData.about} />
      <Skills skillCategories={userData.skillCategories} />
      <Projects projects={userData.projects} />
      <CodingProfiles profiles={userData.profiles} />
      <Contact 
        email={userData.email}
        linkedinUrl={userData.linkedinUrl}
        githubUrl={userData.githubUrl}
      />
      <Footer 
        name={userData.name}
        email={userData.email}
        githubUrl={userData.githubUrl}
        linkedinUrl={userData.linkedinUrl}
      />
    </div>
  );
};

export default Index;
