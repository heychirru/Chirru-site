import { FaChevronRight } from "react-icons/fa";
import AboutImg from "../assets/About.png";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-950 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center ">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* img section */}
          <div className="relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500">
            <img
              src={AboutImg}
              alt=""
              className="w-[300px] md:w-[1500px] rounded-full border-blue-600 border"
            />
          </div>
          {/* paragraph section */}
          <div className="p-2.5 md:p-5 bg-blue-250 rounded-xl shadow-lg border-4 border-white-500">
            <p className="text-2xl leading-12 mb-10 text-blue-500">
              Curious about me? Here you have it:
            </p>
            <p className="text-lg leading-7 mb-6">
              Hi! I'm Chiranjit Das, a passionate Backend Developer With a
              strong foundation in modern web development and an eye for detail,
              I create elegant, user-friendly web solutions tailored to meet
              client needs.
            </p>
            <p className="text-lg leading-7 mb-6">
              My journey into tech began from a non-IT background, and I've
              embraced every challenge to hone my skills in development,
              problem-solving, and teamwork. I'm always eager to learn and
              explore new technologies to deliver cutting-edge web experiences.
            </p>
            <p className="text-lg leading-7 mb-6">
              When I'm not coding, you can find me reading, gaming, or exploring
              the great outdoors. I'm always up for a chat, so feel free to
              reach out if you have any questions or just want to say hi!
            </p>
            <p className="text-lg leading-7 mb-6">
              When I'm not in full-on developer mode, you can find me hovering around on Instagram,
              witnessing the journey of early startups or enjoying some free time. You can follow me on{" "}
              <a
                href="https://instagram.com/chir.ru_26t/"
                className="text-orange-500 underline hover:text-orange-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              where I share tech-related bites and build in public, or you can follow me on{" "}
              <a
                href="https://github.com/heychirru"
                className="text-orange-500 underline hover:text-orange-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
            {/* Quick Bits Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Finally, some quick bits about me.
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    B.Tech in Computer Science & Engineering
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Avid learner
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-5">
              <button className="px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1">
                Contact
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
