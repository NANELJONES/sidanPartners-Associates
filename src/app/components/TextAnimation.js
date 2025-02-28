"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const TextAnimation = (props) => {
  const ref = useRef(null);

  // Split by spaces and commas (any amount of whitespace or commas)
  const textArray = props.text.split("");
  // console.log(textArray)

  return (
    <div className="flex w-full">
        
      {textArray.map((word, index) => (
        <motion.h1
          key={index}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: (index / 10) * 0.9 }}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
};

const WordAnimation = (props) => {


  // Split the text by spaces while keeping them in the array
  const textArray = props.text.split(/( +)/); // This regex captures one or more spaces



  return (
    <div className="flex flex-wrap w-full ">
      {textArray.map((item, index) => (
        <motion.h1 // Use <span> to preserve inline layout
        className=" text-white font-bold bold"
          key={index}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: (index / 10) * 0.1 }}
          style={{ whiteSpace: item.trim() ? "normal" : "pre" }} // Preserve spaces using pre
        >
          {item}
        </motion.h1>
      ))}
    </div>
  );
};

const SmallWordAnimation = (props) => {


  // Split the text by spaces while keeping them in the array
  const textArray = props.text.split(/( +)/); // This regex captures one or more spaces



  return (
    <div className="flex flex-wrap text-white">
      {textArray.map((item, index) => (
        <motion.h4 // Use <span> to preserve inline layout
        className="text-white"
          key={index}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: (index / 10) * 0.1 }}
          style={{ whiteSpace: item.trim() ? "normal" : "pre" }} // Preserve spaces using pre
        >
          {item}
        </motion.h4>
      ))}
    </div>
  );
};



export  {TextAnimation, WordAnimation,SmallWordAnimation};
