import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import Logo from '../assets/Logo.png';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div className='bg-gray-950 -mb-7 z-50 w-full py-3 fixed'>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0'>
        {/* logo section */}
        <div>
            <a href="/"><img src={Logo} alt="" className='w-[170px]'/></a>
        </div>
        {/* Menu section  */}
        <nav className='hidden md:block'>
           <ul className='flex gap-7 text-xl items-center font-semibold text-white'>
            <a href="/"><li className='cursor-pointer'>Home</li></a>
            <a href="#about"><li className='cursor-pointer'>About</li></a>
            <a href="#education"><li className='cursor-pointer'>Education </li></a>
            <a href="#contact"><button className='px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2'>Contact<FaChevronRight/></button></a>
           </ul>
        </nav>
        <div className='md:hidden text-white text-4xl'>
            {
                showMenu ? <HiMenuAlt3 onClick={toggleMenu}/> : <HiMenuAlt1 onClick={toggleMenu} />
            }
        </div>
      </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default Navbar
