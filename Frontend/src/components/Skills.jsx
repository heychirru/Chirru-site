import { FaJava } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGit } from "react-icons/si";

const skills = [
  { name: "Java", Icon: FaJava },
  { name: "Javascript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Git", Icon: SiGit },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="px-3 py-1 rounded-full bg-gray-800 text-sm">Skills</span>
          <p className="mt-4 text-lg text-gray-400">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center">
          {skills.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <Icon className="text-5xl md:text-6xl text-orange-400" />
              <span className="text-sm md:text-base text-gray-400">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


