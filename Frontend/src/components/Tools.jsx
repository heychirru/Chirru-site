import React from "react";
import { SiPostman, SiNetlify, SiVisualstudio, SiGithub, SiOpenai } from "react-icons/si";

const tools = [
  { name: "Visual Studio", Icon: SiVisualstudio, color: "text-blue-500" },
  { name: "GitHub", Icon: SiGithub, color: "text-gray-300" },
  { name: "Postman", Icon: SiPostman, color: "text-orange-400" },
  { name: "Netlify", Icon: SiNetlify, color: "text-teal-400" },
  { name: "ChatGPT", Icon: SiOpenai, color: "text-green-400" },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="px-3 py-1 rounded-full bg-gray-800 text-sm">Tools</span>
          <p className="mt-4 text-lg text-gray-400">The tools I use daily:</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center">
          {tools.map(({ name, Icon, color }) => (
            <div key={name} className="flex flex-col items-center gap-3" aria-label={name}>
              <Icon className={`text-5xl md:text-6xl ${color} transition-transform duration-300 hover:scale-110`} />
              <span className="text-sm md:text-base text-gray-400">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
