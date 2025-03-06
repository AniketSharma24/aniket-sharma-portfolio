
import { useEffect, useRef } from "react";

export interface Skill {
  name: string;
  level?: number; // 1-100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills = ({ skillCategories }: SkillsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 section-padding relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2 animate-on-scroll opacity-0">MY EXPERTISE</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
            Technical Skills
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance animate-on-scroll opacity-0" style={{ animationDelay: "400ms" }}>
            A curated collection of my technical abilities, continuously expanding through learning and practical application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="animate-on-scroll opacity-0 card-hover rounded-xl p-6 glass"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h4 className="text-xl font-serif font-semibold mb-6 pb-2 border-b border-border">
                {category.category}
              </h4>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skill.name}
                    className="animate-on-scroll opacity-0"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    {skill.level && (
                      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: "0%", 
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                            animation: "growWidth 1s forwards",
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                          data-width={`${skill.level}%`}
                        ></div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes growWidth {
          from { width: 0%; }
          to { width: var(--width, 0%); }
        }
        [data-width] {
          --width: attr(data-width);
        }
      `}</style>
    </section>
  );
};

export default Skills;
