"use client";
import React, { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useStateContext } from "../Context/StateContext";
import Layout1 from "../layout/Layout1";
import Modal from "../components/Modal";
import { HeadersCollection1 } from "../components/AllHeaders/HeadersCollection";
import { getGallery } from "../api/queries";

// import { getGallery } from "../lib";
const Page = () => {
  const { set_url, set_show_modal, show_modal } = useStateContext();
  const [gallery, setGallery] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [endCursor, setEndCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch gallery data
  const fetchGallery = useCallback(async () => {
    if (isLoading || !hasNextPage) return; // Prevent multiple fetches
    // console.log(gallery)
    console.log("gallery is being fetched")
    setIsLoading(true);
    try {
      const { edges, pageInfo } = await getGallery(10, endCursor);
      setGallery((prev) => [...prev, ...edges]); // Append new images
      setHasNextPage(pageInfo.hasNextPage);
      setEndCursor(pageInfo.endCursor);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    } finally {
      setIsLoading(false);
    }
  }, [endCursor, hasNextPage, isLoading]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500
    ) {
      fetchGallery(); // Fetch more images when near bottom
    }
  }, [fetchGallery]);

  useEffect(() => {
    fetchGallery(); // Initial fetch on component mount

  }, [fetchGallery]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
      {show_modal && <Modal />}
      <Layout1>
        <HeadersCollection1
          heading="Our Media"
          second_heading="& Gallery"
          sub_heading="Get in touch with our latest blogs, from all around the world regarding our various inputs and projects."
          source="/Gallery Media Image.svg"
        />
        
        <div className="flex p-10 md:p-20 items-center justify-around flex-wrap gap-4">
          {gallery.map((item, index) => (
            <div key={index} className="w-full  ">
              <h3 className=" ">  {`-${item.node.title}`}</h3>
              <div className="w-full flex flex-wrap  justify-between ">
              {item.node.imageContent.map((img, imgIndex) => (
                <motion.div
                  key={`${index}-${imgIndex}`}
                  initial={{ opacity: 0, y: -70 }}
                  whileInView={{ opacity: 1, y: -30 }}
                  transition={{ duration: 1, delay: index / 10 + 0.4 }}
                  className={`w-[15em] relative border mx-auto rounded-2xl lg:w-[40%] h-[30em] md:h-[45em] lg:w-[20em] max-w-[250px] max-h-[350px] ${
                    imgIndex % 2 === 0 ? "mt-20" : "mt-10"
                  }`}
                  onClick={() => {
                    set_show_modal(true);
                    set_url(img.url);
                  }}
                >
                  <Image
                    alt={`Gallery Image ${imgIndex + 1}`}
                    src={img.url}
                    className="w-full object-cover rounded-2xl"
                    fill
                  />
                </motion.div>
              ))}  
              </div>

            </div>
          ))}
        </div>
      </Layout1>
    </div>
  );
};

export default Page;
