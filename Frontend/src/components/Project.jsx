import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SocialMediaDashboard from "../assets/projects/socialmediadeshboard.png"
import StudentGradeTracker from "../assets/projects/studentgradetracker.png"
// import WeatherDashboard from "../assets/projects/weatherdashboard.png"

// Project component is now working with imported images

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard with analytics, From Instagram.",
      technologies: ["JAVA", "Java Spring-Boot", "HTML", "CSS", "Rest API"],
      image: SocialMediaDashboard,
      github: "https://github.com/heychirru/Social-Media-Dashboard.git",
      featured: false
    },
    {
      id: 2,
      title: "Student Grade Tracker ",
      description: "A Simple Student Grade Tracker Application Made With Java GUI.",
      technologies: ["JAVA", "JAVA Swing"],
      image: StudentGradeTracker,
      github: "https://github.com/chirru26/Student-Grade-Tracker.git",
      featured: false
    },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
    //   technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
    //   image: false,
    //   github: false,
    //   featured: false
    // },
    // {
    //   id: 4,
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and optimal user experience.",
    //   technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    //   image: PortfolioImg,
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   featured: false
    // }
  ];

  return (
    <div id="projects" className="py-20 bg-gray-950 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-11 text-center"
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-600">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">📱</div>
                      <div className="text-sm font-medium">{project.title}</div>
                      <div className="text-xs text-gray-500">Project Screenshot</div>
                    </div>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-2 text-sm font-semibold text-gray-200">Technologies</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                    project.technologies.filter(Boolean).map((tech, techIndex) => (
                      <span
                        key={`${project.id}-tech-${techIndex}`}
                        className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">None</span>
                  )}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub Profile Link */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-400 mb-6">
            You can check rest of my projects in my{" "}
            <a
              href="https://github.com/heychirru?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 font-semibold transition-colors duration-200"
            >
              GitHub
            </a>{" "}
            profile
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
