"use client"
import React from 'react'
import { useState } from 'react';

const Accordion = ({heading, content}) => {
    const [showContent, setShowContent] = useState(false);
  
 
    const toggleAccordion = () => {
      setShowContent(!showContent);
    };
  
    return (
      <div className="w-full hover:cursor-pointer  ">
         <div className="border-b-2 border-primary_color">
            <div
              className="w-full flex justify-between items-center p-4 text-left  transition duration-300"
              onClick={() => toggleAccordion()}
            >
              <h3 className="text-lg  l font-semibold  ">{heading}</h3>
              <span className="text-2xl  text-primary_color">{showContent ?  "−" : "+"}</span>
            </div>
  
            {showContent && (
              <div className="p-4   ">
                <h6 className="w-full text-sm  md:w-2/3">{content}</h6>
                {/* <div className="mt-3">{item.image}</div> */}
              </div>
            )}
          </div>
      </div>
    );
  };
  
  

export default Accordion
