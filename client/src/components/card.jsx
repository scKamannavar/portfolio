import React from 'react'

const card = () => {
  return (
    <div>
      
      <div className='flex flex-col justify-center max-h-xl max-w-xs rounded overflow-hidden shadow-lg'>
        <div>
            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" alt="" />
        </div>
        <div className='text-2xl flex justify-center'>
            Website for Cartoon
        </div>
        <div className='flex justify-center'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur vitae perspiciatis sit dignissimos sapiente voluptatum molestiae doloribus sequi in?</p>
        </div>
        <div className='flex justify-center text-white'>
            <div className='bg-slate-500 rounded-md p-1 m-1'>Html</div>
            <div className='bg-slate-500 rounded-md p-1 m-1'>Css</div>
            <div className='bg-slate-500 rounded-md p-1 m-1'>Js</div>
        </div>
      </div>

    </div>
  )
}

export default card
