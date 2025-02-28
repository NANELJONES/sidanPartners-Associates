"use client";
import React from "react";
import AnimateUp from "./AnimateUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TheSolution = () => {
  const solutions = ["Rethink", "Refuse", "Reduce", "Reuse","Repair","Recycle"];

  return (
    <AnimateUp>
      <div className="bg-primary_color w-full h-auto  gap-2 flex flex-col  items-center lg:block lg:h-screen lg:px-8 lg:max-h-[800px] lg:mt-20 py-10">
        <h5 className="text-regular_text">The Solution?</h5>
        <Swiper
         autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
          direction="vertical"
          pagination={{
            clickable: true,
          }}
        
          modules={[Pagination, Autoplay]}
          className="h-[8em] w-full md:h-full max-h-[200px]"
        >
          {solutions.map((one_sol, index) => (
            <SwiperSlide key={index}>
              <h1 className="text-regular_text font-bold text-[6em] text-center  lg:text-left   leading-[1em] lg:text-[150px]">
                {one_sol}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className= "lg:absolute md:  lg:bottom-[2em] lg:right-[2em] md:w-[30em] md:h-[30em]  w-full h-[70vw] lg:max-w-[700px] lg:max-h-[700px]"> 
          <img src="/ImageFist.svg" alt="earth" className="w-full  h-full object-cover"/>

        </div>
      
      <h1 className="lg:absolute text-center lg:text-left  md:lg:bottom-[1em] lg:left-[1em] text-regular_text w-full lg:text-[3em] 2xl:text-[5em]"> Less Plastics <br/> Better Lives</h1>
       
      </div>


  
    
    </AnimateUp>
  );
};

export default TheSolution;
