import React from 'react'
// import About from '../components/about'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'
import HeroParallax from '../components/HeroParallax'
import Experience from '../components/Experience'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import ContactNew from '../components/ContactNew'
import NavbarMininal from '../components/NavbarMininal'
import Navbar from '../components/navbar'
import ProjectsMinimal from '../components/ProjectsMinimal'
import ExperienceMinimal from '../components/ExperienceMinimal'
import ApiCallButton from '../components/ApiCallButton'

const home = () => {
  return (
    <div className='w-full h-full flex justify-center'>
        <div className='w-[100vw] md:max-w-full lg:max-w-[950px]'>
        {/* <div className='md:hidden'>
            <Navbar/>
        </div> */}
        <div className='block relative'>
            <NavbarMininal/>
        </div>
            

            <HeroParallax/>

            <AboutMe/>
            {/* <Hero/> */}
            {/* <About/> */}

            {/* <ExperienceMinimal/>
            <Experience/> */}
            <ProjectsMinimal/>
            {/* <ApiCallButton/> */}
            {/* <Projects/> */}
            {/* <Education/> */}
            {/* <Contact/> */}
            {/* <ContactNew/> */}
            {/* <Footer/> */}
        </div>
   
  </div>
  )
}

export default home
