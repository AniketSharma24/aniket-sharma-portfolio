import { useEffect, useRef } from "react";
import {
  Github,
  ExternalLink,
  Code,
  AlertCircle,
  Terminal,
  MessageSquare,
  Linkedin,
} from "lucide-react";

export interface Profile {
  platform: string;
  url: string;
  username?: string;
}

export interface CodingProfilesProps {
  profiles: Profile[];
}

// Map platform names to icons
const platformIcons: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin className="w-5 h-5" />,
  GitHub: <Github className="w-5 h-5" />,
  LeetCode: <Code className="w-5 h-5" />,
  HackerRank: <Terminal className="w-5 h-5" />,
};

const CodingProfiles = ({ profiles }: CodingProfilesProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
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
      id="profiles"
      ref={sectionRef}
      className="py-24 section-padding relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2 animate-on-scroll opacity-0">
            MY PRESENCE
          </h2>
          <h3
            className="text-3xl md:text-4xl md:leading-custom font-serif font-bold mb-6 text-gradient animate-on-scroll opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            Coding Profiles
          </h3>

          <p
            className="text-muted-foreground max-w-2xl mx-auto text-balance animate-on-scroll opacity-0"
            style={{ animationDelay: "400ms" }}
          >
            Connect with me on various coding platforms and explore my solutions
            to algorithmic challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll opacity-0 card-hover rounded-xl p-6 glass flex flex-col items-center text-center transition-all"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 border border-border/70 shadow-sm">
                {platformIcons[profile.platform] || (
                  <ExternalLink className="w-5 h-5" />
                )}
              </div>
              <h4 className="font-serif font-semibold mb-1">
                {profile.platform}
              </h4>
              {profile.username && (
                <p className="text-sm text-muted-foreground">
                  {profile.username}
                </p>
              )}
              <div className="mt-3 inline-flex items-center text-xs font-medium text-primary/70">
                <span>Visit Profile</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
