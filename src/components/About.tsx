
import { useEffect, useRef } from "react";
import Profile from "../assets/profile.png"

export interface AboutProps {
  about: string;
}

const About = ({ about }: AboutProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Split the about text into paragraphs
  const paragraphs = about.split('\n').filter(p => p.trim());

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 section-padding relative"
    >
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10 opacity-70"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full -z-10 opacity-70"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image or illustration */}
          <div className="order-2 md:order-1 animate-on-scroll opacity-0">
          <div className="relative flex justify-center">
  <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-primary shadow-lg overflow-hidden group">
    <img
      src={Profile}
      alt="Profile"
      className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
  </div>
  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-3xl -z-10"></div>
  <div className="absolute -top-4 -left-4 w-20 h-20 bg-muted/50 rounded-full blur-3xl -z-10"></div>
</div>

          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-sm font-medium text-primary mb-2">ABOUT ME</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient">
                Who I Am
              </h3>
            </div>
            
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-muted-foreground leading-relaxed animate-on-scroll opacity-0"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8 animate-on-scroll opacity-0" style={{ animationDelay: "600ms" }}>
              <a 
                href="#skills" 
                className="inline-flex items-center text-primary font-medium group"
              >
                <span>Discover my skills</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
