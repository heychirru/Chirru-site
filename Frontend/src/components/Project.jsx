import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SocialMediaDashboard from "../assets/projects/socialmediadeshboard.png";
import StudentGradeTracker from "../assets/projects/studentgradetracker.png";

const imageByTitle = {
  "Social Media Dashboard": SocialMediaDashboard,
  "Student Grade Tracker": StudentGradeTracker
};

const Project = ({ profile }) => {
  const projects = profile?.projects || [];

  return (
    <div id="projects" className="py-20 bg-gray-950 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-11 text-center">My Projects</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={imageByTitle[project.title]} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.technologies || []).map((tech, i) => <span key={i} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">{tech}</span>)}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200"><FaGithub className="w-4 h-4" />Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
