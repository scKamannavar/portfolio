import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'
import fun from '../constants/scrollTo';
import hamIcon from '../assets/icons/ham.svg'
import navElements from './navElements';
import {motion} from 'framer-motion'

const navbar = () => {

    const [navdrop, setNavdrop] = useState(false);
    const [navColor, setNavColor] = useState();
    const [navColorMob, setNavColorMob] = useState();

    // fun(elementRef)
    // const scrollTOSection = (elementRef) =>{
    //     const section = document.querySelector( elementRef );
    //     section.scrollIntoView( { behavior: 'smooth', block: 'start',inline: "nearest" } );
    //     // elementRef.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    // }
    useEffect(() => {
        
        const handleScroll = () => {
            (window.scrollY > 700) ? setNavColor(true) : setNavColor(false);
            (window.scrollY > 450) ? setNavColorMob(true) : setNavColorMob(false);

        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[])
        const navText = 'Jawaan'

  return (
    // bg-[#00cdda] navColorMob
    <div className={`${navColor?'sm:bg-[#00cdda]':'sm:bg-none'} ${navColorMob?'bg-[#00cdda]':'bg-none'} w-screen sm:w-full mt-0 fixed sm:flex sm:justify-between sm:pb-6 transition-all duration-300 z-50`}>
        <div className='mb-0 sm:mb-2 h-20 sm:h-8 pt-1 sm:pt-0'>
            <div className='flex items-center justify-between '>
                <div className='px-4 sm:pt-1 sm:pl-10'>
                    <img className='h-16 sm:h-16 w-auto ' src={Logo} alt="" /> 
                </div>
                <div className='flex flex-col justify-centre pr-5 pt-2 sm:hidden'>
                    <button onClick={()=> setNavdrop(!navdrop)} type='button' className='bg-white rounded-lg'>
                            <img className={navdrop ? 'h-8 block sm-block'  : 'hidden' } src="https://www.svgrepo.com/show/485656/cancel2.svg" alt="=" />            
                            <img className={!navdrop ? 'h-8 block sm-blck'  : 'hidden'} src={hamIcon} alt="+" />     
                    </button>  
                </div>    
            </div>
        </div>
        <div className=' sm:mt-5'>
            <div className = {`${navdrop ? 'px-4 pb-2 block w-full bg-[black]  sm:-full  sm:flex sm:pr-10 sm:px-0 sm:pb-0' : 'hidden sm:flex sm:block pr-10'}`} >
                {/* <div className='{`${navdrop}?"absolute":""`}'> */}
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp'onClick={()=>{fun('#home'); setNavdrop(!navdrop)}}>Home</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#about'); setNavdrop(!navdrop)}}>About</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#experience'); setNavdrop(!navdrop)}}>Experience</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-black hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#projects'); setNavdrop(!navdrop)}}>Projects</div>
                    {/* <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-black hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#skills'); setNavdrop(!navdrop)}} >Skills</div> */}
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#education'); setNavdrop(!navdrop)}} >Education</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp'onClick={()=>{fun('#contact'); setNavdrop(!navdrop)}}>Contact</div>
                    
                {/* </div> */}
            </div>
           
        </div>
    </div>
  ) 
}

export default navbar
