"use client"
import React from 'react'

const IconComponent = ({img_src, info}) => {
  return (
    <div className='flex gap-4 items-center'>
        <img src={img_src} alt="icon" className="w-4 h-4" />
        <p>{info}</p>     
    </div>
  )
}

const IconComponent1 = ({img_src, info}) => {
    return (
      <div className='flex gap-4 items-center'>
         <div className='bg-white rounded-4 p-2 rounded-lg shadow-md'> <img src={img_src} alt="icon" className="w-8 " /></div>
          <h5 className='w-full text-white'>{info}</h5>     
      </div>
    )
  }
  



export  {IconComponent, IconComponent1}
