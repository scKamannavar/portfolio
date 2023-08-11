import React from 'react'
import Card from './card'
import projectsData from '../data/projects'
const projects = () => {

  return (  
      <div className=' flex flex-col  h-full sm:h-screen justify-around py-20 bg-gray-200' id='projects'>
          <div className='flex text-4xl justify-center font-Outfit'>
              <h1>My Projects</h1>
          </div>
          <div className='flex flex-col sm:flex-row h-full sm:h-screen justify-around'>
            {projectsData.map((project) => (
              <div className='flex justify-center m-2 p-2'>
                <Card 
                    {...project}
                    // name = {project.name} description = {project.description} status = {project.status}
                  />   
              </div>
            ))}
            </div>
      </div> 
  )
}

export default projects


