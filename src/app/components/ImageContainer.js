"use client"
import React from 'react'
import Image from 'next/image'

const ImageContainer = ({source}) => {
  return (
    <div  className='relative `w-[13em] relative  rounded-2xl  h-[16em] md:h-[45em] lg:w-[20em] max-w-[300px] max-h-[350px] '  >
        <Image
        src={source}
        fill
        className='cover'
        ></Image>

    </div>
  )
}

const ImageContainer2 = ({source}) => {
  return (
    <div  className='relative `w-[13em] relative  rounded-2xl  h-[16em] md:h-[45em] lg:w-[20em] max-w-[200px] max-h-[250px] '  >
        <Image
        src={source}
        fill
        className='cover'
        ></Image>

    </div>
  )
}


export  {ImageContainer, ImageContainer2}