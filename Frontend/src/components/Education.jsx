const education = [
    {
      degree: "BTech in Computer Science &  Engineering ",
      institution: "Siliguri Institute of Technology (MAKAUT)",
      year: "2023 - Present",
      icon: "🎓",
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "ST. Mary's Technical Campus Kolkata (WBSCTE)",
      year: "2019 - 2022",
      icon: "🎓",
    },
    {
      degree: "Secondary (10th)",
      institution: "Toryal High School (HS) (WBBSE)",
      year: "2019",
      icon: "🎓",
    },
  ];


const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education </h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education
