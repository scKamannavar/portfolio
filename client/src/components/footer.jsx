import React from 'react'
import { SocialIcon } from 'react-social-icons';
// import {ReactLogo} from '../assets/react.svg'    

const footer = () => {
  return (  
    <div>

      <div className='flex flex-col h-full bg-[#a1ccd1]'>
        <div className='flex flex-1 p-10 justify-around border-black border-2'>
            <div>facebook</div>
            <div>      
                Linkdn 
            </div>

            <div>Instagram</div>
            <div>Youtube</div>
        </div>
        <div className='flex flex-1 justify-between border-black border-2'>
            <div>Home</div>
            <div>About</div>
            <div>Project</div>
            <div>Contact</div>
        </div>
      </div>

    </div>
  )
}

export default footer
