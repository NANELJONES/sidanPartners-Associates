"use client"
import React from "react";
import { awareness_content } from "../Data/Data";
import { Button2 } from "./Buttons";
import AnimateUp from "./AnimateUp";
import { Anaheim } from "next/font/google";

const AwarenessMaterial = ({ input_data }) => {
  const isImage = (fileName) => {
    return /\.(jpg|jpeg|png|gif|webp|bmp|tiff)$/i.test(fileName);
  };

  return (
    <div className="w-full columns-[300px] xl:columns-3 gap-[20px] ">
      {input_data.length > 0 ? input_data.map((edge, index) => (
        <div key={index} className="">
          <div className="mt-[20px]">
            {edge.node.awarenessContent.map((content, idx) => (
              <AnimateUp>
                <div key={idx} className="relative w-full md:hover:scale-[1.1] duration-700 border-2 mt-[20px] ">
      
               
                {isImage(content.fileName) ? (
                  <div className=""> 

                  <img
                    src={content.url}
                    alt={content.fileName}
                    className="w-full  h-full max-h-[400px] md:min-h-[300px] object-cover shadow-lg"
                  />
                  </div>
                ) : (
                  <div className="flex flex-col w-full rounded-lg gap-4 p-6 bg-primary_color ">
                    <h6 className="text-white">{content.fileName}</h6>
                    <Button2 title="Download File" link_address={content.url} />
                  </div>
                )}
              </div>
              </AnimateUp>
            ))}
          </div>
        </div>
      )) :<p className="mt-[5em] mx-auto">Content Data Not Uploaded Yet. Would  Be Uploaded Soon</p>}
    </div>
  );
};

export default AwarenessMaterial;
