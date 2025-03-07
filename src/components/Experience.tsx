
import { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

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
      className="py-24 section-padding relative"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2">
            MY JOURNEY
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient">
            Professional Experience
          </h3>
        </div>

        <div className="relative border-l-2 border-primary/20 pl-6 md:pl-8 ml-4 md:ml-6 space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={`${experience.company}-${index}`} 
              className={`relative animate-on-scroll opacity-0`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot - Fixed positioning */}
              <div className="absolute -left-[31px] md:-left-[35px] -top-1">
                <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${experience.current 
                  ? "bg-primary border-primary" 
                  : "bg-background border-primary/30"}`}>
                  <Briefcase size={14} className={experience.current ? "text-primary-foreground" : "text-primary/70"} />
                </div>
              </div>

              {/* Content card */}
              <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-5 shadow-sm transition-all hover:shadow-md">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-medium">{experience.role}</h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
                <h5 className="text-lg font-medium text-primary mb-3">{experience.company}</h5>
                <p className="text-muted-foreground whitespace-pre-line">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
