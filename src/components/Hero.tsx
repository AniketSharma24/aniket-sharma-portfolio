
import { useEffect, useRef } from "react";

export interface HeroProps {
  name: string;
  tagline?: string;
}

const Hero = ({ name, tagline }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5 animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-scale-in">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="animate-on-scroll opacity-0 animation-delay-200 text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight text-gradient">
            <div className="reveal-container">
              <span className="reveal-text inline-block" style={{ "--delay": "200ms" } as React.CSSProperties}>
                {name.split(" ")[0]}
              </span>
            </div>{" "}
            {name.split(" ").length > 1 && (
              <div className="reveal-container">
                <span className="reveal-text inline-block" style={{ "--delay": "400ms" } as React.CSSProperties}>
                  {name.split(" ").slice(1).join(" ")}
                </span>
              </div>
            )}
          </h1>

          <div className="animate-on-scroll opacity-0 animation-delay-400">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              {tagline || "Full Stack Developer & Designer creating elegant solutions to complex problems."}
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 animation-delay-600 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 shadow-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/70"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-center justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-[slide-down_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
