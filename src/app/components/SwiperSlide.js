"use client"
import React from 'react'
import { useState } from 'react'
const SwiperSlide = () => {

    const data  = [1,3,4,5,6,678,9,9,0,4,6]
    const [currentIndex, setCurrentIndex] = useState(0);
// Handles going to the next slide
const handleNext = () => {
    // setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Handles going to the previous slide
  const handlePrev = () => {
    // setCurrentIndex((prevIndex) =>
    //   prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    // );
  };

  return (
    <div className='relative'>
       

   
    <div className=' example swiper_container flex items-start gap-[1em] overflow-x-scroll'>
        {data.map((each, index)=>{
            return <div key ={index} className='w-[20em] shrink-0 bg-secondary_color h-[20em]' > </div>
        })}

        
        

    </div>
    <button className='prev_button ' onClick={()=>{handlePrev()}}>{`<`}</button>
    <button className='next_button 'onClick={()=>{handleNext()}}>{`>`}</button>
    <div className='list'>
    {data.map((eac,index)=>{
            return < div key={eac} className='list_item'> </div>
        })}
    
    </div>
    </div>
  )
}

export default SwiperSlide