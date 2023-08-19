import React from 'react'

const card = ({name, description, status, technologies}) => {
let statuscolor = 'bg-orange-600 animate-pulse ' // Work in progress
if(status === 'Completed') {statuscolor = 'bg-green-600'}
if(status === 'Yet to start') {statuscolor = 'bg-gray-500'}

  return (
    <div>     
      <div className='flex flex-col relative h-[500px]  max-w-xs rounded-md overflow-hidden bg-white hover:bg-blue-200 shadow-lg shadow-gray-300 p-2  duration-300 hover:scale-105 transition ease-in-out'>
        <div>
            <img className='rounded-md' src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className='text-2xl font-bold font-Outfit flex justify-center'>
          {name}
        </div>
        <div className='flex justify-center font-Outfit text-gray-500 p-2 text-center'>
            <p>{description}</p>
        </div>
        <div className='flex justify-center flex-wrap text-white font-Outfit'>
              {technologies.map((tech)=>{
              return  <div className='bg-slate-500 rounded-md px-1 m-1'>{tech}</div>
              })}
              {/* <div className='bg-slate-500 rounded-md p-1 m-1'>Css</div>
              <div className='bg-slate-500 rounded-md p-1 m-1'>Js</div>  */}
        </div>
        <div className='text-gray-600 flex justify-center font-Outfit'>
         {status} <span className={` ${statuscolor} w-5 h-5 ml-2 mt-1 relative rounded-full`}></span>
    
        </div>
      </div>

    </div>
  )
}

export default card
