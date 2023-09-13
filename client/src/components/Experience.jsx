import React from 'react'

const Experience = () => {
  return (
    <div id='experience'>
        <div className='flex text-4xl text-slate-800 pt-20 justify-center font-Outfit'>
            <h1>Experience</h1>
        </div>
        <div className='flex h-full  justify-center pl-6 md:p-10 md:pl-24 font-Outfit'>
            <div className='flex flex-col w-full  h-fit md:w-[60%] md:h-fit items-start  border-l-2 border-blue-500 p-6 md:p-10 relative'>
                {/* Saperate experience block */}
                <div className='mb-6'>
                    <div className='md:-ml-[160px] md:absolute'>
                        [2020-2022]
                    </div>
                    <div className='bg-blue-500 w-4 h-4 rounded-full mt-1 -ml-[34px] md:-ml-[49px] z-20 absolute'>

                    </div>
                    <div className='bg-white w-6 h-6 rounded-full  -ml-[53px] z-10 absolute'>

                    </div>
                    <div className='flex flex-col text-sm md:text-md  w-full justify-start p-4 pl-6 border-[2px] border-blue-400 shadow-lg shadow-blue-300 hover:shadow-xl hover:shadow-blue-300 rounded-md'>
                                <h1 className='text-lg font-bold'>Freelanceing</h1>
                                <ul className='list-disc'>
                                    <li > Collaborated on the design and structure of the database, using SQL normalization techniques for optimal organization.</li>
                                    <li>Written and executed SQL queries to fetch and display data on the front end, incorporating sorting and filtering capabilities.</li>
                                    {/* <li>Incorporated the TinyMCE rich text editor into the dashboard of the Blog website, enhancing content creation and editing capabilities,  leading to increased user engagement.</li> */}
                                    <li>worked on website projects ranging from e-commerce to news and education.</li>
                                    <li>Played a pivotal role in content curation for marketing and contributed to the design of brochures.</li>
                                    <li>Crafted eye-catching banners and website images on Canva, enhancing the visual appeal of the websites.</li>
                                </ul> 
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default Experience
