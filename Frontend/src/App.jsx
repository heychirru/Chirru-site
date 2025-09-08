import ScrollToTop from "react-scroll-to-top"
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Hero from './components/Hero'
// import Internship from './components/Internship'
import Navbar from './components/Navbar'
import Project from './components/Project'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills />
      {/* <Internship/> */}
      <Project/>
      <Contact/>
      <Footer/>
      <ScrollToTop smooth color='white' style={{backgroundColor: '#3BB2F6', display:'flex',alignItems: 'center', justifyContent:'center'}}/>
    </div>
  )
}

export default App
