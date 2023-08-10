import React from 'react'
import Card from './card'
const projects = () => {
  return (
    <div className=' flex flex-col sm:flex-row h-full sm:h-screen justify-around py-20 bg-gray-200' id='projects'>
        <div className='flex justify-center m-2 p-2'> <Card/></div>
        <div className='flex justify-center m-2 p-2'><Card/></div>
        <div className='flex justify-center m-2 p-2'><Card/></div>
        <div className='flex justify-center m-2 p-2'><Card/></div>
    </div>
  )
}

export default projects
