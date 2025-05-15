import { FaChevronRight, FaUserCircle } from 'react-icons/fa'

const ResponsiveMenu = ({showMenu, setShowMenu}) => {
  return (
    <div className={`${showMenu ? "left-0":'-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
      <div>
        <div className='flex items-center justify-start gap-3'>
            <FaUserCircle size={50} className='text-white'/>
            <div>
                <h1 className='text-white'>Hello User</h1>
                <h1 className='text-sm text-slate-500'>Premium User</h1>
            </div>
        </div>
        <nav className='mt-12'>
            <ul className='flex flex-col gap-7 text-lg font-semibold text-white'>
                <a href="/"><li className='cursor-pointer'>Home</li></a>
                <a href="#about"><li className='cursor-pointer' onClick={()=>setShowMenu(false)}>About</li></a>               
                <a href="#education"><li className='cursor-pointer' onClick={()=>setShowMenu(false)}>Education & Experience</li></a>
                <a href="#project"><li className='cursor-pointer' onClick={()=>setShowMenu(false)}>Projects</li></a>
                <a href="#contact"><button className='px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2'>Contact<FaChevronRight/></button></a>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default ResponsiveMenu
