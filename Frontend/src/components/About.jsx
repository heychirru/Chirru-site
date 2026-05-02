import { FaChevronRight } from "react-icons/fa";
import AboutImg from "../assets/About.jpg";

const About = ({ profile }) => {
  return (
    <div id="about" className="py-20 bg-gray-950 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center ">About Me</h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="relative border hidden md:block border-blue-400 p-0.5 bg-blue-400">
            <img src={AboutImg} alt="about" className="w-[300px] md:w-[1500px] border-blue-500 border-[0.5px]" />
          </div>
          <div className="p-2.5 md:p-5 bg-blue-250 rounded-xl shadow-lg border-4 border-white-500">
            <p className="text-2xl leading-12 mb-10 text-blue-500">{profile?.aboutIntro}</p>
            {(profile?.aboutParagraphs || []).map((text, idx) => <p key={idx} className="text-lg leading-7 mb-6">{text}</p>)}
            <div className="mt-5">
              <button className="px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1">Contact <FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
