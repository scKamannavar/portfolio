import React from 'react'
import avatar from '../assets/avatar.svg'

const hero = () => {
  return (
    <div>
       <div className=" flex flex-col sm:flex-row-reverse w-fill h-screen text-white">
            <div className='border-2 border-black flex-1'>
                    <div className='flex h-full justify-center items-center'>
                            <div><img className='w-auto h-80' src='https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-teenage-girl-with-rain-gear_183364-80088.jpg?w=360&t=st=1691307544~exp=1691308144~hmac=107ec698aa8cb759d433129edf1be3d65079904f438bf3fb6890042bfb55aac2' alt="Avata" /></div>
                    </div>
            </div>
            <div  className='flex flex-col px-4 border-2 border-black flex-1 justify-center items-center'>
                    <div className='flex-1 text-black flex justify-center items-center'>
                        <h1 className='font-bold text-4xl text-center'>Hi! <br/> i am Sagar</h1>                   
                    </div>
                    <div className='flex-1 text-black flex justify-center items-center'>
                        <div className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, asperiores aspernatur omnis sit modi voluptates placeat sunt repellendus explicabo iure ipsam perspiciatis rerum sequi distinctio.
                        </div>
                    </div>
                    <div className='flex-1 text-black flex justify-center items-center'>Button </div>
            </div>
       </div>         
    </div>
  )
}

export default (hero)

// style={{
    // background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"}}