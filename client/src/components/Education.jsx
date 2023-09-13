import React from 'react'

const Education = () => {
  return (
    <div id='education'>
    <div className='flex text-4xl text-slate-800 pt-20 justify-center font-Outfit'>
        <h1>Education</h1>
    </div>
    <div className='flex h-full  justify-center p-10 md:pl-32  font-Outfit'>
        <div className='flex flex-col w-full  h-fit md:w-[60%] md:h-fit items-start  border-l-2 border-blue-500 p-10 relative'>
            {/* Saperate experience block */}
            <div className='mb-6 w-full'>
                <div className='md:-ml-[160px] md:absolute'>
                    [2015-2020]
                </div>
                <div className='bg-blue-500 w-4 h-4 rounded-full mt-1 -ml-[49px] z-20 absolute'>

                </div>
                <div className='bg-white w-6 h-6 rounded-full  -ml-[53px] z-10 absolute'>

                </div>
                <div className='flex flex-col  w-full justify-start p-4 border-[2px] border-blue-400 shadow-lg shadow-blue-300 hover:shadow-xl hover:shadow-blue-300 rounded-md'>
                            <h1 className='font-bold text-xl'>Bachelor’s of Engineering in Computer Science</h1>
                            <h1 className=''>Jain College of Engineering, Belagavi</h1>
                </div>
            </div>

            <div className='mb-6 w-full'>
                <div className='md:-ml-[160px] md:absolute'>
                    [2013-2015]
                </div>
                <div className='bg-blue-500 w-4 h-4 rounded-full mt-1 -ml-[49px] z-20 absolute'>

                </div>
                <div className='bg-white w-6 h-6 rounded-full  -ml-[53px] z-10 absolute'>

                </div>
                <div className='flex flex-col  w-full justify-start p-4 border-[2px] border-blue-400 shadow-lg shadow-blue-300 hover:shadow-xl hover:shadow-blue-300 rounded-md'>
                            <h1 className='text-lg font-bold'>Pre University College</h1>
                            <h1>Vision PU College, Bengaluru</h1>
                            
                </div>
            </div> 
             <div className='mb-6 w-full'>
                <div className='md:-ml-[160px] md:absolute'>
                    [2002-2013]
                </div>
                <div className='bg-blue-500 w-4 h-4 rounded-full mt-1 -ml-[49px] z-20 absolute'>

                </div>
                <div className='bg-white w-6 h-6 rounded-full  -ml-[53px] z-10 absolute'>

                </div>
                <div className='flex flex-col  w-full justify-start p-4 border-[2px] border-blue-400 shadow-lg shadow-blue-300 hover:shadow-xl hover:shadow-blue-300 rounded-md'>
                            <h1 className='text-lg font-bold'>High School</h1>
                            <h1>Precious Blossoms High School, Belagavi</h1>   
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Education
