"use client"
import React from 'react'
import { motion } from 'framer-motion'


const TopHorizontal = ()=>{
    return (

        <motion.div 
        initial={{width:0}}
        whileInView={{width:"100%"}}
        transition={{duration:2}}
        exit={{width:"0%", offset:"-300px"}}
        className=' h-[1px] absolute top-[3em] bg-[rgba(256,256,256,1)]'></motion.div>
      )
}

const BottomHorizontal = ()=>{
    return (

        <motion.div 
        initial={{width:0}}
        whileInView={{width:"100%"}}
        transition={{duration:2}}
        exit={{width:"0%", offset:"-300px"}}
        className=' h-[1px] absolute bottom-[1em] bg-[rgba(256,256,256,1)]'></motion.div>
      )
}


const LeftVertical = ()=>{
    return (

        <motion.div 
        initial={{height:0}}
        whileInView={{height:"100%"}}
        transition={{duration:2}}
     
        className='absolute w-[1px] top-0 left-[1em] bg-[rgba(256,256,256,1)]'></motion.div>
      )
}


const RightVertical = ()=>{
    return (

        <motion.div 
        initial={{height:0}}
        whileInView={{height:"100%"}}
        transition={{duration:2}}
     
        className='absolute w-[1px] top-0 right-[1em] bg-[rgba(256,256,256,1)]'></motion.div>
      )
}


const AllLines = () => {

  return (

<div className='bg-transparent bg-none'>
<TopHorizontal></TopHorizontal>
<LeftVertical></LeftVertical>
<RightVertical></RightVertical>
<BottomHorizontal></BottomHorizontal>
</div>
  )
}




export {TopHorizontal, AllLines,LeftVertical,RightVertical ,BottomHorizontal} 