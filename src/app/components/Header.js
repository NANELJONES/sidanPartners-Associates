"use client"
import React from 'react'
import Layout1 from '../layout/Layout1'
import SimpleData from './Data Stats/SimpleData'
import { motion } from 'framer-motion'
import Link from 'next/link'
import DesignToConstructionVisualizer from './DesignToConstructionVisualizer'



const Header = () => {
  return (
  <div className='    max-h-[800px]   flex flex-col justify-between  relative  h-auto min-h-[90vh] md:h-[90vh] gap-10    '>
  {/* <AllLines ></AllLines> */}

  <motion.div 
                    initial={{ opacity: 0, y: 40, }}
    whileInView={{ opacity: 1, y: 0,}}
    transition={{ duration: 2, delay:0.2 }}
                    className='w-full p-[2em]   '>
                                    <h4 className='text-white'>Welcome to</h4>
                                <h1 className='text-white  md:text-[5em]'>Sidan Associates <br/>
                                & Partners</h1>
                                
                      
                    </motion.div>


  <div className='  text-white w-[100%]  bg_blur shadow-md     '>


                    <motion.div 
                    initial={{ opacity: 0, y: 40, }}
    whileInView={{ opacity: 1, y: 0,}}
    transition={{ duration: 2, delay:0.2 }}
                    className='w-full p-[2em]  md:w-1/2     '>
                              
                                
                                <h6 className='text-primary_color_light max-w-[250px]'>{'We are a renowned company that specializes in :'}</h6>
                           <DesignToConstructionVisualizer></DesignToConstructionVisualizer>
                           
                            <br/>
                               <Link href={"/contactUs"}> <motion.button 
                               initial={{ opacity: 0, x: -40, }}
                               whileInView={{ opacity: 1, x: 0,}}
                               transition={{ duration: 2, delay:0.5 }}
                               
                               className='flex min-w-[200px] p-2 md:w-1/3 lg:w-1/2 xl:w-1/3 justify-around items-center gap-2'>Get In Touch With Us  <img src="/circle_arrow.svg" className='w-[30px] h-[30px]'></img></motion.button></Link>
                    </motion.div>

                 

 </div>



        {/* nice */}
{/* 
        <div className='w-full mt-2 md:mt-0 h-[10em]  md:w-[10em] md:h-[8em]  lg:w-[11em] lg:h-[11em] text-primary_color    p-[1em] justify-around flex flex-col items-center bg-third_gradient rounded-[20px]  md:absolute md:top-[6vw]  md:right-[5vw]'>
                    
                  
                    <h6 className='nice_text font-[300] hidden  md:block'> Building Excellence: Your Trusted Partner in Construction Consulting</h6>
                    <h5 className=' font-[300] md:hidden'>We Offer Outstanding Consulting Services And Precise Cost Engineering Solutions, Ensuring Your Success Through Comprehensive Civil Consulting And Meticulous Project Cost Management.</h5>
                    
                  <div className='flex flex-row  items-center justify-between w-full '>
                      <img src="/Geng.png" className='h-[2em] md:- lg:h-[2em] '></img>
                        <img src="/circle_arrow.svg" className='h-[1.5em]'></img>
                        
                   </div> 
        </div> */}







  </div>
   
  )
}

export default Header