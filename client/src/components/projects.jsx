import React from 'react'
import Card from './card'
const projects = () => {
  return (
    <div className='flex flex-col sm:flex-row h-full justify-center'>
        <div className='flex justify-center m-2 p-2'> <Card/></div>
        <div className='flex justify-center m-2 p-2'><Card/></div>
        <div className='flex justify-center m-2 p-2'><Card/></div>
    </div>
  )
}

export default projects
