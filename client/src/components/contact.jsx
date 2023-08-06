import React from 'react'

const contact = () => {
  return (
    <div className='bg-black'>
         
        <form className='flex flex-col h-full rounded overflow-hidden shadow-xl m-4 p-2'>

            <div className='flex flex-col sm:flex-row'>
                <div className='flex flex-1 justify-center flex-col p-2'>
                    
                    <input className='border-2 border-slate-700 h-10 rounded-lg p-2 my-2 text-grey-darkest' type="text" name="userName" placeholder='Name' id="" />
                    <input className='border-2 border-slate-700 h-10 rounded-lg p-2 my-2' type="text" name="userEmail" placeholder='Email' id="" />
                </div>
                <div className='flex flex-1 justify-center p-2'>
                    
                    <textarea className='border-2 border-slate-700 w-full p-2 rounded-lg h-24 my-2'  name="userMessage" placeholder='Message' id="" cols="" rows=""></textarea>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'type="button">Submit</button>
            </div>

        </form>

    </div>
  )
}

export default contact
