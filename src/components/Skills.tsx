import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa"; // FontAwesome icons
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
} from "react-icons/si"; // Simple Icons

const iconMap: { [key: string]: JSX.Element } = {
  JavaScript: <SiJavascript className="text-yellow-500 text-2xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-2xl" />,
  HTML: <SiHtml5 className="text-orange-600 text-2xl" />,
  CSS: <SiCss3 className="text-blue-500 text-2xl" />,
  React: <FaReact className="text-blue-400 text-2xl" />,
  NodeJs: <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
  Express: <SiExpress className="text-gray-500 text-2xl" />,
  Git: <FaGit className="text-orange-500 text-2xl" />,
  Jest: <span className="text-red-500 text-2xl">🔴</span>, // Jest (Emoji representation)
  "CI/CD": <span className="text-2xl">⚡</span>, // CI/CD (Lightning bolt emoji)
};

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills = ({ skillCategories }: SkillsProps) => {
  return (
    <section
      id="skills"
      className="py-24 section-padding relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2">
            MY EXPERTISE
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gradient">
            Technical Skills
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="rounded-xl p-6 glass">
              <h4 className="text-xl font-serif font-semibold mb-6 pb-2 border-b border-border">
                {category.category}
              </h4>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center space-x-3">
                    {iconMap[skill.name] || (
                      <span className="text-2xl">⚡</span>
                    )}
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
