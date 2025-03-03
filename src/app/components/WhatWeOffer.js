"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { TextAnimation } from "./TextsAnimations";

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
    <div className="relative bg-primary_color_light bg_blur min-h-screen flex flex-col py-10 md:py-20 gap-10 lg:gap-20 w-full p-10">
    <TextAnimation>
    <h1 className="text-primary_color      sticky top-10 md:top-[100px] z-10  text-4xl md:text-[6em]">
        What We Offer
      </h1>
    </TextAnimation>

      <div className="relative w-full  min-h-[200vh] " ref={parentRef}>
        <div className="sticky top-20 md:top-40  w-full overflow-hidden">
          <motion.div ref={scrollRef} style={{ x }} className="flex items-center">
            {services.map((service, index) =>
              service.name === "Line" ? (
                <span key={index} className="flex items-center gap-0 w-auto shrink-0">
                  <IoArrowDownCircleOutline className="text-primary_color rotate-90 text-3xl md:text-6xl" />
                  <motion.div
                  initial={{width:0}}
                  whileInView={{width:"8em"}}
                  transition={{duration:1}}
                  
                  className="flex-grow shrink-0  h-[3px] bg-primary_color"></motion.div> 
                  
                  <IoArrowDownCircleOutline className="text-primary_color -rotate-90 text-3xl md:text-6xl" />
                </span>
              ) : (
                <div key={index} className="flex flex-col gap-4 items-center w-[20em] shrink-0 md:w-1/2 px-4">
                  {service.gif && (
                    <div className="relative hex_box w-80 h-80 md:w-60 md:h-60 lg:w-96 lg:h-96">
                      <Image src={service.gif[0]} alt={service.name} fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex  items-center md:w-2/3 gap-4">
                    {service.icon && (
                      <img src={service.icon} className="w-8 bg-primary_color rounded-md p-2 h-8 md:w-12 md:h-12" alt={service.name} />
                    )}
                    <h3 className="text-primary_color   leading-tight ">
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
