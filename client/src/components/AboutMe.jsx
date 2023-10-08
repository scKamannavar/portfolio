import React from 'react'
import Skills from './skills'
import About from './about'
import SkillList from './SkillList'

const AboutMe = () => {
  return (
    <div id='about'>
        {/* <div className='flex text-5xl font-Outfit font-extrabold justify-center backdrop-brightness-125'>
            <h1 className=''>Hi, i'm Sagar</h1>
        </div> */}
        <div className='flex flex-col w-full h-full items-start bg-white px-4 lg:px-2'> 
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
