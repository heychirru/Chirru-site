import { FaChevronRight } from 'react-icons/fa'
import AboutImg from '../assets/About.png'

const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-950 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
            {/* img section */}
            <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500'>
                <img src={AboutImg} alt="" className='w-[300px] md:w-[1500px] rounded-full border-blue-600 border'/>
            </div>
            {/* paragraph section */}
            <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-lg'>
                <p className='text-lg leading-7 mb-6'>Hi! I'm Chiranjit Das, a passionate Backend Developer With a strong foundation in modern web development and an eye for detail, I create elegant, user-friendly web solutions tailored to meet client needs.</p>
                <p className='text-lg leading-7 mb-6'>My journey into tech began from a non-IT background, and I've embraced every challenge to hone my skills in development, problem-solving, and teamwork. I'm always eager to learn and explore new technologies to deliver cutting-edge web experiences.</p>
                <p className='text-lg leading-7 mb-6'>When I'm not coding, you can find me reading, gaming, or exploring the great outdoors. I'm always up for a chat, so feel free to reach out if you have any questions or just want to say hi!</p>
                <div className='mt-5'>
                    <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight/></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
