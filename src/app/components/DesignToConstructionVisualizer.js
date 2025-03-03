"use client"
import React from 'react'
import { AllLines } from './AllLines'
import LineTo from 'react-lineto'
import Walls from './Walls'

const DesignToConstructionVisualizer = () => {
  return (
    <div className='flex flex-col  items-start  md:flex-row md:items-center gap-[1em]' >
        {/* design */}
            <div className=' flex   items-center gap-[1em]'>
            <h1 className='hidden md:block text-primary_color_light'>Design</h1>
            <h3 className=' md:hidden block text-primary_color_light'>Design</h3>
      <div className='relative w-auto'>
        <AllLines>  </AllLines>
{/* 
            <img src={"/DesignConcept.svg"}
            className='w-[3em]'
            
            /> */}
        <svg width="49" height="43" viewBox="0 0 49 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="11" height="11" fill="#EAEFEE"/>
        <rect x="0.25" y="0.25" width="48.5" height="42.5" stroke="white" stroke-width="0.5"/>
        <rect x="26" y="2" width="5" height="5" fill="#EAEFEE"/>
        <rect x="34" y="2" width="5" height="5" fill="#EAEFEE"/>
        <rect x="42" y="2" width="5" height="5" fill="#EAEFEE"/>
        <rect x="2" y="30" width="17" height="11" fill="#EAEFEE"/>
        <rect x="36" y="16" width="11" height="25" fill="#EAEFEE"/>
</svg>

      
      </div>
            </div>


            <h1 className='hidden md:block text-primary_color_light'>to</h1>
            <h3 className=' md:hidden block text-primary_color_light'>to</h3>
          



{/* Construcction */}
            <div className=' flex items-center  gap-[1em] '>
            <h1 className='hidden md:block text-primary_color_light'>Construction</h1>
            <h3 className=' md:hidden block text-primary_color_light'>Construction</h3>
          
          
            <div className='scale-[1.5] md:scale-[1]'>
            <Walls></Walls>
            </div>

            </div>
       

            

    </div>
  )
}

export default DesignToConstructionVisualizer
