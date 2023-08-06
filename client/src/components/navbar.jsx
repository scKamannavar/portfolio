import React from 'react'
import { useState } from 'react'

const navbar = () => {

    const [navdrop, setNavdrop] = useState(false);
  return (
    <div className=' bg-[#a1ccd1] w-screen sm:w-full sm:flex sm:justify-between sm:py-5 border-2 border-black '>
        <div className='mb-0 sm:mb-2 h-20 sm:h-8 pt-5 sm:pt-0'>
            <div className='flex items-center justify-between '>
                <div className='px-4 '>
                    <img className='h-10 w-auto' src="https://upload.wikimedia.org/wikipedia/commons/5/52/Logo_de_Free.png" alt="" /> 
                </div>
                <div className='flex flex-col justify-centre pr-5 pt-0 sm:hidden'>
                    <button onClick={()=> setNavdrop(!navdrop)} type='button'>
                            <img className={navdrop ? 'h-10 block'  : 'hidden'} src="https://www.svgrepo.com/show/485656/cancel2.svg" alt="" />            
                            <img className={!navdrop ? 'h-10 block'  : 'hidden'} src="https://www.svgrepo.com/show/525355/hamburger-menu.svg" alt="" />     
                    </button>  
                </div>    
            </div>
        </div>
        <div className='border-2 border-black '>
            <div className = {navdrop ? ' px-4 pb-2 block absolute w-full bg-[#a1ccd1]' : 'hidden sm:flex pr-10'} >
                {/* <div className='{`${navdrop}?"absolute":""`}'> */}
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#a1ccd1]'>Home</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#a1ccd1] flex justify-center'>Projects</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#a1ccd1]'>Sklls</div>
                    <div className='text-white hover:bg-slate-600 rounded px-2 py-1 mt-1 sm:mt-0 sm:pr-6 sm:hover:text-purple-700 sm:hover:bg-[#a1ccd1]'>Contact</div>
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default navbar
