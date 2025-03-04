"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Layout1 from "../layout/Layout1";
import AnimateUp from "./AnimateUp";
import { AllLines } from "./AllLines";
import { Swiper, SwiperSlide } from "swiper";
import SimpleData from "./Data Stats/SimpleData";
import { WordAnimation } from "./TextsAnimations";
import { LeftVertical,RightVertical,TopHorizontal,BottomHorizontal } from "./AllLines";

const Intro = () => {
  return (
<div className="relative">

{/* Line - Now Behind Content */}
<div className="w-full z-[-1] flex absolute items-center justify-between h-full">
  {Array.from({ length: 7 }).map((_, index) => (
    <motion.div
      key={index}
      initial={{ height: 0, opacity: 0.3 }} // Start with 30% opacity
      whileInView={{ height: "100%", opacity: 0.3 }} // Maintain opacity
      style={{ transformOrigin: "top" }} // Ensures animation starts from the top
      transition={{ duration: 2, delay: index * 0.3 }} // Staggered animation
      className="w-[1px] bg-secondary_color"
    />
  ))}
</div>

{/* Main Content - Now in Front */}
<div className="w-full z-[1] gap-[2em] h-auto md:min-h-[80vh] flex flex-col justify-between md:max-h-[900px]">
  <div className="flex mt-[1em] flex-col-reverse md:flex-row justify-between">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="md:w-1/2 text-text_color"
    >
      Building the Future <br /> for Today!
    </motion.h1>

    {/* SVG with stroke animation */}
    <div className="md:w-1/2">
      <svg width="190" height="247" viewBox="0 0 190 247" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M62.5 143L26.5 164.5V84L1 100V56L94.5 1L189.5 59V112.5H153.5V77L94.5 42.5L62.5 62V143Z"
          stroke="#EAEFEE"
          strokeWidth="2"
          initial={{ pathLength: 0, strokeWidth: 0 }}
          whileInView={{ pathLength: 1, strokeWidth: 2 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M153 113.5L2 205.5V245.5L153 154V113.5Z"
          stroke="#EAEFEE"
          strokeWidth="2"
          initial={{ pathLength: 0, strokeWidth: 0 }}
          whileInView={{ pathLength: 1, strokeWidth: 2 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  </div>

  <div className="flex relative flex-col md:flex-row items-start md:items-end justify-between">
    <motion.img
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      src="/Isometric.png"
      className="w-full max-w-[300px] md:w-2/3 lg:w-1/2"
    />

    <motion.h5
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="md:w-1/2 text-text_color"
    >
      Transform your ideas into stunning, sustainable realities with Ghana's leading design-to-construction company.
      At Sidan, we either meet your expectations or go beyond them. Either way, we stay committed to every project we
      undertake and deliver quality.
    </motion.h5>
  </div>
</div>
</div>

  );
};

export default Intro;
