import { FaChevronRight, FaHome, FaInfoCircle, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`${showMenu ? "left-0" : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 dark:bg-white px-8 pb-6 pt-6 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
      <div>
        <nav className='mt-2'>
          <ul className='flex flex-col gap-7 text-lg font-semibold text-white dark:text-gray-800'>
            <a href="/"><li className='cursor-pointer flex items-center gap-3' onClick={() => setShowMenu(false)}><FaHome /> Home</li></a>
            <a href="#about"><li className='cursor-pointer flex items-center gap-3' onClick={() => setShowMenu(false)}><FaInfoCircle /> About</li></a>
            <a href="#education"><li className='cursor-pointer flex items-center gap-3' onClick={() => setShowMenu(false)}><FaGraduationCap /> Education & Intership</li></a>
            <a href="#projects"><li className='cursor-pointer flex items-center gap-3' onClick={() => setShowMenu(false)}><FaProjectDiagram /> Projects</li></a>
            <a href="#contact"><button className='px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2'><FaEnvelope /> Contact <FaChevronRight /></button></a>
            <li className='flex items-center gap-3'><ThemeToggle /></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ResponsiveMenu
