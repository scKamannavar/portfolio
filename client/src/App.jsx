import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import HeroParallax from './components/HeroParallax'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import ContactNew from './components/ContactNew'

function App() {
  return (
  <div>
    <div className=''>
    <Navbar/>
    </div>
    <HeroParallax/>

    <AboutMe/>
    {/* <Hero/> */}
    {/* <About/> */}

    
    <Experience/>
    <Projects/>
    <Education/>
    {/* <Contact/> */}
    <ContactNew/>
    {/* <Footer/> */}
  </div>
  )
}

export default App
