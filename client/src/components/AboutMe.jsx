import React from 'react'
import Skills from './skills'
import About from './about'
import SkillList from './SkillList'

const AboutMe = () => {
  return (
    <div id='about'>
        <div className='flex text-4xl font-Outfit justify-center '>
            <h1>About Me</h1>
        </div>
        <div className='flex flex-col sm:flex-row w-full h-fit items-center bg-white px-4 lg:px-32'> 
          <div className='flex-1'>
              <About/>
          </div>
          <div className='flex-1'>
              {/* <Skills/> */}
              <SkillList/>
          </div>
        </div>
    </div>

  )
}

export default AboutMe
