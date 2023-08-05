import React from 'react'
import { useState } from 'react'

const navbar = () => {

    const [navdrop, setNavdrop] = useState(false);
  return (
    <div className=' bg-slate-400 sm:flex sm:justify-between sm:py-5'>
        <div className='mb-2 h-20 sm:h-8 pt-5 sm:pt-0'>
            <div className='flex items-center justify-between '>
                <div className='px-4 '>
                    <img className='h-10 w-auto' src="https://upload.wikimedia.org/wikipedia/commons/5/52/Logo_de_Free.png" alt="" /> 
                </div>
                <div className='flex flex-col justify-centre px-3 pt-0 sm:hidden'>
                    <button onClick={()=> setNavdrop(!navdrop)} type='button'>
                            <img className={navdrop ? 'h-10 block'  : 'hidden'} src="https://www.svgrepo.com/show/485656/cancel2.svg" alt="" />            
                            <img className={!navdrop ? 'h-10 block'  : 'hidden'} src="https://www.svgrepo.com/show/525355/hamburger-menu.svg" alt="" />     
                    </button>  
                </div>    
            </div>
        </div>
        <div className = {navdrop ? 'px-4 pb-2 block ' : 'hidden  sm:flex pr-5'} >
            <div className='text-white hover:bg-slate-600 rounded px-2 py-1 '>Skills</div>
            <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0'>Projects</div>
            <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0'>Contact</div>
            <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0'>Home</div>
        </div>
    </div>
  )
}

export default navbar
