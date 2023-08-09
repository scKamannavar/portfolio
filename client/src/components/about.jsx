import React from 'react'

const about = () => {
  return (
    <div id='about'>
 
        <div className='flex flex-col pt-20 sm:h-screen'>
            <div className='flex  flex-2 justify-center'>
                    <img className='h-40' src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1691321727~exp=1691322327~hmac=a232d3d2a58ddfdde15bf151817cf1cd6a70d2752dec0cc715a9c6952248dd30" alt="" />
            </div>
            <div className='flex  flex-1 justify-center text-center px-10 sm:px-20'>
                   <div className='font-Outfit text-lg flex flex-col sm:flex-row py-6 gap-8'>
                    <div className='flex-1 text-left bg-slate-100  p-4'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde, consequatur libero vel ducimus dolore rem vitae explicabo esse tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit iure accusamus itaque reprehenderit earum, tempore quam maxime a consectetur nobis.</p>
                    </div>
                    <div className='flex-1 text-left bg-slate-100 shadow-md p-2'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde, consequatur libero vel ducimus dolore rem vitae explicabo esse tempora.</p>
                    </div>
                   </div>
            </div>
        </div>
            
    </div>
  )
}

export default about
