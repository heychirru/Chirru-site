import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from "../assets/profile.jpg";
import CV from "../assets/Resume/CV.pdf";
import "../Css/Hero.css";

const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

const Hero = ({ profile }) => {
  const hero = profile?.hero || {};
  const social = hero.social || {};

  return (
    <section className="h-max md:h-screen bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="md:text-6xl text-4xl font-bold mb-4">
            Hi👋, I'm <p className="text-blue-400">{hero.name}</p>
          </motion.h1>
          <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.5 }} className="md:text-2xl text-lg mb-3">
            {hero.title}
          </motion.p>
          <a href={CV} target="_blank" rel="noopener noreferrer"><motion.button initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.4, delay: 0.5 }} className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 border-2 border-blue-400 transition-all"><Download className="w-5 h-5" /> View CV</motion.button></a>
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <FaGithub className="hover:text-blue-400 cursor-pointer" onClick={() => openLink(social.github)} />
            <FaFacebook className="hover:text-blue-400" onClick={() => openLink(social.facebook)} />
            <FaInstagram className="hover:text-blue-400 cursor-pointer" onClick={() => openLink(social.instagram)} />
            <FaLinkedin className="hover:text-blue-400" onClick={() => openLink(social.linkedin)} />
            <FaSquareXTwitter className="hover:text-blue-400" onClick={() => openLink(social.twitter)} />
          </div>
        </div>
        <div className="relative group">
          <motion.img initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0 }} src={Profile} alt="profile" className="border border-blue-600 md:w-[500px] w-[300px] border-blue-400 rounded-full object-cover border-[2px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
