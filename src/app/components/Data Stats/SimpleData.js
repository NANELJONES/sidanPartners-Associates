"use client"
import React from 'react'
import { motion } from 'framer-motion'

const SimpleData = (props) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 40, }}
    whileInView={{ opacity: 1, y: 0,}}
    transition={{ duration: 2, delay:0.4 }}

    className='shawdow-xl flex-grow border bg-primary_color border-primary_color w-[auto] md:w-auto p-6 md:p-8 it flex flex-col items-center md:items-start rounded-[0.5em] text-white'>
        <p className='text-white'>{props.heading}</p>
        <h3 className='text-white'>{props.data}</h3>
    </motion.div>
  )
}

export default SimpleData