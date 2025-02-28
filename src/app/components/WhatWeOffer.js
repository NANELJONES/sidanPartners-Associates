import React from 'react'
import Image from 'next/image'

const WhatWeOffer = () => {

  const services = [
    {
      name: "Design-to-Construction Services",
      gif: ["/Services_Gif/0220.gif","/Gal.png","/Gal.png","/Gal.png","/Gal.png","/Gal.png"],
      icon:"/service icons/construction_icon.svg",
    },
    {
      name: "Tailored Construction Management",
      gif: ["/Services_Gif/0220.gif","/Gal.png","/Gal.png","/Gal.png","/Gal.png","/Gal.png"],
      icon:"/service icons/construction_icon.svg",
    },
    {
      name: "Custom Architectural and Interior Solutions",
      gif: ["/Services_Gif/0220.gif","/Gal.png","/Gal.png","/Gal.png","/Gal.png","/Gal.png"],
      icon:"/service icons/construction_icon.svg",
    },
    
  ]
  return (
    <div className='flex relative bg-secondary_color/90 bg_blur h-auto flex flex-col py-[5em]  gap-[2em]  lg:gap-[8em] h-auto w-full p-10'>
    <h1 className='text-primary_color sticky top-1 z-10 text-4xl md:text-[6em]'>What We Do</h1>
    
      
    {services.map((service, index) => (
      <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-[1em] items-center justify-center`}> 
            <div className='hex_box self-start w-full w-[20em] h-[20em] md:w-[15em] h:-[15em] lg:w-[30em] lg:h-[30em] relative max-w-[400px] max-h-[400px]'>
                    <Image 
                      src={service.gif[0]} 
                      alt={service.name}
                      fill
                      className='object-cover'
                    />
            </div>

            <div className='flex items-center gap-4 md:w-1/2'> 
              <img src={service.icon} className='w-[20px] h-[20px] md:w-[50px]  md:h-[50px]' alt={service.name} />
              <h1 className='text-primary_color text-2xl md:text-4xl leading-[2em] lg:text-[3em]'>{service.name}</h1>
            </div>
      </div>
    ))}



    
    </div>
  )
}

export default WhatWeOffer
