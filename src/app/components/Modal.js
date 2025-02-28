"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useStateContext } from "../Context/StateContext";

const Modal = () => {
  const { show_modal, set_show_modal, img_url } = useStateContext();

  if (!show_modal) return null; // Return nothing if the modal isn't open

  return (
    <div
      onClick={() => set_show_modal(false)} // Close modal on click
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[1000] flex items-center justify-center"
    >
        
      <div className="relative w-[80%] h-[80%] lg:w-[50%] max-w-[700px] p-5 rounded-lg overflow-hidden">
        <Image
          src={img_url}
          alt="Image could not be found"
          layout="fill"
          objectFit="contain"
          className="rounded"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Modal;
