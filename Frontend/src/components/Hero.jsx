import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from "../assets/profile.png";
import CV from "../assets/Resume/CV.pdf";
import "../Css/Hero.css";

// JavaScript function to redirect to Socile Media IDs Links
function redirectToGithub() {
  window.open("https://github.com/heychirru", 
  "_blank",
  "noopener,noreferrer"
);
}

function redirectToInstagram() {
  window.open(
    "https://www.instagram.com/chir.ru_26t/",
    "_blank",
    "noopener,noreferrer"
  );
}

function redirectToFacebook() {
  window.open(
    "https://www.facebook.com/chirru26/",
    "_blank",
    "noopener,noreferrer"
  );
}

function redirectToLinkedIn() {
  window.open(
    "https://www.linkedin.com/in/heychirru26",
    "_blank",
    "noopener,noreferrer"
  );
}

function redirectToTwitter() {
  window.open("https://x.com/chir_ru26",
    "_blank",
    "noopener,noreferrer"
  );
}




const Hero = () => {
  return (
    <section className="h-max md:h-screen bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            Hi👋, I'm <p className="text-blue-400">Chiranjit Das</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="md:text-2xl text-lg mb-3"
          >
            Wanna be a Java Backend Developer
          </motion.p>

          <a href={CV} target="_blank" rel="noopener noreferrer">
            <motion.button
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 border-2 border-blue-400 transition-all"
          >
            <Download className="w-5 h-5" /> View CV
          </motion.button>
          </a>
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            {/* Attach the JS function */}
            <FaGithub
              className="hover:text-blue-400 cursor-pointer"
              onClick={redirectToGithub}
            />
            <FaFacebook
              className="hover:text-blue-400"
              onClick={redirectToFacebook}
            />
            <FaInstagram
              className="hover:text-blue-400 cursor-pointer"
              onClick={redirectToInstagram}
            />
            <FaLinkedin
              className="hover:text-blue-400"
              onClick={redirectToLinkedIn}
            />
            <FaSquareXTwitter
              className="hover:text-blue-400"
              onClick={redirectToTwitter}
            />
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Profile}
            alt=""
            className="rounded-full border border-blue-600 md:w-[500px] w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
