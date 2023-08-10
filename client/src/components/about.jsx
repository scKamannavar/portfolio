import React from 'react'

const about = () => {
  return (
    <div id='about'>
 
        <div className='flex flex-col pt-20 sm:h-screen'>
            <div className='flex  flex-2 justify-center hidden'>
                    <img className='h-40' src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1691321727~exp=1691322327~hmac=a232d3d2a58ddfdde15bf151817cf1cd6a70d2752dec0cc715a9c6952248dd30" alt="" />
            </div>
            <div className='flex  flex-1 justify-center text-center px-4 sm:px-10'>
                   <div className='font-Outfit text:md sm:text-lg flex flex-col sm:flex-row'>
                    <div className='flex-1 text-left bg-slate-100  p-4'>
                      <p className='p-2'>Hello, I'm Sagar cK, an aspiring web developer with a Bachelor of Engineering in Computer Science.. My web development journey started in my college days with the fundamentals. This led me in Collaborating with seniors on Freelancing Projects which eventually led me to get my first paid gig. and I'm currently on a path of mastering various frameworks and advanced topics.</p>
                      <p className='p-2'>While I'm yet to showcase completed projects, my passion lies in crafting captivating web experiences. With a solid foundation in web technologies and a focus on React and Node.js, I'm eagerly gearing up to transform ideas into functional projects.</p>
                      <p className='p-2'>I embrace a constant learning mindset. The dynamic nature of web development motivates me to stay updated with the latest trends and technologies. I believe that every line of code I write contributes to my growth.</p>
                      <p className='p-2'>Being more on the reserved side and finding comfort in quieter moments, I'm excited to break out of my shell and immerse myself in a system that surrounds me with fun, motivated individuals. I eagerly look forward to engaging with fellow developers, sharing insights, and learning from diverse perspectives.</p>
                    </div>
                   <div className='flex-1 text-left bg-slate-100 shadow-md p-2 hidden'>
                     
                    </div>
                   </div>
            </div>
        </div>
            
    </div>
  )
}

export default about
