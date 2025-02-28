"use client"
import React from 'react'
import { AllLines } from './AllLines'
import { Button1,Button3 } from './Buttons'
import { useState } from 'react'
import AnimateUp from './AnimateUp'
import { motion } from 'framer-motion'
const LookingFor = () => {
    const  [active, setActive] = useState( )

    const lookingFor = [
       {
            title: "Innovative Designs",
            icon: "/service icons/innovative_design.svg",
            image: "/Gal.png"
        },
        {
            title: "Seamless Construction and",
            icon: "/service icons/seamless_construction.svg",
            image: "/Gal.png"
        },
        {
            title: "Sustainable Measures ",
            icon: "/service icons/sustainability.svg",
            image: "/Gal.png"
        },
        
    ]
  return (
    <div className='relative flex flex-col gap-4 justify-between bg-[#20496C]/60 bg_blur p-10 md:p-20 h-[95vh]'>
        <h5 className='text-secondary_color text-2xl'>So, if you are looking for </h5>

     
      {active && (
     
      <motion.div
      
      className='absolute w-full left-0 top-0'
      initial ={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
      >
        
        <div className='absolute top-5 right-5 w-fit h-auto p-[1em] '>
       {/* top line */}
       <motion.div
        initial ={{width:0}}
        whileInView={{width:'120%'}}
        transition={{duration:1}}
        
       
       className= "h-[1px] relative top-[-1em] left-[-1em]  w-[120%] mx-auto bg-secondary_color"> </motion.div>
        {/* left */}
        <motion.div 
         initial ={{height:0}}
         whileInView={{height:'300px'}}
         transition={{duration:1}}
        
        className= "w-[1px] absolute left-[0.4em]    h-[300px] top-[-1em] bg-secondary_color"> </motion.div>
      
       <img src={active.image} alt="background" className='w-full h-full max-w-[200px] max-h-[250px] object-cover' />
       {/* bottom line */}
       <motion.div
         initial ={{width:0}}
         whileInView={{width:'120%'}}
         transition={{duration:1}}
       className= "h-[1px] relative top-[1em] left-[-1em]  w-[120%] mx-auto bg-secondary_color"> </motion.div>
             {/* right */}
    <div className= "w-[1px] absolute right-[0.4em]    h-[300px] top-[-1em] bg-secondary_color"> </div>
   </div>
         </motion.div>

      )}
       
    

<div className='md:w-1/2 lg:w-2/3 flex flex-col gap-[1em] w-full self-end '>

{lookingFor.map((item, index) => (
    <div key={index} className='flex gap-4' onMouseEnter={() => setActive(item)} onMouseLeave={() => setActive("")}>
        <img 
            src={item.icon} 
            alt={item.title} 
            className={`w-[30px] max-h-[30px] max-full h-full object-cover filter ${
                active?.title === item?.title ? 'brightness-150 drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]' : ''
            }`}
        />
        <h3 className='text-secondary_color font-[300] '>{item.title}</h3>
    </div>
))}

<h5 className='text-secondary_color font-[300]'  >for your dream project, then you've come to the right place</h5>
<Button3 title ="Get in touch" link_address="/" ></Button3>
</div>



      
    </div>
  )
}

export default LookingFor
