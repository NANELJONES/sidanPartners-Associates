import React from 'react'

import Image from 'next/image'
const ChangeMakers = () => {
  return (
    <div className='w-full normal_div py-[3em]'>
    <div className='flex flex-col gap-8 '>
      <h1 className='text-white'>Join Our <br/> Team of Changemakers!</h1>
      <div>
        <p  className='text-white'>
          Volunteer with us and make a real impact in the fight against plastic pollution.
          <br />
          <br />
          Together, we can create a cleaner, greener future!
        </p>
        <button className='hidden bg-primary_color md:block mt-2 border-primary_color bg-none w-full max-w-[200px] text-primary-color rounded-2'>
          <p className='text-white'>Contribute To The Cause</p>
        </button>
      </div>
    </div>
  
    <br />
  
    <div className='relative w-full h-[70vw] md:h-[70vh]'>
      <Image fill className='cover' src={"/Join Our Team.svg"} />
    </div>
  
    <button className='md:hidden bg-primary_color md:block mt-2 border-primary_color bg-none w-full max-w-[200px] text-primary-color rounded-2'>
          <p className='text-white'>Join Our The Cause</p>
        </button>
  
  </div>
  
  )
}

export default ChangeMakers