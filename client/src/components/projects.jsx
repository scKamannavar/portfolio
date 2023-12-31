import React from 'react'
import Card from './card'
import projectsData from '../data/projects'
const projects = () => {

  return (  
      <div className=' flex flex-col  h-full sm:h-full  justify-around py-20 bg-slate-200' id='projects'>
          <div className='flex text-4xl justify-center font-Outfit'>
              <h1>Projects</h1>
          </div>
          <div className='flex flex-col sm:flex-wrap sm:flex-row h-full sm:h-full justify-center sm:px-9 pt-10'>
            {projectsData.map((project, index) => (
              <div className={`flex justify-center m-2 p-2 animate__animated animate__fadeInUp animate__delay-${index}s animate__fast`}>
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


