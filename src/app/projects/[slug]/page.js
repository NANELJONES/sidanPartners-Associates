"use client"
import { usePathname } from "next/navigation";
import React from 'react'
import Layout1 from '@/app/layout/Layout1'
import { team, sample_projects } from '@/app/Data/Data'
import Image from 'next/image'
import { getSingleProject } from "@/app/api/queries";
import { useEffect, useState } from "react";
import { useStateContext } from "@/app/Context/StateContext";
import Modal from "@/app/components/Modal";
import { RichText } from "@graphcms/rich-text-react-renderer";

const Page = () => {
  const { show_modal, set_show_modal, set_url, dataState } = useStateContext();


  const pathname = usePathname(); // Get the current path
  const slug = pathname.split("/").pop(); // Extract the last segment of the path (slug)

  const [project, setProject] = useState(null); // Store the project data
  const [loading, setLoading] = useState(true); // Handle loading state

  useEffect(() => {

    const fetchProject = async () => {
      try {
        const fetchedProject = await getSingleProject(slug); // Pass slug dynamically
        // console.log("Fetched project:", fetchedProject); // Check if data is fetched
        setProject(fetchedProject); // Set the state with fetched data
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };

    if (slug) fetchProject(); // Fetch project only if slug is available
  }, [slug]);

  if (loading) return <p>Loading...</p>; // Show loading state

  if (!project) return <p>Project not found.</p>; // Handle missing project



  return (
<>
    {show_modal && <Modal></Modal>}
   
    <div className=' bg-primary_color  p-2 mx-auto max-w-[1500px] md:py-20 flex flex-col md:flex-row   gap-[2em] flex items-start    '>
  
    {project == null ?       <div className="w-full bg-primary_color h-[100dvh]"> Content Loading</div> : ""}
     
      <div className='w-full  z-[11] shadow-lg  md:block md:w-[30%] p-4 md:h-[100vh] flex-col items-start bg-primary_color sticky top-0 md:top-[50px]'>
           <div>
           <h2 className='text-text_color  font-primary_font_bold'>{project.projectName}</h2>
            <h6 className='text-text_color'>{project.projectField}</h6>
            <br/>
            <div className='flex hidden md:block flex-wrap items-start justify-end   gap-2 md:flex-col md:items-start md:justify-start justify-between'>

          
            <p className='text-text_color'><strong>Location :</strong> <br/> {project.projectLocation} <br/> </p>

            <br/>
            <p className='text-text_color font-thin'> <strong>Duration : </strong> <br/> {project?.duration}</p>
          
            <br/>
            <p className='text-text_color font-thin'> <strong>Project Status :</strong> <br/> {project?.projectStatus}</p>


            </div>
           </div>
       

      </div>

      <div className=' w-ful md:w-[60%] flex-col flex gap-4   '>
        {/* who we are */}
        <div >
            {/* <h3>Who are we?</h3> */}
            <div className='relative w-full h-[15em] lg:h-[30em] max-h-[400px] bg-blue-600 rounded-2xl'>
            <Image
                    src={project?.projectImages[0]?.url ? project?.projectImages[0]?.url: "/gallery_bg.jpg"}
                    fill
                    unoptimized
                    className="object-cover"
                  ></Image>
            </div>
            <br/>

        </div>
        <div className=' grid items-start gap-[1em] grid-cols-2 md:hidden '>

{/* <p className='text-text_color'> <strong>Client :</strong> <br/>  {project.clientName}</p> */}


<p className='text-text_color'><strong>Location :</strong> <br/> {project.projectLocation} <br/> </p>

{/* {project && (
  <>
    <p className="text-base font-thin"> <strong>Project Services</strong></p>
    {project.service.map((each_service, index) => (
      <p key={index}>-{each_service.serviceName}</p>
    ))}
  </>
)} */}




<p className='text-text_color '> <strong>Duration : </strong> <br/> {project?.duration}</p>

<p className='text-text_color'> <strong>Project Status :</strong> <br/> {project?.projectStatus}</p>




</div>


<div>
<h2 className="text-text_color font-primary_font_bold">Intro:</h2>
<br/>
<p className="text-text_color ">{project?.projectExcerpt}</p>
</div>

<div className="bg-primary_color   ">
<h2 className="  text-primary_color_light font-primary_font_bold">Target:</h2> 
 <h5 className=" text-primary_color_light">{project.target}</h5> 
</div>


<div>

</div>
        
           


       <div className="rich-text">
        <h2 className="text-text_color  font-primary_font_bold">Details:</h2>
        <br/>
        
       {/* <pre className="whitespace-pre-wrap text-[0.9em] break-words font-[Poppins]"></pre> */}


   <RichText className="rich-text " content={project.projectDetails.raw}></RichText>  
    


       </div>
       





          {/* Meet Our Team*/}
     <div  >
            <h2 className="font-primary_font_bold text-text_color ">Gallery  Media Of {project.projectName}</h2>
          <br/>
            <div className={`flex items-center justify-center  md:justify-start gap-[1em] 2xl:gap-[3em] w-full  flex-wrap  `}>
            {project?.projectImages && project.projectImages.length > 0 ? (
  project.projectImages.map((each_image, index) => (
    <div
      key={index}
      className={`w-[60vw] md:w-[20vw] shadow-2xl max-w-[300px] ${
        index % 2 === 0 ? '' : 'mt-0'
      }`}
      onClick={() => {
        set_show_modal(true);
        set_url(each_image.url);
      }}
    >
      <div className="relative w-full h-[70vw] md:h-[25vw] max-h-[300px]">
        <Image
          src={each_image?.url || ""}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
    </div>
  ))
) : (
  <p className="text-center w-full text-text_color ">No project images available.</p>
)}

        </div>
          

      </div>
          
     
     
      </div>
      

    

     
    </div>
    </>
  )
}

export default Page