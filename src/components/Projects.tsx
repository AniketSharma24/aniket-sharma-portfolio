
import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
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
              }, index * 150);
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
      id="projects"
      ref={sectionRef}
      className="py-24 section-padding relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2 animate-on-scroll opacity-0">MY WORK</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
            Featured Projects
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance animate-on-scroll opacity-0" style={{ animationDelay: "400ms" }}>
            A selection of my recent work, showcasing my skills and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-on-scroll opacity-0 card-hover rounded-xl overflow-hidden glass flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-serif font-semibold mb-2 line-clamp-1">
                  {project.title}
                </h4>

                <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-auto">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
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

export default Projects;
