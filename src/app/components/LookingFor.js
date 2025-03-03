"use client";
import React, { useState, useEffect } from "react";
import { Button3 } from "./Buttons";
import { motion } from "framer-motion";

const LookingFor = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lookingFor = [
    {
      title: "Innovative Designs",
      icon: "/service icons/innovative_design.svg",
      image: "/Gal.png",
    },
    {
      title: "Seamless Construction",
      icon: "/service icons/seamless_construction.svg",
      image: "/man.jpg",
    },
    {
      title: "Sustainable Measures",
      icon: "/service icons/sustainability.svg",
      image: "/Who We Are.png",
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
    <div className="relative flex flex-col justify-between gap-[3em] md:gap-4 bg-[#20496C]/60 bg_blur p-10 md:p-20 h-auto">
      {/* Background Image Section */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="self-start md:self-end s h-[200px] w-full relative"
      >
        <div className="absolute top-5 right-5 w-fit h-auto p-[1em]">
          {/* Top Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-[1px] relative top-[-1em] left-[-1em] w-[120%] bg-secondary_color"
          ></motion.div>

          {/* Left Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "250px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[1px] absolute left-[0.4em] h-[300px] top-[-1em] bg-secondary_color"
          ></motion.div>

          {/* Image Box */}
          <motion.img
            key={lookingFor[activeIndex].image}
            src={lookingFor[activeIndex].image}
            alt="background"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-[100%] max-w-[200px] h-[200px] max-h-[250px] object-cover"
          />

          {/* Bottom Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-[1px] relative top-[1em] left-[-1em] w-[120%] bg-secondary_color"
          ></motion.div>

          {/* Right Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "250px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[1px] absolute right-[0.4em] h-[200px] top-[-1em] bg-secondary_color"
          ></motion.div>
        </div>
      </motion.div>

      {/* Text & Content Section */}
      <div className="mt-[2em] relative self-start flex flex-col gap-[1em] w-full">
        <h5 className="text-secondary_color">So, if you are looking for</h5>

        {/* Animated Title & Icon */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex gap-4 items-center"
        >
          <img
            src={lookingFor[activeIndex].icon}
            alt={lookingFor[activeIndex].title}
            className="w-[30px] h-[30px] object-cover 
            filter drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] 
            transition-all duration-500 ease-in-out"
          />
          <h3 className="text-secondary_color w-full font-[300] text-[2.5em] 2xl:text-[6em]">
            {lookingFor[activeIndex].title}
          </h3>
        </motion.div>

        <h5 className="text-secondary_color font-[300]">
          for your dream project, then you've come to the right place
        </h5>
        <Button3 title="Get in touch" link_address="/" />

        {/* Navigation Buttons */}
        <div className="flex flex-col vertical_centering gap-2 mt-4">
          {lookingFor.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[5px] p-1 h-[5px] rounded-full border-2 border-secondary_color transition-all ${
                activeIndex === index ? "bg-secondary_color" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
