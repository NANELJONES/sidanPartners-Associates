"use client"
import React from 'react'
import Layout1 from '../layout/Layout1'
import { HeadersCollection7 } from '../components/AllHeaders/HeadersCollection'
import AvailablePositions from '../components/AvailablePositions'
import AnimateUp from '../components/AnimateUp'
import VolunteerPosition from '../components/VolunteerPosition'

const page = () => {
  return (
    <div className='bg-secondary_color'>
      <Layout1>
        <HeadersCollection7 heading="Careers"  second_heading='' sub_heading="" text="Gain insights from industry trends, eco-friendly innovations, and expert tips on design and
construction."></HeadersCollection7>


<div className='flex gap-[6em]  mt-[2em] md:mt-[6em] '>
    <div className='hidden md:block w-[25%]'> 
     <AnimateUp> <img className='w-full' src='/imageries/file_application.svg'/> </AnimateUp>
    </div>

    <div className='w-full md:w-[70%]'>
    <AvailablePositions></AvailablePositions>
    </div>

</div>
    
   


      </Layout1>
   

    </div>
  )
}

export default page