import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'
import fun from '../constants/scrollTo';
import hamIcon from '../assets/icons/ham.svg'


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
    <div className={`${navColor?'md:bg-[#00cdda] shadow-2xl':'md:bg-none'} ${navColorMob?'bg-[#00cdda]':'bg-none'} w-screen md:w-full fixed top-0 md:flex md:justify-between md:pb-6 transition-all duration-1000 ease-in-out z-50`}>
        <div className='mb-0 md:mb-2 h-20 md:h-8 pt-1 md:pt-0'>
            <div className='flex items-center justify-between '>
                <div className='px-4 md:pt-1 md:pl-10'>
                    <img className='h-16 md:h-16 w-auto ' src={Logo} alt="" /> 
                </div>
                <div className='flex flex-col justify-centre pr-5 pt-2 md:hidden'>
                    <button onClick={()=> setNavdrop(!navdrop)} type='button' className='bg-white rounded-lg'>
                            <img className={navdrop ? 'h-8 block sm-block'  : 'hidden' } src="https://www.svgrepo.com/show/485656/cancel2.svg" alt="=" />            
                            <img className={!navdrop ? 'h-8 block sm-blck'  : 'hidden'} src={hamIcon} alt="+" />     
                    </button>  
                </div>    
            </div>
        </div>
        <div className=' md:mt-5'>
            <div className = {`${navdrop ? 'px-4 pb-2 block w-full bg-[#00cdda] md:bg-inherit  md:-full  md:flex md:pr-10 md:px-0 md:pb-0' : 'hidden  md:flex md:block pr-10'}`} >
                {/* <div className='{`${navdrop}?"absolute":""`}'> */}
                    <div className='text-white md:text-xl hover:bg-slate-600 rounded px-2 py-1 md:pr-6 md:hover:text-purple-700 md:hover:bg-transparent hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp'onClick={()=>{fun('#home'); setNavdrop(!navdrop)}}>Home</div>
                    <div className='text-white md:text-xl hover:bg-slate-600 rounded px-2 py-1 mt-1 md:mt-0 md:pr-6 md:hover:text-purple-700 md:hover:bg-transparent hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#about'); setNavdrop(!navdrop)}}>About</div>
                    <div className='text-white md:text-xl hover:bg-slate-600 rounded px-2 py-1 mt-1 md:mt-0 md:pr-6 md:hover:text-purple-700 md:hover:bg-transparent hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#experience'); setNavdrop(!navdrop)}}>Experience</div>
                    <div className='text-white md:text-xl hover:bg-slate-600 rounded px-2 py-1 mt-1 md:mt-0 md:pr-6 md:hover:text-purple-700 md:hover:bg-transparent hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#projects'); setNavdrop(!navdrop)}}>Projects</div>
                    {/* <div className='text-white text-xl hover:bg-slate-600 rounded px-2 py-1 mt-1 md:mt-0 md:pr-6 md:hover:text-purple-700 md:hover:bg-black hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#skills'); setNavdrop(!navdrop)}} >Skills</div> */}
                    <div className='text-white md:text-xl hover:bg-slate-600 rounded px-2 py-1 mt-1 md:mt-0 md:pr-6 md:hover:text-purple-700 md:hover:bg-transparent hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp' onClick={()=>{fun('#education'); setNavdrop(!navdrop)}} >Education</div>
                    <div className='text-white md:text-xl hover:bg-slate-600 rounded px-2 py-1 mt-1 md:mt-0 md:pr-6 md:hover:text-purple-700 md:hover:bg-transparent hover:cursor-pointer flex justify-center animate__animated animate__fadeInUp'onClick={()=>{fun('#contact'); setNavdrop(!navdrop)}}>Contact</div>
                    
                {/* </div> */}
            </div>
           
        </div>
    </div>
  ) 
}

export default navbar
