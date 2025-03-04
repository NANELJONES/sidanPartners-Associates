"use client"
import React from 'react'
import { blog_info } from '../Data/Data'
import Layout1 from '../layout/Layout1'
import AnimateUp from '../components/AnimateUp'
import {Blog} from '../components/Blog/Blog'
import { IoArrowDownCircleOutline } from "react-icons/io5";

import { HeadersCollection2 } from '../components/AllHeaders/HeadersCollection'


const page = () => {
  // console.log(blog_info.data.postsConnection.edges)
  return (
    <div className='w-full bg-secondary_color'>
    
    <Layout1>
       {/* <HeadersCollection2 heading="Our" second_heading="Blogs" sub_heading="Get in touch with our latest blogs, from all around the world regarding our various inputs and projects." source="/Gal.png"  bg_image="/Gal.png"></HeadersCollection2> */}
       <div className="flex flex-col gap-2    relative border-primary_color h-auto ">
          <h1 className="text-[5em] lg:text-[8em] text-left font-primary_font_bold ">Our Blog</h1>
          <div className="flex w-full h-[100%] mx-auto items-start gap-2">
            {/* left side */}
            <div className=" md:w-[50%]  h-[100%] flex flex-col gap-[1em] md:gap-[0px] md:justify-between ">
              <span className="flex items-center w-full md:w-2/3 md:w gap-2">
                <IoArrowDownCircleOutline className="text-primary_color rotate-[-45deg] text-[3em] md:text-[6em] " />
                <h5>
                Gain insights from industry trends, eco-friendly innovations, and expert tips on design and
                construction.
                  with{" "}
                </h5>
              </span>

 
        
            </div>

         
          </div>

        </div>
      <Blog></Blog>

    </Layout1>
    </div>
  )
}

export default page