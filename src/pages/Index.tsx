
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import CodingProfiles from "../components/CodingProfiles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PortfolioProject from "../assets/PortfolioProject.png";

const Index = () => {
  // Example data - this would be replaced with real user data
  const userData = {
    name: "Aniket Sharma",
    tagline:
      "Frontend Developer specializing in building exceptional digital experiences.",
    about: `I'm a passionate Senior UI Developer with 5+ years of experience crafting scalable, high-performance web applications.  

I specialize in React.js, TypeScript, and modern frontend technologies, with a strong focus on building intuitive user interfaces and optimizing application performance.  

Beyond coding, I enjoy exploring cutting-edge technologies, creating UI animations, and refining web experiences through micro-interactions and futuristic design.`,

    experiences: [
      {
        company: "Citi Pune, India",
        role: "Senior UI Developer",
        duration: "December 2023 – Present",
        description: "Led development of responsive UI components with React.js, reducing defect rates by 20% through optimized architecture and collaborated with cross-functional teams to shorten delivery times.",
        current: true
      },
      {
        company: "Globant Pune, India",
        role: "Senior Front End Engineer",
        duration: "December 2021 – December 2023",
        description: "Delivered high-impact projects using React.js, implemented optimized hooks for a 20% performance boost, and enhanced user experience by streamlining navigation and search functionalities."
      },
      {
        company: "Infocepts Nagpur, India",
        role: "Frontend Engineer",
        duration: "June 2019 - December 2021",
        description: "Developed dynamic web applications with Angular, optimized complex workflows with RxJS, and created reusable components ensuring cross-browser compatibility."
      }
    ],

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
        skills: [{ name: "NodeJs" }, { name: "Express" }, { name: "MongoDB" }],
      },
      {
        category: "DevOps & Tools",
        skills: [{ name: "Git" }, { name: "Jest" }, { name: "CI/CD" }],
      },
    ],

    projects: [
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio website showcasing my projects and skills with a modern, responsive design.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/AniketSharma24/aniket-sharma-portfolio",
        demoLink: "https://aniketsharma24.netlify.app/",
        image: PortfolioProject,
      },
    ],

    profiles: [
      {
        platform: "Linkedin",
        url: "https://www.linkedin.com/in/aniketsharma24/",
        username: "aniketsharma24",
      },
      {
        platform: "GitHub",
        url: "https://github.com/AniketSharma24",
        username: "aniketsharma24",
      },
      {
        platform: "LeetCode",
        url: "https://leetcode.com/aniketsharma24",
        username: "aniketsharma24",
      },
      {
        platform: "HackerRank",
        url: "https://www.hackerrank.com/profile/aniketsharma24",
        username: "aniketsharma24",
      },
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
          <p className="text-muted-foreground">
            Hang tight! Loading my portfolio...
          </p>
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
      <Experience experiences={userData.experiences} />
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
