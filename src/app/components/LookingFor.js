"use client";
import React, { useState, useEffect } from "react";
import { Button2, Button3 } from "./Buttons";
import { motion } from "framer-motion";
import { TextAnimation } from "./TextsAnimations";
import { Button1 } from "./Buttons";
import { IoArrowDownCircleOutline } from "react-icons/io5";

import { MdConstruction } from "react-icons/md";
import { MdArchitecture } from "react-icons/md";
import { GrCycle } from "react-icons/gr";

import Link from "next/link";
const LookingFor = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lookingFor = [
    {
      title: "Innovative Designs",
      icon: <MdArchitecture className="text-primary_color text-[1.5em] md:text-[2.4em]"></MdArchitecture>,
      image: "/service icons/architectural_image.jpg",
    },
    {
      title: "Seamless Construction",
      icon: <MdConstruction className="text-primary_color text-[1.5em] md:text-[2.4em]"></MdConstruction>,
    image: "/service icons/construction_imagery2.jpg",
    },
    {
      title: "Sustainable Measures",
      icon: <GrCycle className="text-primary_color text-[1.5em] md:text-[2.4em]">  </GrCycle>,
      image: "/service icons/quantity_surveying_imagery.jpg",
    },
  ];

  // Auto-cycle through items every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % lookingFor.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transition-all duration-600 max-h-[700px] relative flex flex-col justify-between gap-[3em] md:gap-4 bg-secondary_color bg_blur px-4 py-10 md:p-20 h-auto">
      {/* Background Image Section */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:self-end     h-[200px] md:h-[30em]   w-full relative"
      >
        <div className="absolute top-5 right-5 w-fit h-auto p-[1em]">
          {/* Top Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-[1px] relative top-[-1em] left-[-1em] w-[120%] bg-primary_color"
          ></motion.div>

          {/* Left Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "250px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[1px] absolute left-[0.4em] h-[300px] top-[-1em] bg-primary_color"
          ></motion.div>

          {/* Image Box */}
          <motion.img
            key={lookingFor[activeIndex].image}
            src={lookingFor[activeIndex].image}
            alt="background"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" h-[100%] w-[200px]  h-[200px] max-h-[250px]  lg:max-w-[400px] lg:w-[30em] lg:h-[30em] object-cover"
          />

          {/* Bottom Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-[1px] relative top-[1em] left-[-1em] w-[120%] bg-primary_color"
          ></motion.div>

          {/* Right Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "250px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[1px] absolute right-[0.4em] h-[200px] top-[-1em] bg-primary_color"
          ></motion.div>
        </div>
      </motion.div>

      {/* Text & Content Section */}
      <div className="mt-[2em] relative self-start flex flex-col gap-[1em] w-full">
        <h4 className="text_primary_color">So, if you are looking for</h4>

        {/* Animated Title & Icon */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex gap-4 items-center"
        >

          {lookingFor[activeIndex].icon}
          {/* <img
            src={lookingFor[activeIndex].icon}
            alt={lookingFor[activeIndex].title}
            className="w-[2em] h-[2em]  object-cover 
            filter drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] 
            transition-all duration-500 ease-in-out"
          /> */}

<TextAnimation>
          <h1 className="hidden md:block text-primary_color w-full large_text  font-primary_font_medium ">
            {lookingFor[activeIndex].title}
          </h1>

          </TextAnimation>

          <TextAnimation>
          <h2 className=" md:hidden text_primary_color w-full   font-primary_font_medium ">
            {lookingFor[activeIndex].title}
          </h2>

          </TextAnimation>



        </motion.div>

        <h5 className="text_primary_color font-[300]">
          for your dream project, then you've come to the right place
        </h5>
        <Link href={"/contactUs"} className="" >
              <button className="text-regular_text p-2  flex items-center gap-4 bg-primary_color">
              <h6 className=" text-secondary_color text-[1em] md:text-[1.5em] px-2 md:p-2 ">   Get In Touch </h6>
                <IoArrowDownCircleOutline className="text-[2em] text-secondary_color rotate-[-90deg]"></IoArrowDownCircleOutline>
              </button>
            </Link>
        {/* Navigation Buttons */}
        {/* <div className="flex flex-col vertical_centering gap-2 mt-4">
          {lookingFor.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[5px] p-1 h-[5px] rounded-full border-2 border-primary_color transition-all ${
                activeIndex === index ? "bg-primary_color" : "bg-transparent"
              }`}
            />
          ))}
        </div> */}


      </div>
    </div>
  );
};

export default LookingFor;
