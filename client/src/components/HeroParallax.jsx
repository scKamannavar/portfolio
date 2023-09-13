import React, { useRef } from 'react'
import Naruto from '../assets/naruto.png'
import forest from '../assets/animaeForest.png'
import { useScroll, useTransform, motion } from 'framer-motion'

const HeroParallax = () => {
  console.log('inside Parallax');
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset : ["start start","end start"],
  })
  const bgY = useTransform(scrollYProgress, [0,1], ["0%","20%"])
  const text = useTransform(scrollYProgress, [0,1], ["0%","100%"])
  const naru = useTransform(scrollYProgress, [0,1], ["0%","1%"])

  const stars = useTransform(scrollYProgress, [0,1], ["0%","60%"])
  const moon = useTransform(scrollYProgress, [0,1], ["0%","120%"])
  const mountain1 = useTransform(scrollYProgress, [0,1], ["0%","80%"])
  const mountain2 = useTransform(scrollYProgress, [0,1], ["0%","60%"])
  const grass1 = useTransform(scrollYProgress, [0,1], ["0%","50%"])
  const grass2 = useTransform(scrollYProgress, [0,1], ["0%","40%"])
  const grass3 = useTransform(scrollYProgress, [0,1], ["0%","35%"])
  const grass4 = useTransform(scrollYProgress, [0,1], ["0%","-2%"])
  const cloud = useTransform(scrollYProgress, [0,1], ["1%","0%"])

  console.log('scroll')
  console.log('scroll',scrollYProgress)
  return (
    <div ref={ref} id='home' className='w-[vw] h-[106vh] relative flex flex-col overflow-hidden'>

      <motion.h1 style={{y:text}} className={` font-Outfit font-bold pt-[40%] sm:text-6xl text-4xl z-[5] self-center text-white sm:pt-[10%] sm:justify-center h-screen `}>
        Hello i am Sagar
      </motion.h1>


      {/* <motion.div style={{y:naru}} className=' inset-0 z-20 absolute bg-bottom bg-no-repeat bg-auto  bg-naruto'>
      </motion.div> */}

      
      <motion.div style={{y:stars}} className={`absolute  -mt-[100%]  h-[300%] sm:-mt-[100%] inset-0 z-0 bg-bottom bg-repeat bg-parallaxStars`}>
      </motion.div>

      <motion.div style={{y:moon}} className={`absolute h-full inset-0 z-[1] bg-bottom bg-cover bg-parallaxMoon bg-repeat`}>
      </motion.div>

      <motion.div style={{y:mountain1}} className={`absolute h-full inset-0 z-[2] bg-bottom bg-cover bg-parallaxMountain1`}>
      </motion.div>

      <motion.div style={{y:mountain2}} className={`absolute h-full inset-0 z-[3] bg-bottom bg-cover bg-parallaxMountain2`}>
      </motion.div>

      <motion.div style={{y:grass1}} className={`absolute h-full inset-0 z-[4] bg-bottom bg-cover bg-parallaxGrass1`}>
      </motion.div>

      <motion.div style={{y:grass2}} className={`absolute h-full inset-0 z-[6] bg-bottom bg-cover bg-parallaxGrass2`}>
      </motion.div>

      <motion.div style={{y:grass3}} className={`absolute h-full inset-0 z-[7] bg-bottom bg-cover bg-parallaxGrass3`}>
      </motion.div>

      <motion.div style={{y:grass4}} className={`absolute h-full inset-0 z-[8] bg-bottom bg-cover bg-parallaxGrass4`}>
      </motion.div>

      <motion.div style={{y:cloud}} className={`absolute h-full inset-0 z-[9] bg-bottom bg-cover bg-parallaxCloud`}>
      </motion.div>

    </div>
  )
}

export default HeroParallax
