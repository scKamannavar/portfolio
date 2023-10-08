import React from 'react'
import ProjectsMinimalSingle from './ProjectsMinimalSingle'
import projectsData from '../data/projects'


const ProjectsMinimal = () => {
  const projectsString = 'Projects : '
  return (
    <div className='flex flex-col items-center gap-4 pb-[30vh] px-8'>
        <h1 className='fles self-start font-Outfit text-2xl'>{projectsString}</h1>
        {projectsData.map((project, index) => (
      <ProjectsMinimalSingle project={project} ></ProjectsMinimalSingle>
        ))}
    </div>
  )
}

export default ProjectsMinimal
