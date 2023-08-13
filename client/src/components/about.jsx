import React,{ useEffect, useRef } from 'react'
import scrollTo from '../constants/scrollTo'
import { gsap } from 'gsap'

const about = () => {

  const about = useRef()

  useEffect(() => {

    // gsap.to(about.current, { rotate: 360, duration: 5 })

  }, [])
  return (
    <div id='about'>
      
        <div ref={about} className='flex flex-col pt-20 sm:h-full '>
            <div className='flex  flex-2 justify-center hidden'>
                    <img className='h-40' src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1691321727~exp=1691322327~hmac=a232d3d2a58ddfdde15bf151817cf1cd6a70d2752dec0cc715a9c6952248dd30" alt="" />
            </div>
            <div className='flex  flex-1 justify-center text-center px-4 sm:px-10'>
              <div className='font-Outfit text:md sm:text-lg flex flex-col pb-10'>                  
                <div className='flex-1 text-left bg-slate-100 w-auto h-full p-4 sm:px-72'>
                  <div className='flex text-4xl justify-center'>
                    <h1>About Me</h1>
                  </div>
                  <p className='p-2'>Hello, I'm Sagar cK, an aspiring web developer with a Bachelor of Engineering in Computer Science.. My web development journey started in my college days with the fundamentals. This led me in Collaborating with seniors on Freelancing Projects which eventually led me to get my first paid gig. and I'm currently on a path of mastering various frameworks and advanced topics.</p>
                  <p className='p-2'>While I'm yet to showcase completed projects, my passion lies in crafting captivating web experiences. With a solid foundation in web technologies and a focus on React and Node.js, I'm eagerly gearing up to transform ideas into functional projects.</p>
                  <p className='p-2'>I embrace a constant learning mindset. The dynamic nature of web development motivates me to stay updated with the latest trends and technologies. I believe that every line of code I write contributes to my growth.</p>
                  <p className='p-2'>Being more on the reserved side and finding comfort in quieter moments, I'm excited to break out of my shell and immerse myself in a system that surrounds me with fun, motivated individuals. I eagerly look forward to engaging with fellow developers, sharing insights, and learning from diverse perspectives.</p>
                </div>
                <div className='flex-1 flex justify-center text-left bg-slate-100 shadow-md p-2 pb-10'>
                  <button className= 'flex border-2 border-blue-400 hover:bg-blue-600 hover:border-blue-600  rounded-lg p-2 mt-2 font-bold font-Montser hover:text-white animate__animated animate__slideInUp ' type="button" onClick={()=>scrollTo('#contact')}>
                        Get in Touch
                  </button>
                </div>
              </div>
            </div>
        </div>
            
    </div>
  )
}

export default about
