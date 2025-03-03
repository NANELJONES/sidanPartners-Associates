"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimation , useScroll} from "framer-motion";
import { getTestimonials } from "../api/queries";
import { AllLines } from "../components/AllLines";
import Layout1 from "../layout/Layout1";
import { ToastContainer } from "react-toastify";
import AnimateDown from "../Animations/AnimateDown";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Page = () => {
  const [testimonials, setTestimonials] = useState({
    data: [],
    pageInfo: { hasNextPage: true, endCursor: null },
    isLoading: false,
    error: null,

    
  });

  const parent_div =  useRef(null)
  const {scrollYProgress}= useScroll()


  const [expandedTestimonial, setExpandedTestimonial] = useState(null);
  const controls = useAnimation();

  const fetchTestimonials = useCallback(async () => {
    if (testimonials.isLoading || !testimonials.pageInfo.hasNextPage) return;

    setTestimonials((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }));

    try {
      const { data, pageInfo } = await getTestimonials(10, testimonials.pageInfo.endCursor);
      setTestimonials((prev) => ({
        ...prev,
        data: [...prev.data, ...data],
        pageInfo: {
          hasNextPage: pageInfo.hasNextPage,
          endCursor: pageInfo.endCursor,
        },
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials((prev) => ({
        ...prev,
        isLoading: false,
        error: "Failed to load testimonials. Please try again later."
      }));
    }
  }, [testimonials.isLoading, testimonials.pageInfo.hasNextPage, testimonials.pageInfo.endCursor]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !testimonials.isLoading) {
      fetchTestimonials();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [testimonials.isLoading]);

  const getExcerpt = (text, limit = 20) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  };

  const toggleTestimonial = (index) => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index);
  };

  useEffect(() => {
    controls.start({ height: document.body.scrollHeight });
  }, [testimonials, controls]);

  return (
    <div className="relative bg-primary_color">
      <div className="bg-secondary_color right-0 absolute md:w-1/2 h-full"></div>
      <AllLines />
      <Layout1>
        <div className="p-[1em] lg:p-0  ">
          <ToastContainer />
          <div className="flex flex-col gap-[3em] md:flex-row">
            <div className="w-full layout_padding flex flex-col md:w-1/2 relative">
              <div className="md:sticky top-20 flex flex-col gap-[2em]">
                <h2 className="text-primary_color_light">
                  Hear from Those Who <br /> Trust Us!
                </h2>
                <AnimateDown>
                  <img
                    className="w-[70%] mx-auto md:mx-0 max-h-[350px] md:w-[70%]"
                    src="/imageries/reviews_concept.svg"
                    alt="Reviews Concept"
                  />
                </AnimateDown>
                <div className="h-full flex flex-col gap-[1em] md:gap-[0px] md:justify-between">
                  <span className="flex items-center w-full gap-2">
                    <IoArrowDownCircleOutline className="text-primary_color_light rotate-[-90deg] text-[3em] md:text-[6em]" />
                    <h5 className="text-primary_color_light">
                      "Don’t just take our word for it – hear from our clients! Discover why
                      businesses and homeowners trust Sidan Associates for their
                      design-to-construction needs."
                    </h5>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-1/2 gap-[1em] p-2">
            <div className="bg-primary_color p-4 shadow-lg   md:shadow-none md:bg-secondary_color sticky top-10 z-[2] py-4">
            <h1 className="text-[4em] md:text-[6em] text-secondary_color md:text-primary_color">Reviews</h1>
            <p className="text-secondary_color md:text-primary_color" >Total: {testimonials.data.length}</p>

            </div>
<br/>
              <div   className="w-full relative border  ">
            
                {testimonials.error && <p className="text-red-500">{testimonials.error}</p>}
                <div className=" scroll-smooth ">
                {/* <motion.div
                    className="absolute top-0 left-0 H w-2 bg-primary_color"
                  

                 
                  />
              */}
                  {testimonials.data.map((each_client, index) => (
                    <div
                      key={index}
                      className={`border-t-4   bg-primary_color h-auto  items-start shadow:md border-secondary_color justify-start p-10 max-w-[600px] flex flex-col transition-all duration-300 ease-in-out ${
                        expandedTestimonial === index ? "h-auto" : "h-[30em] max-h-[600px]"
                      }`}
                      onClick={() => toggleTestimonial(index)}
                    >
                      <h6 className="text-primary_color_light">
                        <strong>{each_client?.node?.personName}</strong>
                        <br />
                        <p className="text-primary_color_light">{each_client?.node?.personPosition}</p>
                      </h6>
                      <p className="text-primary_color_light border-t p-2">
                        {expandedTestimonial === index
                          ? each_client.node?.testimony
                          : getExcerpt(each_client.node?.testimony)}
                      </p>
                      <button
                        className="text-primary_color_light mt-2 bg-none bg-transparent rounded-none border-0 p-1 border border-b-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTestimonial(index);
                        }}
                      >
                        {expandedTestimonial === index ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  ))}
                  {testimonials.isLoading && <p className="text-primary_color_light">Loading more testimonials...</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout1>
    </div>
  );
};

export default Page;
