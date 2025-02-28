"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStateContext } from "../Context/StateContext";
import Modal from "./Modal";
import Link from "next/link";
const SampleGallery = () => {
  const { gallery } = useStateContext();
  const { show_modal, set_show_modal, set_url } = useStateContext();

  // Flatten all images into one array and select the first 4
  const firstFourImages = gallery
    .flatMap(item => item.node.imageContent)
    .slice(0, 6);

  return (
    <div className="w-full">
           {show_modal && <Modal></Modal>}
      <h4 className="px-4 border-l-8 border-secondary_color w-2/3">
        Our Gallery
      </h4>
      <br/>
    <Link href={"/gallery"}>  <button className="text-secondary_color border-2  border-secondary_color  bg-none ">Explore More Of Our Gallery</button></Link>

      <div className="flex items-center justify-around flex-wrap gap-4">
        {firstFourImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{ duration: 1, delay: index / 10 + 0.4  }}
            className={`w-[13em] relative border rounded-2xl lg:w-[40%] h-[16em] md:h-[45em] lg:w-[20em] max-w-[250px] max-h-[350px] ${
              index % 2 === 0 ? "mt-20" : "mt-0"
            }`}

            onClick={()=>{ set_show_modal(true), set_url(img.url)}}
          >
            <Image
              alt={`Gallery Image `}
              src={img.url}
              className="w-full object-cover rounded-2xl"
              fill
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SampleGallery;
