import React from 'react'
import { motion } from "framer-motion"
const ComingSoon = () => {
  return (
    <div className='flex h-full justify-center pt-20'>
      <div className='p-10 text-xl font-Outfit'>
        Will be posting Soon...
        <motion.div
            className=''
            drag
            dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
            }}
        />
      </div>
    </div>
  )
}

export default ComingSoon
