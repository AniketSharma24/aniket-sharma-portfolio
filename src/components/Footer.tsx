import { Github, Linkedin, Mail } from "lucide-react";

export interface FooterProps {
  name: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const Footer = ({ name, email, githubUrl, linkedinUrl }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-xl font-serif font-semibold tracking-tight text-gradient"
            >
              {name}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            {email && (
              <a
                href={`mailto:${email}`}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-secondary"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-secondary"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-secondary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Designed and developed with care and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
