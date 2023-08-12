import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.png'
import fun from '../constants/scrollTo';
import skills from './skills';

const navbar = () => {

    const [navdrop, setNavdrop] = useState(false);

    // fun(elementRef)
    // const scrollTOSection = (elementRef) =>{
    //     const section = document.querySelector( elementRef );
    //     section.scrollIntoView( { behavior: 'smooth', block: 'start',inline: "nearest" } );
    //     // elementRef.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    // }
  return (
    <div className=' bg-[#00cdda] w-screen sm:w-full mt-0 fixed sm:flex sm:justify-between sm:pb-6 shadow-lg shadow-black z-10'>
        <div className='mb-0 sm:mb-2 h-20 sm:h-8 pt-1 sm:pt-0'>
            <div className='flex items-center justify-between '>
                <div className='px-4 sm:pt-1 sm:pl-10'>
                    <img className='h-16 sm:h-16 w-auto ' src={Logo} alt="" /> 
                </div>
                <div className='flex flex-col justify-centre pr-5 pt-0 sm:hidden'>
                    <button onClick={()=> setNavdrop(!navdrop)} type='button'>
                            <img className={navdrop ? 'h-10 block sm-block'  : 'hidden' } src="https://www.svgrepo.com/show/485656/cancel2.svg" alt="=" />            
                            <img className={!navdrop ? 'h-10 block sm-blck'  : 'hidden'} src="https://www.svgrepo.com/show/525355/hamburger-menu.svg" alt="+" />     
                    </button>  
                </div>    
            </div>
        </div>
        <div className=' sm:mt-5'>
            <div className = {navdrop ? ' px-4 pb-2 block  sm:-full      w-full bg-[#00cdda] sm:bg-[#00cdda] sm:flex sm:pr-10 sm:px-0 sm:pb-0' : 'hidden sm:flex sm:block pr-10'} >
                {/* <div className='{`${navdrop}?"absolute":""`}'> */}
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] flex justify-center'onClick={()=>{fun('#home'); setNavdrop(!navdrop)}}>Home</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] flex justify-center' onClick={()=>{fun('#about'); setNavdrop(!navdrop)}}>About</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] flex justify-center' onClick={()=>{fun('#projects'); setNavdrop(!navdrop)}}>Projects</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] flex justify-center' onClick={()=>{fun('#skills'); setNavdrop(!navdrop)}} >Skills</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#00cdda] flex justify-center'onClick={()=>{fun('#contact'); setNavdrop(!navdrop)}}>Contact</div>
                {/* </div> */}
            </div>
        </div>
    </div>
  ) 
}

export default navbar
