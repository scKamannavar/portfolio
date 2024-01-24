import React,{ useEffect, useRef } from 'react'
import scrollTo from '../constants/scrollTo'
import { delay, motion } from "framer-motion"
import ExamplePdf from '../assets/resume/this/SagarcK_CV.pdf'
import { InView } from 'react-intersection-observer';
import { gsap } from 'gsap'

const about = () => {

  const about = useRef()

  useEffect(() => {

    // gsap.to(about.current, { rotate: 360, duration: 5 })

  }, [])
  return (

        <div ref={about} id='about' className='flex flex-col sm:h-full '>
            <div className='  flex-2 justify-center hidden'>
                    <img className='h-40' src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1691321727~exp=1691322327~hmac=a232d3d2a58ddfdde15bf151817cf1cd6a70d2752dec0cc715a9c6952248dd30" alt="" />
            </div>
            <div className='flex  flex-1 justify-center text-center'>
              <div className='font-Outfit text:sm sm:text-xl flex flex-col'>                  
                <motion.div className='flex-1 text-left bg-none w-[100%] h-full p-4 '
                  initial={{ opacity:0,x:0 }}
                  animate={{ opacity:1,x:0  }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  >
                    {/* <div className='flex text-4xl justify-center'>
                      <h1>About Me</h1>
                    </div> */}
                    {/* <p className='p-2'>Hello, I'm Sagar cK, an aspiring web developer with a Bachelor of Engineering in Computer Science.. My web development journey started in my college days with the fundamentals. This led me in Collaborating with seniors on Freelancing Projects which eventually led me to get my first paid gig. and I'm currently on a path of mastering various frameworks and advanced topics.</p>
                    <p className='p-2'>While I'm yet to showcase completed projects, my passion lies in crafting captivating web experiences. With a solid foundation in web technologies and a focus on React and Node.js, I'm eagerly gearing up to transform ideas into functional projects.</p> */}
                    {/* <p className=''>Hey There !</p> */}
                    <p className='p-2'>
                        <span className='text-gray-700 font-Montser font-bol text-3xl'> Web developer</span> with a passion for creating outstanding digital experiences. From Javascript and CSS to React and Redux,
                         I've got the tech covered. But what really drives me is
                         <span className='text-gray-700 font-Montser font-bol text-3xl'>Curiosity</span> and <span className='text-gray-700 font-Montser font-bol text-3xl'>Creativity</span>—I've loved building things since I was a kid.
                     </p>
                     <p className='p-2'>
                      I've freelanced on various projects, building Websites, collaborated in <span className='text-gray-700 font-Montser font-bol text-3xl'>filmmaking</span>, 
                      and hold an engineering degree in computer science. 
                      Now, I'm excited to connect, learn, and contribute to new digital adventures. Let's Connect!
                     </p>
                    {/* <p className='p-2'>A passionate and creative <span className='text-black text-3xl'>web developer</span> who is dedicated to creating exceptional web solutions.  I'm constantly on the lookout for new opportunities in the field of web development, eager to bring new ideas and designs to life.  </p> */}
                    <h1 className='p-2'>You can 
                    <a 
                      
                      href={ExamplePdf}
                      download="SagarResme"
                      target="_blank"
                      rel="noreferrer"className='text-blue-500 underline'>
                      Download
                    </a>
                     My CV</h1>
                    {/* <p className='p-2'>Being more on the reserved side and finding comfort in quieter moments, I'm excited to break out of my shell and immerse myself in a system that surrounds me with fun, motivated individuals. I eagerly look forward to engaging with fellow developers, sharing insights, and learning from diverse perspectives.</p> */}
                </motion.div>
                {/*Old Buttons Download CV and Contact */}
                {/* <div className='flex-1 flex justify-center gap-2 md:w-[50%] text-left bg-none shadow-none p-2 px-6 sm:text-xs lg:text-md'>
                  <button className= 'flex border-2 w-full justify-center items-center border-blue-400 hover:bg-blue-600 hover:border-blue-600 h-12 rounded-lg p-2 mt-2 font-bold font-Montser transition-colors duration-700 hover:text-white animate__animated animate__slideInUp ' type="button" onClick={()=>scrollTo('#contact')}>
                        Get in Touch
                  </button>
                  <a
                      href={ExamplePdf}
                      download="SagarResme"
                      target="_blank"
                      rel="noreferrer"
                      className= 'flex border-2 w-full justify-center border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600 h-12 rounded-lg p-2 mt-2 font-bold font-Montser transition-colors duration-700 hover:text-white animate__animated animate__slideInUp '
                    >
                  <button>
                        Download CV
                  </button>
                  </a>
                </div> */}
              </div>
            </div>
        </div>


            
   
  )
}

export default about
