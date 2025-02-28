"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Layout1 from "../layout/Layout1";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCallback } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { getProjectOptions, getProjects } from "../api/queries";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { AllLines } from "../components/AllLines";


let exportedProjects = []; // Variable to hold the exported projects

const Page = () => {
  const [projects, setProjects] = useState({
    data: [],
    pageInfo: { hasNextPage: true, endCursor: null },
    isLoading: false,
  });

  const [active_category, set_active_Category] = useState("All")
    const [project_options, set_project_options] = useState([])

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
    

  const fetchProjectOptions = async () => {
    try {
      const project_options = await getProjectOptions();
      set_project_options(project_options);
      
      // Set the state with fetched data
     
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };






  useEffect(() => {
    fetchProjects(active_category);
   
    fetchProjectOptions();
  }, [active_category]);

  return (
    <div className="relative bg-secondary_color w-full">


      <Layout1>
       

      <div className="flex flex-col gap-2  py-2 border-b-[20px] border-primary_color md:flex-row w-full  items-center justify-between    relative border-primary_color h-auto ">
          <h1 className="text-[5em] lg:text-[8em] w-full text-left ">Projects</h1>

          <div className=" md:w-[50%]  h-[100%] flex flex-col gap-[1em] md:gap-[0px] md:justify-between ">
              <span className="flex items-center w-full  md:w gap-2">
                <IoArrowDownCircleOutline className="text-primary_color rotate-[-45deg] text-[3em] md:text-[6em] " />
                <h5>
                Gain insights from industry trends, eco-friendly innovations, and expert tips on design and
                construction.
                  with{" "}
                </h5>
              </span>

 
        
            </div>
    

        </div>


        <br/>
        <br/>
        



<div className="flex flex-col md:flex-row h-[80vh] gap-[2em] ">

  <div className="w-full md: md:w-auto px-[2em] h-auto p-[1em] md:h-full  flex md:flex-col gap-[1em] items-center justify-center bg-primary_color"> 
  <p 
  onClick={()=>{
    fetchProjects("All")
    set_active_Category("All")
  }}
  
  className="text-secondary_color hover:scale-105 transition-all duration-300 hover:text-primary_color_light">All</p>
    {project_options.map((each_category, index) => {
      return (
   
          <p key={index} onClick={()=>{
            fetchProjects(each_category.name)
            set_active_Category(each_category.name)
          }} className={`${active_category === each_category.name ? "font-bold  text-secondary_color" : "text-secondary_color"} text-secondary_color hover:scale-105 transition-all duration-300 hover:text-primary_color_light`}>{each_category?.name}</p>
  
      );
    })}
    
     </div>

      <div className="md:w-[80%] h-full">
    
      <h5 className="text">Total: {projects.data.length}</h5>
      <br/>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={30}
          slidesPerView={'auto'}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full"
        >
          {projects.data.map((each_project, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <Link href={`/projects/${each_project?.node?.slug}`}>
                <motion.div
                  className="w-auto h-auto"
                  initial={{ opacity: 0, y: -70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div
                    className={`relative    
                    ${
                      index % 2 === 0
                        ? "w-[30em] h-[20em] md:w-[20em] lg:w-[35em] lg:h-[30em] max-w-[350px] max-h-[250px] md:max-h-[400px] md:max-w-[800px]"
                        : "w-[20em] h-[30em] md:w-[15em] 2xl:w-[25em] md:h-[45em] max-w-[350px] max-h-[250px] 2xl:max-w-[500px]"
                    }`}
                  >
                    <Image
                      alt="this is here"
                      src={each_project?.node?.projectImages[0]?.url || "/gallery_bg.jpg"}
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>

                  <div className="flex items-center flex-col">
                    <h6 className="text w-full text-left">
                      <strong>{each_project?.node?.projectName}</strong>
                    </h6>
                    <p className="font-italic text-left w-full">
                      {each_project?.node?.projectStatus}
                    </p>
                    <p className="text-left w-full">
                      {each_project?.node?.projectField}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>



  
</div>

    
    


      </Layout1>
    </div>
  );
};

export default Page;

// Export a getter function to access all_projects
export const getAllProjects = () => exportedProjects;
