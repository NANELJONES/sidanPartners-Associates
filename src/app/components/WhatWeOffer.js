"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { TextAnimation } from "./TextsAnimations";
import { Poppins } from "next/font/google";

const WhatWeOffer = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: parentRef });

  const [scrollWidth, setScrollWidth] = useState(1000);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (parentRef.current && scrollRef.current) {
        setScrollWidth(scrollRef.current.scrollWidth);
        setClientWidth(parentRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -(scrollWidth - clientWidth)]);

  const services = [
    { name: "Design-to-Construction Services", gif: ["/Services_Gif/0220.gif"], icon: "/service icons/construction_icon.svg" },
    { name: "Line" },
    { name: "Tailored Construction Management", gif: ["/service icons/Main-Header.jpg"], icon: "/service icons/project_management_icon.svg" },
    { name: "Line" },
    { name: "Custom Architectural and Interior Solutions", gif: ["/Services_Gif/0220.gif"], icon: "/service icons/architectural_icon.svg" },
  ];

  return (
    <div className="relative bg-primary_color-80 bg_blur min-h-screen flex flex-col py-10 md:py-20 gap-10 lg:gap-20 w-full p-10">
    <TextAnimation>
    <h1 className="text-secondary_color font-Poppins  bg-primary_color   sticky top-10 md:top-[100px] z-10  text-4xl md:text-[6em]">
        What We Offer
      </h1>
    </TextAnimation>

      <div className="relative w-full  min-h-[200vh] " ref={parentRef}>
        <div className="sticky top-20 md:top-40  w-full overflow-hidden">
          <motion.div ref={scrollRef} style={{ x }} className="flex  items-center">
            {services.map((service, index) =>
              service.name === "Line" ? (
                <span key={index} className="flex items-center gap-0 w-auto shrink-0">
                  <IoArrowDownCircleOutline className="text-secondary_color rotate-90 text-3xl md:text-6xl" />
                  <motion.div
                  initial={{width:0}}
                  whileInView={{width:"8em"}}
                  transition={{duration:1}}
                  
                  className="flex-grow shrink-0  h-[3px] bg-secondary_color"></motion.div> 
                  
                  <IoArrowDownCircleOutline className="text-secondary_color -rotate-90 text-3xl md:text-6xl" />
                </span>
              ) : (
                <div key={index} className="relative  flex flex-col gap-4 items-start  shrink-0 px-4">
                      

                 <div className="flex gap-[2em] items-start ">
                  
                 <div className="relative oct_box w-80 h-80 lg:w-96 lg:h-96">
                      <Image src={service.gif[0]} alt={service.name} fill className="object-cover" />
                    </div>
                   <div>
                   <motion.div
                   initial={{x:0}}
                   whileInView={{x:-40}}
                   transition={{duration:2}}
                   className="absolute top-0 right-10 md:relative top-0 right-0 self-start w-[20em] h-[15em] hex_box bg-secondary_color"></motion.div>
           
             {/* Name and Serice on large devices */}
             <div className="flex hidden md:flex items-center md:w-3/4 gap-4">
                    {service.icon && (
                      <img src={service.icon} className="w-8 bg-primary_color  shadow-md rounded-md p-2 h-8 md:w-12 md:h-12" alt={service.name} />
                    )}
                    <h2 className="text-secondary_color   leading-tight ">
                      {service.name}
                    </h2>
                  </div>



                   </div>
                 </div>
           











           
                    

                               {/* Name and Serice  on small devices*/}
             <div className="flex md:hidden  self-start items-senter w-[70%] gap-4">
                    {service.icon && (
                      <img src={service.icon} className="w-8 bg-secondary_color rounded-md p-2 h-8 md:w-12 md:h-12" alt={service.name} />
                    )}
                    <h3 className="text-secondary_color   leading-tight ">
                      {service.name}
                    </h3>
                  </div>
              


                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
