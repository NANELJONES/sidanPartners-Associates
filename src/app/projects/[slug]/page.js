"use client"
import { usePathname } from "next/navigation";
import React from 'react'
import Layout1 from '@/app/layout/Layout1'
import { team, sample_projects } from '@/app/Data/Data'
import Image from 'next/image'
import { getSingleProject } from "@/app/lib";
import { useEffect, useState } from "react";
import { useStateContext } from "@/app/Context/StateContext";
import Modal from "@/app/components/Modal";

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
   
    <div className=' p-10 mx-auto max-w-[1500px] md:py-20 flex flex-col md:flex-row   gap-10 flex items-start    '>
  
    {project == null ?       <div className="w-full bg-primary_color h-[100dvh]"> Content Loading</div> : ""}
     
      <div className='w-full z-[11]  md:block md:w-[30%] p-10 md:h-[100vh] flex-col items-start bg-primary_color sticky top-0 md:top-[50px]'>
           <div>
           <h4 className='text-white '>{project.projectName}</h4>
            <h5 className='text-white'>{project.projectField}</h5>
            <br/>
            <div className='flex hidden md:block flex-wrap items-start justify-end   gap-2 md:flex-col md:items-start md:justify-start justify-between'>

          
            <p className='text-white'><strong>Location :</strong> <br/> {project.projectLocation} <br/> </p>

            <br/>
            <p className='text-white font-thin'> <strong>Start Date : </strong> <br/> {project?.startDate}</p>
            <p className='text-white font-thin'> <strong>End Date :</strong><br/>  {project?.endDate}</p>
            <br/>
            <p className='text-white font-thin'> <strong>Project Status :</strong> <br/> {project?.projectStatus}</p>


            </div>
           </div>
       

      </div>

      <div className='w-ful md:w-[60%] flex-col flex  gap-10   '>
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
        <div className='flex block md:hidden flex-wrap items-start justify-end   gap-2 md:flex-col md:items-start md:justify-start justify-between'>

<p className='tex'> <strong>Client :</strong> <br/>  {project.clientName}</p>
<br/>

<p className='text-'><strong>Location :</strong> <br/> {project.projectLocation} <br/> </p>
<br/>
{/* {project && (
  <>
    <p className="text-base font-thin"> <strong>Project Services</strong></p>
    {project.service.map((each_service, index) => (
      <p key={index}>-{each_service.serviceName}</p>
    ))}
  </>
)} */}



<br/>
<p className='text- font-thin'> <strong>Start Date : </strong> <br/> {project?.startDate}</p>
<p className='text- font-thin'> <strong>End Date :</strong><br/>  {project?.endDate}</p>
<br/>
<p className='text- font-thin'> <strong>Project Status :</strong> <br/> {project?.projectStatus}</p>




</div>


<div>
<h4>Intro:</h4>
<p>{project?.projectExcerpt}</p>
</div>

<div className="bg-primary_color p-20">
<h5 className="text-white">Target:</h5> 
 <h5 className="text-white">{project.target}</h5> 
</div>


<div>

</div>
        
           


       <div>
        <h4>Details:</h4>
       <pre className="whitespace-pre-wrap text-[0.9em] break-words font-[Poppins]"> {project.projectDetails}</pre>
    


       </div>
       





          {/* Meet Our Team*/}
     <div  >
            <h4>Gallery  Media Of Our Project</h4>
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
  <p className="text-center w-full">No project images available.</p>
)}

        </div>
          

      </div>
          
     
     
      </div>
      

    

     
    </div>
    </>
  )
}

export default Page