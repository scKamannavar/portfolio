import React from 'react'

const card = ({name, description, status}) => {
  return (
    <div>
      
      <div className='flex flex-col justify-center max-h-xl max-w-xs rounded-xl overflow-hidden bg-white shadow-lg shadow-black p-2 hover:-translate-y-2 duration-300 hover:scale-105 transition duration-700 ease-in-out'>
        <div>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className='text-2xl font-bold font-Outfit flex justify-center'>
          {name}
        </div>
        <div className='flex justify-center font-Outfit p-2 text-center'>
            <p>{description}</p>
        </div>
        <div className='flex justify-center text-white font-Outfit'>
            <div className='bg-slate-500 rounded-md p-1 m-1'>Html</div>
            <div className='bg-slate-500 rounded-md p-1 m-1'>Css</div>
            <div className='bg-slate-500 rounded-md p-1 m-1'>Js</div>
        </div>
        <div className='text-blue-300 flex justify-center font-Outfit'>
         {status} <span className={` animate-pulse bg-green-600 w-3 h-3 ml-2 mt-2 relative rounded-full`}></span>
    
        </div>
      </div>

    </div>
  )
}

export default card
