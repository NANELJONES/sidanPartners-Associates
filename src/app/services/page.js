"use client"
import React from "react";
import Layout1 from "../layout/Layout1";
import { HeadersCollection7 } from "../components/AllHeaders/HeadersCollection";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import AnimateUp from "../components/AnimateUp";
import { TextAnimation } from "../components/TextsAnimations";
import Link from "next/link";
import Image from "next/image";
import { AllLines } from "../components/AllLines";
import { TopHorizontal, LeftVertical,RightVertical, BottomHorizontal } from "../components/AllLines";
import TiltComponent from "../components/Tilt";

import HowValues from "../components/HowValues";
const Page = () => {

  const services = [
    {
      name: "Full-Scale Construction Services",
      gif: ["/service icons/construction_imagery1.jpg","/service icons/construction_imagery2.jpg"],
      icon: "/service icons/construction_icon.svg",
    },
    {
      name: "Architectural Designs",
      gif: ["/service icons/interior_imagery.jpg", "/service icons/interior_image1.jpg"], 
      icon: "/service icons/architectural_icon.svg",
    },
    {
      name: "Interior Design",
      gif: ["/service icons/interior_imagery.jpg", "/service icons/interior_image1.jpg"], 
      icon: "/service icons/interior_design_icon.svg",
    },
    {
      name: "3D Visualization and Animation",
      gif: ["/service icons/interior_imagery.jpg", "/service icons/interior_image1.jpg"], 
      icon: "/service icons/3d_visualization_icon.svg",
    },
    {
      name: "Project and Facility Management",
      gif: ["/service icons/interior_imagery.jpg", "/service icons/interior_image1.jpg"], 
      icon: "/service icons/project_management_icon.svg",
    },
    {
      name: "Quantity Surveying",
      gif: ["/service icons/interior_imagery.jpg", "/service icons/interior_image1.jpg"], 
      icon: "/service icons/quantity_surveying_icon.svg",
    },
    {
      name: "Virtual & Augmented Reality Content",
      gif: ["/service icons/interior_imagery.jpg", "/service icons/interior_image1.jpg"], 
      icon: "/service icons/vr_ar_icon.svg",
    },
  ];
  
  return (
    <div className="bg-secondary_color">
      <Layout1>
        {/* <AllLines></AllLines> */}
        <div className="max-h-[800px]  h-[100vh] min-h-[300px]">
            {/* Header Intro Text */}
          <div className="flex flex-col gap-2  md:flex-row py-2    w-full  items-center justify-between    relative border-primary_color h-auto ">
            <div className={`w-full self-start md:w-2/3 "w-full self-start`}>
            <TextAnimation>
              <h1 className="main_header_font ">
                Our Services
              </h1>
              </TextAnimation>
              <br/>

              <div
                className={` h-[100%] w-full lg:w-full flex flex-col gap-[1em] md:gap-[0px] md:justify-between `}
              >
                <span className="flex items-center w-full  md:w gap-2">
                  <IoArrowDownCircleOutline className="text-primary_color rotate-[-45deg] text-[3em] md:text-[4em] " />
                  <h5>
                    Just Think About It - Your Vision, Brought to Life with Our
                    Expertise!
                  </h5>
                </span>
              </div>
            </div>
          </div>

{/* Visual Look */}
<div
  className=" services_div h-[60%]"
  style={{
    backgroundImage: `url("/service icons/Main-Header.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>

        </div>





        {/* Here is how */}

        <div className="normal_div gap-[2em] lg:gap-[4em] mt-[2em]  md:py-20 items-center">
        <motion.div 
  className="w-full md:w-1/2 self-end flex gap-[2em]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: { transition: { staggerChildren: 0.5 } } // Stagger animations
  }}
>
  <motion.div  
      initial={{ rotate: -45 }}
      animate="visible"
      whileInView={{ rotate: 0 }}  
      transition={{ duration: 1 }}
      className="w-[20vw] h-[50vh] max-w-[8em] max-h-[15em] bg-primary_color"> 
  </motion.div>

  <motion.div  
      initial={{ rotate: 45 }}
      animate="visible"
      whileInView={{ rotate: 0 }}  
      transition={{ duration: 1 }}
      className="w-[20vw] h-[50vh] max-w-[8em] max-h-[15em] bg-primary_color"> 
  </motion.div>

  <motion.div  
      initial={{ rotate: 90 }}
      animate="visible"
      whileInView={{ rotate: 0 }}  
      transition={{ duration: 1 }}
      className="w-[20vw] h-[50vh] max-w-[8em] max-h-[15em] bg-primary_color"> 
  </motion.div>

</motion.div>




            {/* this is the other side */}
            <div className="relative w-[80%] circle_dot flex flex-col gap-[1em] md:gap-[2em] md:w-1/2 ">
            <h2 className=" font-primary_font_medium ">Here's How:</h2>
           <motion.div
         initial={{ height: "0px" }}
         whileInView={{height:"100%"}} // Use vh for full screen height
         transition={{ duration: 2, ease: "easeInOut" }} // Smooth animation
           
           className="absolute  w-[1px] top-0 left-[-20px]  h-full bg-tertiary_color"></motion.div>

           <HowValues title={"Our design services allow us to blend creativity and functionality to match your needs."}></HowValues>
           
           <HowValues title={"Is your project a residential one? Commercial? or industrial? Whatever the need is, we deliver top-tier construction services tailored to your requirements."}></HowValues>
           
           <HowValues title={"As your Project Managers, we handle every detail—from budgeting to timelines—ensuring a seamless and stress-free experience."}></HowValues>
           

      

            </div>

        </div>



       {/* this is the services side  */}

       <div className="w-full bg-primary_color mt-[4em] p-[2em] flex flex-col gap-[3em]">
              <TextAnimation>
                <h4 className=" md:text-[3em]  w-[80%] text-tertiary_color">Whether you’re envisioning your dream space or need expert project execution, we offer tailored
                solutions across: </h4>
                </TextAnimation>

                {services.map((service, index) => (
<TiltComponent >
<div  className={`flex flex-col py-[4em] md:flex-row relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-[1em] items-center justify-center`}> 
                <TopHorizontal></TopHorizontal>
                <LeftVertical></LeftVertical>
                <RightVertical></RightVertical>
                <BottomHorizontal></BottomHorizontal>
            <div className='hex_box self-center md:self-start w-full  h-[20em] md:w-1/2 h:-[15em] lg:w-[30em] lg:h-[30em] relative max-w-[350px] max-h-[400px]'>
                    <Image 
                      src={service.gif[0]} 
                      alt={service.name}
                      fill
                      className='object-cover'
                    />
            </div>

            <div className='flex  flex-col items-start  w-[80%] md:w-1/2 md:flex-row  gap-2 md:items-center md:gap-4 md:w-1/2'> 
            <img 
  src={service.icon} 
  className=" md:bg-transparent md:p-2 md:hover:rotate-90 transition-ease duration-500 rounded-md shadow-md 
            p-1  max-w-[40px]  md:max-w-[100px] md:w-[50px] md:h-[50px]" 
  alt={service.name} 
/>

              <TextAnimation>
              <h1 className='text-primary_color_light    md:text-left text-2xl md:text-4xl leading-[2em] lg:text-[3em]'>{service.name}</h1>
              </TextAnimation>
            </div>
      </div>
</TiltComponent>
    ))}

            </div>

{/* this is the cta */}
            <div className="flex py-[8em] bg-tertiary_color items-center flex-col gap-[1em]">
           
<div className="md:w-2/3 w-[80%] lg:w-1/2 mx-auto flex flex-wrap items-center justify-evenly">


<h1 className="text-center  ">  Ready to get <br/>Started? </h1>

</div>
 <Link href={"/contactUs"}> <button className=" border-none rounded-none bg-primary_color text-secondary_color"> Request a Consultation </button> </Link>
  
                
         </div>



      </Layout1>
    </div>
  );
};

export default Page;
