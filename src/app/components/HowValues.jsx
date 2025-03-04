"use client"
import { motion } from 'framer-motion'
import AnimateUp from './AnimateUp'
import React from 'react'

const HowValues= ({title}) => {
  return (
    <div className="flex items-center">
             

        <motion.svg
  width="30"
  height="16"
  viewBox="0 0 41 26"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <motion.path
    d="M2.5 11L14 22.5L38.5 2.5"
    stroke="#20639B"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  />
</motion.svg>

<AnimateUp>
        <h6 className=" p-2 md:w-[80%]">{title}
        </h6> 
        </AnimateUp>



    </div>
  )
}

export default HowValues
