import { FaJava } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGit } from "react-icons/si";

const iconBySkill = {
  Java: FaJava,
  Javascript: SiJavascript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Git: SiGit
};

const Skills = ({ profile }) => {
  const skills = profile?.skills || [];

  return (
    <section id="skills" className="py-20 bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="px-3 py-1 rounded-full bg-gray-800 text-sm">Skills</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center">
          {skills.map((name) => {
            const Icon = iconBySkill[name] || FaJava;
            return <div key={name} className="flex flex-col items-center gap-3"><Icon className="text-5xl md:text-6xl text-orange-400" /><span className="text-sm md:text-base text-gray-400">{name}</span></div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
