import React from 'react'
import { TextAnimation, WordAnimation,SmallWordAnimation } from './TextAnimation'
import {ImageContainer,ImageContainer2} from './ImageContainer'
import AnimateUp from './AnimateUp'
const IntroStats = ()=>{
    return (
        <div className='flex flex-col bg_blur md:gap-[4em]'>
         <IntroStat1></IntroStat1>
         <IntroStats2></IntroStats2>
         <IntroStat3></IntroStat3>
        </div>
       
        
    )


        
    
}


const IntroStat1 = () => {
  return (
    <div className=" mx-auto w-full  relative p-2  flex items-center   md::bg-none">
                <div className='w-full z-[2] lg:w-2/3 '>
                <SmallWordAnimation  text="By the year 2050, "></SmallWordAnimation>
                <WordAnimation  text="There will be more plastics than fishes in the ocean (by weight)"></WordAnimation>
    </div>

    <div className='hidden md:absolute md:right-0   md:inline-block clear-left  lg:relative md:right-[40%] lg:right-[2%]  w-2/3'>


<AnimateUp>
            <div  className='relative left-[6em] top-[3em] lg:top-0 lg:left-0'>
            <ImageContainer2 className="" source="/StatsPics/Fish1.png"></ImageContainer2>
            </div>
            </AnimateUp>


<AnimateUp>


            <div className='hidden lg:block lg:ml-[10em] lg:mt-[-5em]'>
            <ImageContainer source="/StatsPics/Fish2.png"></ImageContainer>
            </div>

            </AnimateUp>
    </div>


    

     

  
    </div>
  )
}


const IntroStats2 = () => {
    return (
      <div className=" mx-auto  relative p-2  flex items-center ">
                  <div className='md:w-full lg:w-[80%] '>
                  <SmallWordAnimation  text="Over 350 million tons"></SmallWordAnimation>
                  <WordAnimation  text="of plastic waste are generated worldwide every year, a quantity that is expected to triple by 2060 if nothing is done."></WordAnimation>
      </div>
  

  
  
      
  
       

    
      </div>
    )
  }



  const IntroStat3 = () => {
    return (
      <div className=" mx-auto  relative p-2  flex items-center ">
                  <div className='w-full z-[2] lg:w-2/3 '>
                  <SmallWordAnimation  text="Plastics generally takes"></SmallWordAnimation>
                  <WordAnimation  text="500-1000 years to degrade. Even then, it becomes microplastics, without fully degrading."></WordAnimation>
      </div>
  
      <div className=' hidden md:flex w-2/3 items-center  absolute right-[2em]'>
  
              <ImageContainer source="/StatsPics/Trash1.png"></ImageContainer>
              <div className='mt-[15em] ml-[2em]'>
              <ImageContainer2 source="/StatsPics/Trash2.png"></ImageContainer2>
              </div>
      </div>
  
  
      
  
       
       <br/>
    
      </div>
    )
  }



export default IntroStats