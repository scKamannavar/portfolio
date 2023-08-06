import React from 'react'

const skills = () => {
  return (
    <div>

    <div className='flex flex-col'>
        <div className='flex flex-1 justify-around px-6'>
            <div className='flex h-40 items-center'>HTML</div>
            <div className='flex h-40 items-center'>CSS</div>
            <div className='flex h-40 items-center'>JS</div>
        </div>
        <div  className='flex flex-1 justify-around px-6'>
            <div className='flex h-40 items-center'>React</div>
            <div className='flex h-40 items-center'>Node</div>
            <div className='flex h-40 items-center'>Git</div>
        </div>
    </div>

    </div>
  )
}

export default skills
