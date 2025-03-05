"use client";
import Link from "next/link";
import React, { useRef, useState, useLayoutEffect , useEffect, useCallback} from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { getProjects } from "../api/queries";
import { sample_projects } from "../Data/Data";

import { IoArrowDownCircleOutline } from "react-icons/io5";
import { TextAnimation } from "./TextsAnimations";

const SampleProject = () => {
  const parent_div = useRef(null);
  const { scrollYProgress } = useScroll({ target: parent_div });

  const [parentWidth, setParentWidth] = useState(1000);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (parent_div.current) {
        setParentWidth(parent_div.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

    const [projects, setProjects] = useState({
      data: [],
      pageInfo: { hasNextPage: true, endCursor: null },
      isLoading: false,
    });
  
  
  
    const fetchProjects = useCallback(async (chosen_category) => {
      // Reset projects when switching categories
      setProjects({
        data: [], // Clear previous projects
        pageInfo: { hasNextPage: true, endCursor: null },
        isLoading: true, // Show loading state
      });
  
      try {
        const { data, pageInfo } = await getProjects(5, null, chosen_category); // Reset pagination
  
        setProjects({
          data, // Replace with new filtered projects
          pageInfo,
          isLoading: false,
        });
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    }, []);



useEffect(()=>{
    fetchProjects("All")
},[])



  const x = useTransform(scrollYProgress, [0, 1], [0, -(parentWidth *2)]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="md:p-8 flex flex-col gap-4 w-full"
    >
      <div className="flex gap-2 items-end">
        <h1 className="large_text font-primary_font_bold text-secondary_color">Portfolio</h1>
      </div>

      <div className="w-full relative">
        <h3 className=" hidden md:block w-full text-text_color md:w-2/3">
        Explore a selection of our projects, carefully curated to showcase our expertise for your reference.
        </h3>

        <h5 className="  md:hidden w-full text-text_color md:w-2/3">
        Explore a selection of our projects, carefully curated to showcase our expertise for your reference.
        </h5>
        <br />

        <div ref={parent_div} className="relative md:min-h-[300vh] lg:min-h-[200vh] w-full">
          {/* Sticky Wrapper */}
          <div className="sticky top-0 w-full overflow-hidden">
            <motion.div style={{ x }} className="flex items-start min-w-[max-content]">
              {projects.data.slice(0, 5).map((each_project, index) => (
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
                    <h6 className="w-full text-white text-left">
                      {each_project?.node?.projectName}
                    </h6>
                  </Link>
                  <p className="w-full px-2 text-white text-left font-italic">
                    {each_project?.node?.projectStatus}
                  </p>
                </div>
              ))}
            </motion.div>
            <Link href={"/projects"}>
              <button className="text-regular_text bg-none bg-primary_color">
                Explore Our Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SampleProject;
