import React from 'react'
import Avatar from '../assets/avata.png'
import Mobui from '../assets/mobui.png'
import { gsap } from "gsap";
import 'animate.css';
// import SplitType from 'split-type'
// Photo by Udayaditya Barua: https://www.pexels.com/photo/the-busy-downtown-new-york-5288961/


const hero = () => {

  // gsap.to( ".square", { rotate: 360 })

  return (
    <div id='home'>
       <div className=" flex flex-col sm:flex-row-reverse  pt-20 w-fill h-full sm:h-screen text-white bg-[url('https://images.pexels.com/photos/6956433/pexels-photo-6956433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat" >
            <div className='flex-6 sm:flex sm:flex-row sm:justify-start sm:flex-1 relative'>
                    <div className='flex h-full justify-center items-center  z-1 transition ease-in-out delay-250   hover:scale-110 duration-1000 '>
                            <img className='w-auto h-[360px] sm:h-[500px] sm:w-[500px] animate__animated animate__fadeInUp sm:animate__slideInLeft sm:z-10' src={Avatar} alt="Avata" /> {/* animate__animated animate__slideInDown sm:animate__slideInLeft (animate.css ) */}
                    </div>
                    {/* <div className='flex h-full justify-center items-center  z-1 transition ease-in-out delay-250   hover:scale-110 duration-1000 '>
                            <img className='w-auto h-[150px] sm:h-[150px] sm:w-[70px] animate__animated animate__slideInDown sm:animate__slideInTop   sm:z-20' src={Mobui} alt="Avata" />
                    </div> */}

            </div>
            < div  className='flex flex-col sm:pl-18 py-10 sm:pl-[10%] sm:pt-25 px-4  flex-1 justify-center sm:justify-center items-end '>
                    {/* <div className='flex-1 text-white flex justify-center items-center px-10 sm:px-0'>
                        <div className='text-left sm:pl-10'>
                          <h1 className='font-bold font-Outfit text-4xl text-center  uppercase'>Hi!  i am Sagar</h1>   
                        </div>                  
                    </div> */}
                    <div className='flex flex-col'>
                      <div className='flex-1 text-white flex justify-center items-center sm:items-end px-10 sm:pb-0 animate__animated animate__fadeInUp '>
                          <div className='text-left sm:pl-10 '>
                              <p  className='font-bold font-Outfit sm:text-6xl text-3xl text-center sm:text-center '><span className='text-2xl '>Hi there </span>I'm Sagar <span className='text-2xl duration-700 hover:-translate-x-4'>Creative Web </span> Developer <span className='text-2xl'>I believe in the power</span>  <span className='text-2xl'> of continuous</span> learning</p>
                          </div>
                      </div>
                      <div className='flex-1 text-white flex justify-center items-center px-10 animate__animated animate__fadeInUp animate__delay-1s'>
                          <div className='text-left sm:pl-10'>
                              <p id="herotext" className='text-center font-Outfit'> Embarking on a journey to master full-stack web development through hands-on projects, fueled by a relentless desire to explore and innovate</p>
                          </div>
                      </div>
                      <div className='flex-1 text-black flex justify-center items-center '>
                        <button className= 'flex border-2 border-blue-400 hover:bg-blue-600 hover:border-blue-600  rounded-lg p-2 mt-2 font-bold font-Montser text-white animate__animated animate__fadeInUp animate__delay-2s ' type="button">
                          Get CV <span className='animate-bounce pl-2 fill-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                          < path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                      </svg>
                                  </span>
                        </button>             
                      </div>
                    </div>
                    
            </div>
       </div>         
    </div>
  )
}

export default (hero)

// style={{
    // background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"}}