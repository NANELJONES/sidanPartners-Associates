import React from 'react'
import Layout1 from '../layout/Layout1'
import { tip } from '../Data/Data'

const page = () => {
  return (
    <div className='bg-primary_color py-8'>
    
      <Layout1>
      <h1 className='text-white big_text'>Learn From Our Tips</h1>
      <br/>
      <h5 className='text-white'>Get the most interesting of tips from the project and let it be the main thing that you learn</h5>
          <br/>
          <br/>
          <div className='flex flex-col flex-start gap-[3em]'>
          {tip.map((each_tip, index )=>{
                  return  <div key={index} className='flex border-b-2 py-4 md:py-[2em] items-center  gap-6'>  
                    <h3 className='text-regular_text'>{index + 1}</h3> 
                  <h4 className='hidden md:block text-regular_text w-full md:w-2/3'>{each_tip}</h4 >
                  <p className='md:hidden  text-regular_text w-full md:w-2/3'>{each_tip}</p >
            
                  
                  </div>
              })}  
          </div>
      </Layout1>
      
    </div>
  )
}

export default page
