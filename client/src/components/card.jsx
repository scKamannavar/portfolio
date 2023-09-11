import React from 'react'
import {motion} from 'framer-motion'
import Github from '../assets/icons/github.svg'
import Link from '../assets/icons/link.svg'

const card = ({name, description, status, technologies, appLink, gitLink, image}) => {
let statuscolor = 'bg-orange-600 animate-pulse ' // Work in progress
if(status === 'Completed') {statuscolor = 'bg-green-600'}
if(status === 'Yet to start') {statuscolor = 'bg-gray-500'}

  return (
    <motion.div
  >     
      <div className='flex flex-col relative w-[300px]  h-[450px] max-w-xs rounded-t-2xl overflow-hidden bg-white hover:bg-blue-200 shadow-lg shadow-slate-400 hover:shadow-slate-400 hover:shadow-2xl hover:scale-105 transition ease-in-out'>
     
            
            <div className='h-[200px]'>
              <img className='h-full'  src={image} alt="" />
            </div>
            <div className='flex absolute p-4 gap-2'>
              
              <a href={gitLink}  target=''> 
                <div className='flex justify-center text-white items-center w-8 h-8 bg-black p-2 rounded-full bg-opacity-70 hover:bg-opacity-90 cursor-pointer shadow-md'>
                  <img src={Github} alt="" />
                </div>
              </a>
              <a href={appLink}>
                <div className='flex justify-center text-white items-center w-8 h-8 bg-black p-2 rounded-full bg-opacity-60 hover:bg-opacity-90 cursor-pointer'>
                  <img className='' src={Link} alt="" />
                </div>
              </a>
              
            </div>
        <div className='relative'>
          <div className='text-2xl font-bold font-Outfit flex justify-center'>
            {name}
          </div>
          <div className='flex justify-center font-Outfit text-gray-500 p-2 text-center z-10'>
              <p>{description}</p>
          </div>
          <div className='flex justify-center flex-wrap text-white font-Outfit z-10'>
                {technologies.map((tech)=>{
                return  <div className='bg-slate-500 rounded-md p-1 m-1 text-sm'>{tech}</div>
                })}
                {/* <div className='bg-slate-500 rounded-md p-1 m-1'>Css</div>
                <div className='bg-slate-500 rounded-md p-1 m-1'>Js</div>  */}
          </div>
          <div className='text-gray-600 flex justify-center font-Outfit z-10'>
          {status} <span className={` ${statuscolor} w-5 h-5 ml-2 mt-1  rounded-full`}></span>
      
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default card
