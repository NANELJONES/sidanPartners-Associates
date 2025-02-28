"use client";
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { sample_projects } from '../Data/Data';

const SampleProject = () => {
  const parent_div = useRef(null);
  const { scrollYProgress } = useScroll({ target: parent_div });

  // Get parent width dynamically
  const [parentWidth, setParentWidth] = useState(1000);
  useEffect(() => {
    if (parent_div.current) {
      setParentWidth(parent_div.current.offsetWidth);
    }
    const handleResize = () => {
      if (parent_div.current) {
        setParentWidth(parent_div.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -parentWidth]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="p-8 flex flex-col gap-4 w-full"
    >
      <div className="flex gap-2 items-end">
        <h3 className="text-regular_text">Our</h3>
        <h1 className="text-regular_text">Projects</h1>
      </div>

      <div className="w-full relative">
        <h3 className="w-full text-text_color md:w-2/3">
          With over a myriad 
          
            of our projects, we have sampled a couple to showcase our expertise for your reference.
        </h3>
        <br />

        {/* Make sure parent div is taller than the viewport */}
        <div ref={parent_div} className="relative  md:min-h-[300vh] lg:min-h-[200vh] w-full">
          {/* Sticky Wrapper */}
          <div className="sticky top-0 w-full overflow-hidden">
            <motion.div style={{ x }} className="flex items-start">
              {sample_projects.slice(0, 5).map((each_project, index) => (
                <div className="md:p-10 w-[20em] shrink-0 md:w-1/2 px-4" key={index}>
                  <div className="relative w-full h-[60vw] max-h-[300px] md:h-[18em]">
                    <Image
                      alt="Project Image"
                      src={each_project?.node?.projectImages[0]?.url || "/gallery_bg.jpg"}
                      className="w-full object-cover"
                      fill
                    />
                  </div>
                  <Link key={index} href={`/projects/${each_project?.node?.slug}`}>
                    <h6 className="w-full text-white text-left">{each_project?.node?.projectName}</h6>
                  </Link>
                  <p className="w-full px-2 text-white text-left font-italic">
                    {each_project?.node?.projectStatus}
                  </p>
                </div>
              ))}
            </motion.div>
            <Link href={'/projects'}>
            <button className="text-regular_text bg-none bg-primary_color">Explore Our Projects</button>
          </Link>


          </div>

          <br />
          <h3 className="w-full text-text_color text-center mx-auto mt-[5em] md:w-2/3">
          At Sidan Associates and Partners, we turn visionary designs into exceptional spaces. Explore our projects and see innovation in action.
        </h3>
        <h3 className="w-full text-text_color text-center mx-auto mt-[5em] md:w-2/3">
        From concept to completion, we craft inspiring spaces with precision and excellence. See how we bring ideas to life.
        </h3>
         
        </div>
      </div>
    </motion.div>
  );
};

export default SampleProject;
