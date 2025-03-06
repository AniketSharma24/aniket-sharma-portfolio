
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
    name: "John Doe",
    tagline: "Full Stack Developer specializing in building exceptional digital experiences.",
    about: `I'm a passionate software developer with 5+ years of experience building web applications using modern technologies. 
    
I specialize in JavaScript, React, and Node.js, with a strong focus on creating user-friendly interfaces and scalable backend solutions.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.`,
    
    skillCategories: [
      {
        category: "Frontend",
        skills: [
          { name: "React", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "HTML/CSS", level: 95 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Next.js", level: 80 },
        ],
      },
      {
        category: "Backend",
        skills: [
          { name: "Node.js", level: 85 },
          { name: "Express", level: 80 },
          { name: "MongoDB", level: 75 },
          { name: "PostgreSQL", level: 70 },
          { name: "GraphQL", level: 65 },
        ],
      },
      {
        category: "DevOps & Tools",
        skills: [
          { name: "Git", level: 90 },
          { name: "Docker", level: 70 },
          { name: "AWS", level: 60 },
          { name: "CI/CD", level: 65 },
          { name: "Jest", level: 75 },
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
      { platform: "GitHub", url: "https://github.com/johndoe", username: "johndoe" },
      { platform: "LeetCode", url: "https://leetcode.com/johndoe", username: "johndoe" },
      { platform: "HackerRank", url: "https://hackerrank.com/johndoe", username: "johndoe" },
      { platform: "Codeforces", url: "https://codeforces.com/profile/johndoe", username: "johndoe" },
      { platform: "GeeksforGeeks", url: "https://geeksforgeeks.org/user/johndoe", username: "johndoe" },
    ],
    
    email: "john.doe@example.com",
    linkedinUrl: "https://linkedin.com/in/johndoe",
    githubUrl: "https://github.com/johndoe",
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
          <p className="text-muted-foreground">Loading portfolio...</p>
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
