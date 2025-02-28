"use client"
import React from 'react';
import Slider from "react-slick";
import "swiper/css";
import AnimateUp from './AnimateUp';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const OnlineContent = () => {

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow-custom`}
        style={{
          ...style,
          display: "block",
         
          color: "#fff", // White arrow color
          borderRadius: "50%",
   
          right: "10px",
          zIndex: 10,
     
        }}
        onClick={onClick}
      >
       
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow-custom`}
        style={{
          ...style,
          padding:"10px",
      
         
          
       
          color: "#fff", // White arrow color
          borderRadius: "50%",
          
          left: "10px",
          zIndex: 10,
       
        }}
        onClick={onClick}
      >
       
      </div>
    );
  };

  const youtube_link = [
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
  ];

  
  const settings = {
    dots: true,
    infinite: false, // Set to false to prevent endless scrolling
    speed: 500,
    spacebetween:10,
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: false, // Disable center mode
    variableWidth: true, // Allow automatic width based on content
    
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom previous arrow
    

  };
  return (
    <div className=" w-full mt-[4em]">
      <h4 className='text-white w-full  md:w-[60%]'>Get in Touch With Our <br/> Latest Contents From All Platforms </h4>
      
      

 <br/>
      <Slider {...settings} className= "left-[40%] mySwiper w-full  ">
        {youtube_link.map((each_link, index) => {
          return (
            <div key={index} className='ml-2 left-[40%]'>
              <div               className="w-[20em]  border h-[20em] p-4 max-h-[250px] bg-secondary_color md:max-w-[300px]  md:max-h-[300px]" ></div>

               <h4 className='text-white  text-wrap max-w-[300px]'>Super cali fligilistic expliary dotious to th x</h4>
              </div>
          );
        })}
      </Slider>

      <br />
      <br />
      <div className="flex justify-center">
      <button className='  bg-none max-w-[500px] hover:bg-secondary_color duration-500 transistion mx-auto bg-primary_color rounded-none  text-white'>Watch More Content</button>
      </div>
    </div>
  );
};

export default OnlineContent;
