import React from 'react'
import ProjectsMinimalSingle from './ProjectsMinimalSingle'
import projectsData from '../data/projects'


const ProjectsMinimal = () => {
  const projectsString = 'Projects : '
  return (
    <div className='flex flex-col items-center gap-4 pb-[30vh] px-8'>
        <h1 className='fles self-start font-Outfit text-2xl'> Client Projects</h1>
        {projectsData
        .filter((project) => project.for === 'client')
        .map((project, index) => (
            <ProjectsMinimalSingle project={project} key={index} />
        ))}
        <h1 className='fles self-start font-Outfit text-2xl pt-4'> Personal Projects</h1>
        {projectsData
        .filter((project) => project.for === 'personal')
        .map((project, index) => (
            <ProjectsMinimalSingle project={project} key={index} />
        ))}
    </div>
  )
}

export default ProjectsMinimal
