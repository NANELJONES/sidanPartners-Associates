"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Walls = () => {
  return (

       <div className='w-auto   items items-center  gap-[2px] h-full flex flex-col'>
      
            {/* Brick Row 1 */}
            <div className='flex gap-1'>
            <motion.div 
                initial={{ opacity: 0, y: -50, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, delay:0.2 }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -100, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, delay:0.3 }}
                className='brick rotate-12'>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: -55, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, delay:0.6}}
                className='brick rotate-12'>
            </motion.div>
            
            
            </div>
            {/* Brick Row 2 */}
            <div className='ml flex gap-1'>
            <motion.div 
                initial={{ opacity: 0, y:-40, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -45, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 1.6, }}
                className='brick rotate-12'>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: -60, }}
                whileInView={{ opacity: 1, y:0 ,}}
                transition={{ duration: 3, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -60, }}
                whileInView={{ opacity: 1, y:0 ,}}
                transition={{ duration: 3, }}
                className='brick rotate-12'>
            </motion.div>
            
            
                </div>

        {/* Brick Row 3 */}
        <div className='flex gap-1'>
            <motion.div 
                initial={{ opacity: 0, y: -30, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -45, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: -100, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            
            
            </div>
{/* 
            <div className='flex gap-1'>
            <motion.div 
                initial={{ opacity: 0, y:-40, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 2, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -45, }}
                whileInView={{ opacity: 1, y: 0,}}
                transition={{ duration: 1.6, }}
                className='brick rotate-12'>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: -60, }}
                whileInView={{ opacity: 1, y:0 ,}}
                transition={{ duration: 3, }}
                className='brick rotate-12'>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -60, }}
                whileInView={{ opacity: 1, y:0 ,}}
                transition={{ duration: 3, }}
                className='brick rotate-12'>
            </motion.div>
            
            
                </div> */}
    </div>
  )
}

export default Walls
