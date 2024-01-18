import React from 'react'
import Github from '../assets/icons/github.svg'
import Link from '../assets/icons/link.svg'

const ProjectsMinimalSingle = (props) => {
    // console.table('Projects', props.project)
    const {name, image, description, gitLink,appLink,technologies} = props.project
  return (
    <div className='flex flex-col md:flex-row w-full h-full border-[1px] overflow-hidden border-slate-400 rounded-xl font-Outfit group/ih '>
      <div className='flex flex-0 w-full md:w-[30%] overflow-hidden'>
        <img className='group-hover/ih:scale-105 duration-200' src={image} alt="" />
      </div>
      <div className='flex flex-col flex-1 p-2'>
        <div className="flex py-2 pr-4">
            <div className='flex-1 text-2xl'>
              {name} 
            </div>
            <div className=''>
            <div className='flex gap-2'> 
                {gitLink&&
                <a href={gitLink}  target=''> 
                  <div className='flex justify-center text-white items-center w-8 h-8 bg-black p-2 rounded-full bg-opacity-70 hover:bg-opacity-90 cursor-pointer shadow-md'>
                    <img src={Github} alt="" />
                  </div>
                </a>
                }           
                
                {appLink &&
                <a href={appLink}>
                  <div className='flex justify-center text-white items-center w-8 h-8 bg-black p-2 rounded-full bg-opacity-60 hover:bg-opacity-90 cursor-pointer'>
                    <img className='' src={Link} alt="" />
                  </div>
                </a>
                }
                
              </div>
            </div>
        </div>
        <div className="flex flex-1 font-extralight text-slate-700">{description}</div>
        <div className="flex text-white">
          {technologies.map((tech)=>{
            return  <div className='bg-slate-700 rounded-md p-1 m-1 text-sm'>{tech}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectsMinimalSingle
