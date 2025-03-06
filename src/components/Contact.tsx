import { useEffect, useRef, useState } from "react";
import { Mail, Send, Linkedin, Github, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";

export interface ContactProps {
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  otherLinks?: Array<{ platform: string; url: string }>;
}

const Contact = ({
  email,
  linkedinUrl,
  githubUrl,
  otherLinks,
}: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_up9nwni",
        "template_p8y7atk",
        formState,
        "s5mQ2aeWgsh3XHas1"
      );

      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setSubmitStatus("success");
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 section-padding relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2 animate-on-scroll opacity-0">
            GET IN TOUCH
          </h2>
          <h3
            className="text-3xl md:text-4xl md:leading-custom font-serif font-bold mb-6 text-gradient animate-on-scroll opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            Contact Me
          </h3>

          <p
            className="text-muted-foreground max-w-2xl mx-auto text-balance animate-on-scroll opacity-0"
            style={{ animationDelay: "400ms" }}
          >
            Have a project in mind or want to explore collaboration
            opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 shadow-sm flex items-center justify-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="text-sm p-3 rounded-lg bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Your message has been sent successfully!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-sm p-3 rounded-lg bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll opacity-0 animation-delay-200">
            <div className="glass rounded-xl p-8 h-full">
              <h4 className="text-2xl font-serif font-semibold mb-6 pb-4 border-b border-border">
                Contact Information
              </h4>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Email</h5>
                    <a
                      href={`mailto:${email}`}
                      className="text-primary md:text-base text-sm hover:underline "
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {linkedinUrl && (
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">LinkedIn</h5>
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary md:text-base text-sm hover:underline"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                )}

                {githubUrl && (
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">GitHub</h5>
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary md:text-base text-sm hover:underline"
                      >
                        Find me on GitHub
                      </a>
                    </div>
                  </div>
                )}

                {otherLinks &&
                  otherLinks.map((link) => (
                    <div key={link.platform} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">{link.platform}</h5>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Connect on {link.platform}
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
