import React from 'react'
import Layout1 from '../layout/Layout1'

const Donate = () => {
  return (
    <>

    <div  
    
    className=' w-full overflow-hidden min-h-[1000px]   md:min-h-screen  max-h-[1000px] md:max-h-[1000px]  border-l-1 border-r-1 relative  flex-col p-10'>
     

        <h4 className='w-full text-white font-semibold  md:w-2/3 '>Help Us Punch Out Plastic Waste: <br></br> Your Contribution Fuels a Cleaner, <br/> Greener Future</h4>
        <button className='mt-2 border-white bg-none bg-primary_color w-full max-w-[200px] rounded-2 '><p className='text-white'>Read More</p></button>
        
        <div className=' lg:absolute md:top-[-5em] md:right-0  '>
          <img 
          style={{transformOrigin: 'bottom right',}}
          src='/Donate/Top Hand.png' className='animate-smallRotation  max-w-[600px] w-[80vw] md:w-[40em] absolute top-20 right-[-2em] z-10'></img>
          <img 
           style={{transformOrigin: 'bottom right',}}
          src='/Donate/Top Flowers.svg' className='animate-smallRotation w-[60%] absolute top-[3em] md:relative right-0 md:w-full max-w-[400px]'></img>
      
      
        </div>
        <br/>
        {/* GLobe */}
        <div 
        style={{ backgroundImage: `url("/earth_image.jpg")`, backgroundRepeat:"repeat", backgroundPosition:"center", backgroundSize:"200% auto"}}
        className='animate-moveBackground border-2  center_element w-[70vw] h-[70vw] md:w-[30em] md:h-[30em] rounded-full bg-secondary_color'></div>
   
   {/* Small Hand */}
   <div className='absolute bottom-[5em] md:bottom-[-5em] left-0   '>
     
          <img 
          style={{transformOrigin: 'bottom left',}}
          src='/Donate/Bottom Hand.png' className='animate-smallRotation max-w-[600px] w-[80vw] md:w-[40em]   absolute bottom-0 left-[-2em] '></img>
          <img
           style={{transformOrigin: 'bottom left',}}
          src='/Donate/Bottom Flowers.png' className='animate-smallRotation w-[60%]  md:relative  left-[-1em]  md:w-full  max-w-[400px]'></img>
        </div>

        <div className='w-full md:w-1/3  absolute bottom-0 right-0 lg:bottom-0 lg:right-5'>
          <p   className='text-white'>
          At Plastic Punch, we're committed to tackling plastic pollution to protect our oceans, wildlife, and communities. 
          <br/>
          <br/>
Your donation helps keep coastlines clean, raises awareness, and promotes recycling. 
<br/>
<br/>
Join us—every contribution brings us closer to a plastic-free world!
          </p>
      
          <button className='mt-2 border-white bg-none hover:bg-transparent  w-full max-w-[200px] bg-primary_color duration-[1000ms] transition-all text-primary-color  rounded-2 '><p className='text-white'>Contribute To The Cause</p></button>
          <br/>
        </div>
 
        
   
   
    </div>


    
    </>
  )
}

export default Donate