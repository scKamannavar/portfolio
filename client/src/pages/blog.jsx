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
import ComingSoon from '../blog/ComingSoon'

const home = () => {
  return (
    <div className='w-full h-full flex justify-center'>
        <div className='w-[100vw] md:max-w-full lg:max-w-[950px]'>
          {/* <div className='block relative'>
              <NavbarMininal/>
          </div> */}
          <div className='md:block relative'>
              <NavbarMininal/>
              <ComingSoon/>
          </div>
        </div>
  </div>
  )
}

export default home
