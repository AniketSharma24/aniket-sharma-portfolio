
import { useEffect, useRef } from "react";
import { Briefcase, Calendar, CircuitBoard, ChevronRight } from "lucide-react";

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  current?: boolean;
}

export interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
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

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="py-24 section-padding relative bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            MY JOURNEY
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient">
            Professional Experience
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-70"></div>
        </div>

        <div className="grid gap-10">
          {experiences.map((experience, index) => (
            <div 
              key={`${experience.company}-${index}`} 
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`relative rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300
                ${experience.current 
                  ? "bg-primary/5 shadow-[0_0_15px_rgba(var(--primary-rgb)/0.2)]" 
                  : "bg-card/30 hover:bg-card/50"}`}
              >
                {/* Glowing border for current position */}
                {experience.current && (
                  <div className="absolute inset-0 border border-primary/30 rounded-xl"></div>
                )}
                
                {/* Content area */}
                <div className="p-6 md:p-8 relative">
                  {/* Top section with role, company, duration */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-3">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 rounded-lg p-3 
                        ${experience.current 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"}`}
                      >
                        {experience.current ? (
                          <CircuitBoard size={24} />
                        ) : (
                          <Briefcase size={24} className="text-muted-foreground" />
                        )}
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">
                          {experience.role}
                        </h4>
                        <h5 className="text-lg font-medium text-primary">
                          {experience.company}
                        </h5>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                      <Calendar size={14} className="mr-2" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  
                  {/* Single summarized description with marker */}
                  <div className="space-y-3 pl-4 border-l-2 border-muted">
                    <div className="flex items-start group/item">
                      <ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0 text-primary opacity-70" />
                      <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {experience.company === "Citi Pune, India" 
                          ? "Led development of responsive UI components with React.js, reducing defect rates by 20% through optimized architecture and collaborated with cross-functional teams to shorten delivery times."
                          : experience.company === "Globant Pune, India"
                          ? "Delivered high-impact projects using React.js, implemented optimized hooks for a 20% performance boost, and enhanced user experience by streamlining navigation and search functionalities."
                          : "Developed dynamic web applications with Angular, optimized complex workflows with RxJS, and created reusable components ensuring cross-browser compatibility."
                        }
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  {experience.current && (
                    <div className="absolute -right-3 -bottom-3 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
