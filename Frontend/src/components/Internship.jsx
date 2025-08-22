const internships = [
  {
    role: "MERN Training",
    company: "ARDENT COMPUTECH PVT LTD",
    duration: "29 Febuary 2024 - 11 March 2024",
    description: "Frontend and Backend & Full Stack Web Development Training.",
    icon: "💼",
  },

  {
    role: "GWING Software Technologies, as a Backend Developer Intern",
    company: "GWING Software Technologies",
    duration: "24 May 2025 - 23 June 2025",
    description: "Backend Development using Node.js and Express.",
    icon: "👨‍💻",
  },

  // {
  //   role: "Internship at GWING Software Technologies",
  //   company: "GWING Software Technologies",
  //   duration: "24 May 2025 - 23 June 2025",
  //   description: "Worked on backend development using Node.js and Express.",
  //   icon: "💼
  // }
];

const Internship = () => (
  <div>
    <h3 className="text-3xl font-semibold text-gray-300 mb-6">
      Internship
    </h3>
    {internships.map((intern, idx) => (
      <div
        key={idx}
        className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
      >
        <div className="text-4xl mr-6 text-blue-500">{intern.icon}</div>
        <div>
          <h4 className="text-xl font-bold text-gray-200">{intern.role}</h4>
          <p className="text-gray-300">{intern.company}</p>
          <p className="text-gray-300 text-sm italic">{intern.duration}</p>
          <p className="text-gray-300 mt-2">{intern.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Internship;
