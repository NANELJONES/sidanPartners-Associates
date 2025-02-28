"use client"

import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Layout1 from '../layout/Layout1';
import { AllLines } from './AllLines';
import {Swiper, SwiperSlide} from 'swiper';
import SimpleData from './Data Stats/SimpleData';



const Intro = () => {
  return (
    <div className='relative'>
    <AllLines></AllLines>
    
    <div className='w-full p-4 gap-[2em]  h-auto md:min-h-[80vh] flex flex-col justify-between max-h-[900px]  p-[3em] '>
    
    <h1  className='md:w-1/2 text-text_color'>Building the Future <br/> for Today! </h1>

    <div className='md:w-1/2 self-start md:self-end'>
    
    <h5 className='text-text_color'> Transform your ideas into stunning, sustainable realities with Ghana's leading design-to-construction company. At Sidan, we either meet your expectations or go beyond them. Either way, we stay committed to every project we undertake and deliver quality.
    </h5>
    </div>
    




</div>
    </div>

  )
}

export default Intro