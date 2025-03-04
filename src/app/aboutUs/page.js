"use client";
import React from "react";
import Layout1 from "../layout/Layout1";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineEngineering } from "react-icons/md";
import { IoIosClock } from "react-icons/io";
import { teamMate } from "../Data/Data";
import { WordAnimation } from "../components/TextsAnimations";
import AnimateDown from "../Animations/AnimateDown";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import AnimateUp from "../components/AnimateUp";
import { useEffect } from "react";
import { getTeam } from "../lib";
import SimpleData from "../components/Data Stats/SimpleData";

const Page = () => {
  const parent_div = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parent_div,
  });




  const Tangent_div = () => {
    const active_height = [
      { height: "100%" },
      { height: "70%" },
      { height: "50%" },
      { height: "90%" },
      { height: "75%" },
      { height: "65%" },
    ];
  
    return (
      <div className="flex w-full h-full  gap-[1em] items-start justify-center">
        {active_height.map((each_div, index) => (
          <div
            key={index}
            className="w-1/5 bg-gradient-to-b from-secondary_color to-transparent animate-scaleUp"
            style={{
              height: each_div.height,
              animationDelay: `${index * 0.5}s`, // Incrementally delay each animation by 0.5s
              animationIterationCount: "infinite", // Infinite loop
              animationDuration: "3s", // Ensures each animation lasts for 2s
              animationFillMode: "both", // Ensures animation stays in effect
            }}
          ></div>
        ))}
      </div>
    );
  };
  


  const UniqueAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const what_sets_us_apart = [
      {
        title: "End-to-End Solutions",
        description: `All coordination issues between design and construction teams are eliminated and clients enjoy 
        the convenience of having all services under one roof, ensuring consistency, efficiency, and accountability 
        throughout the process.`,
        image: <img src="/end-to-end.png" alt="End-to-End Solutions" className="w-full h-auto" />,
      },
      {
        title: "Sustainable and Innovative Practices",
        description: `Our environmentally responsible designs ensure cost-effective, energy-efficient solutions that 
        reduce long-term operational costs.`,
        image: <img src="/sustainable.png" alt="Sustainable and Innovative Practices" className="w-full h-auto" />,
      },
      {
        title: "Client-Centric Approach",
        description: `Sidan emphasizes open communication, ensuring clients are involved and satisfied at every stage 
        of the project. We share regular updates by creating feedback loops for transparency and trust. Additionally, 
        we ensure our personalized solutions reflect the client’s vision.`,
        image: <img src="/client-centric.png" alt="Client-Centric Approach" className="w-full h-auto" />,
      },
      {
        title: "Expertise and Excellence",
        description: `Our deep industry knowledge and technical proficiency highlight our commitment to delivering 
        high-quality results. Our expertise spans various industries, ensuring innovative and functional designs for 
        all types of projects. Check our proven track record of delivering projects that exceed expectations.`,
        image: <img src="/expertise.png" alt="Expertise and Excellence" className="w-full h-auto" />,
      },
      {
        title: "Timely Delivery",
        description: `We take our commitments seriously, ensuring adherence to agreed timelines with detailed project 
        schedules and regular progress updates.`,
        image: <img src="/timely-delivery.png" alt="Timely Delivery" className="w-full h-auto" />,
      },
      {
        title: "Value-Driven Pricing",
        description: `We deliver premium services at competitive rates and in return, clients receive top-quality 
        work that offers long-term value for their investment. It’s a win-win situation!`,
        image: <img src="/value-pricing.png" alt="Value-Driven Pricing" className="w-full h-auto" />,
      },
      {
        title: "Strong Focus on Collaboration",
        description: `Our secret to fostering positive and sustainable relationships is working closely with clients, 
        stakeholders, contractors, suppliers, and communities to achieve shared goals. Harmonizing efforts will 
        ensure efficient project execution.`,
        image: <img src="/collaboration.png" alt="Strong Focus on Collaboration" className="w-full h-auto" />,
      },
      {
        title: "Commitment to Quality and Safety",
        description: `Our construction solutions are reliable and built to last, with safe and compliant work 
        environments for all stakeholders.`,
        image: <img src="/quality-safety.png" alt="Commitment to Quality and Safety" className="w-full h-auto" />,
      },
    ];
    
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="w-full hover:cursor-pointer hover:bg-  ">
        {what_sets_us_apart.map((item, index) => (
          <AnimateDown>

       
          <div key={index} className="border-b-2 hover:bg-text-primary_color  border-primary_color">
            <div
              className="w-full flex justify-between items-center p-4 text-left  transition duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <h5 className=" md:hidden   ">{item.title}</h5>
              <h4 className="hidden md:block   ">{item.title}</h4>

              <span className=" text-primary_color">{activeIndex === index ? "−" : "+"}</span>
            </div>
  
            {activeIndex === index && (
              <div className="p-4   ">
<h5 className="hidden md:block w-full  md:w-2/3">{item.description}</h5>
                <h6 className="w-full md:hidden  md:w-2/3">{item.description}</h6>
                {/* <div className="mt-3">{item.image}</div> */}
              </div>
            )}
          </div>
          </AnimateDown>
        ))}
      </div>
    );
  };
  
  
  


  const Tangent_div2 = () => {
    const active_height = [
      { height: "100%" },
      { height: "70%" },
      { height: "50%" },
      { height: "90%" },
      { height: "75%" },
      { height: "65%" },
    ];
  
    return (
      <div className="flex w-full rotate-180 h-full   gap-[1em] items-start justify-center">
        {active_height.map((each_div, index) => (
          <div
            key={index}
            className="w-1/5 bg-gradient-to-b from-secondary_color animate-scaleUp to-transparent"
            style={{
              height: each_div.height,
              animationDelay: `${index * 0.5}s`, // Incrementally delay each animation by 0.5s
              animationIterationCount: "infinite", // Infinite loop
              animationDuration: "3s", // Ensures each animation lasts for 2s
              animationFillMode: "both", // Ensures animation stays in effect
            }}
          ></div>
        ))}
      </div>
    );
  };

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [team, set_team] = useState([]);

  const fetchTeam = async () => {
    try {
      const all_teams = await getTeam();
      console.log("Fetched Team:", all_teams); // Check if data is fetched
      set_team(all_teams); // Set the state with fetched data
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
     fetchTeam();
  }, []);

  const [values, set_values] = useState([
    {
      title: "Excellence",
      description: "Top-notch quality that exceeds expectations.",
      icons: <FaMedal />,
    },

    {
      title: "Innovation",
      description: "Designs and techniques built to last.",
      icons: <HiOutlineLightBulb />,
    },

    {
      title: "Solution-Oriented",
      description: "Challenges are opportunities for creative solutions.",
      icons: <MdOutlineEngineering />,
    },

    {
      title: "Timelessness",
      description: " Delivering your dreams on schedule.",
      icons: <IoIosClock />,
    },
  ]);

  return (
    <div className="w-full bg-secondary_color py-8">
      <div className=" relative  transition ease-in-out duration-600 p-4 mx-auto max-w-[1500px] md:py-20  flex flex-col gap-[3em]   relative  ">
        {/* Hero Section */}
        <div className="flex flex-col gap-2    relative border-primary_color h-auto md:h-[50vw] md:max-h-[600px] max-h-[ ">
        <AnimateDown>  <h1 className="text-[5em] lg:text-[10em]  text-left z-[3]   font-primary_font_bold ">About Us</h1></AnimateDown>
        
        
          <div className="flex w-full h-[100%] items-start gap-2">
            {/* left side */}
            <div className=" md:w-[50%]  h-[100%] flex flex-col gap-[1em] md:gap-[0px] md:justify-between ">
              <span className="flex items-center w-full md:w-2/3 md:w gap-2">
                <IoArrowDownCircleOutline className="text-primary_color rotate-[-45deg] text-[3em]" />
                <h5>
                  Get to know more about us and discover who we are as a company.{" "}
                </h5>
              </span>

        <AnimateUp>
              <video
                src="/Us/About Us Intro.mp4"
                muted
                autoPlay
                loop
                controls={false}
                className="md:hidden  w-full mx-auto self-end  object-contain"
              />
</AnimateUp>

<AnimateDown>
              <span className="flex flex-col justify-between w-2/3  md:flex-row items-center gap-2 md:gap-[4em]">
                <p>
                <strong> Building the Future for Today!— </strong>By creating solutions that shape tomorrow while making an impact today. 
                </p>

                {/* <p>
                  SIDAN is a Ghana-based design-to-construction company,
                  comprising a team of{" "}
                </p> */}
              </span>
              </AnimateDown>
            </div>

            {/* Right side */}
            <div className="w-full  hidden md:block items-center   md:w-[50%]  h-auto flex flex-col   justify-between ">
              <video
                src="/Us/About Us Intro.mp4"
                autoPlay
                playsInline
                muted
               loop
                className=" w-full  md:absolute md:bottom-0 md:right-0  max-w-[70vw] md:max-w-[450px] lg:max-w-[600px] md:w-[50%]  object-contain"
              />
            </div>
          </div>
        </div>

        {/* About Us Intrp Section */}
        <div className="flex  relative gap-[2em]">
          <div className="hidden  md:block md:w-1/2   ">
            <h2 className="sticky top-20 text-[4em] bg-secondary_color  border-b-4 border-primary_color self-start">
              Who We Are
            </h2>

            <h2 className="sticky mt-[9em] bg-secondary_color b text-[4em] border-b-4 border-primary_color top-40">
              Mission and Vision
            </h2>

            <div className=" mt-[20em] sticky top-60  bg-secondary_color">
              <h2 className="  text-[4em]  ">Our Core Values</h2>

              <img
                src="/our values image.svg"
                className="w-full max-w-[400px] opacity-50 object-cover"
              ></img>
            </div>
          </div>

          <div className=" md:w-1/2  ">
            <div className="bg-primary_color p-[2em] flex flex-col gap-[3em] md:gap-[5em] py-[5em]">
         <div className="flex flex-col gap-[1em]">
         <h3 className="text-text_color font-primary_font_medium md:hidden">Who We Are</h3>
              <p className="columns-2 md:columns-1 lg:columns-2 text-text_color">
                SIDAN is a Ghana-based design-to-construction company,
                comprising a team of expert, skilled, and solution-oriented
                professionals in the design and construction industry, boasting
                diverse experiences. We are dedicated to providing our clients
                with an exhilarating design-to- construction journey through our
                unique and sustainable design ideas and construction processes.
                With our unwavering commitment to quality and innovation, we
                strive to ensure that all our clients experience sheer
                satisfaction from the inception of designs to the flawless
                execution of construction projects.
              </p>
         </div>
              <img
                className="w-full max-h-[300px] object-cover"
                src="/Who We Are.png"
              ></img>

              <div className="flex flex-col gap-[1em]">
                <h3 className="font-primary_font_medium text-text_color">Our Mission</h3>
                <p className=" text-text_color">
                  To provide the best design-to-construction experience
                  globally, delivering exceptional quality, functionality, and
                  comfort.
                </p>
              </div>

              <div className="flex flex-col gap-[1em]">
                <h3 className="font-primary_font_medium text-text_color ">Our Vision</h3>
                <p className="text-text_color">
                  To provide the best design-to-construction experience
                  globally, delivering exceptional quality, functionality, and
                  comfort.
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-[2em] py-[5em] items-center justify-center ">
              <img
                src="/our values image.svg"
                className="self-end   w-full max-w-[250px] md:max-w-[300px]  md:max-w-[200px] object-cover"
              ></img>
   <h2 className="text-primary_color self-start md:hidden font-primary_font_medium text-left">Core Values</h2>
              {values.map((value, index) => (

                <AnimateDown>
                <div
                  key={index}
                  className="flex flex-col items-start w-full gap-[1em]"
                >


                  <div className="flex gap-[1em] ">
                    <span className="text-secondary_color bg-primary_color text-[1.3em] rounded-md p-[0.5em]">
                      {value.icons}
                    </span>
                    <h3 className="hidden md:block text-primary_color ">{value.title}</h3>
                    <h4 className="md:hidden text-primary_color ">{value.title}</h4>
                  </div>

                  <p className="text-primary_color">{value.description}</p>
                </div>
                </AnimateDown>
              ))}
            </div>
          </div>
        </div>

        {/* The Sidan Advantage */}
        <div className="bg-primary_color overflow-hidden max-h-[700px] items-center min-h-[300px]  md:min-h-[80vh] gap-[1em] md:max-h-[700px]  flex flex-col md:flex-row">
         <div className=" md:hidden w-full h-[30vh]"> 

          <Tangent_div />
         </div>
         
          <div className="w-full md:w-1/2 flex flex-col gap-[1em] p-[2em] md:p-[5em]">
            <h3 className="text-primary_color_light">Why us?</h3>

            <h3 className="text-primary_color_light font-thin">
              Choosing Us Means Choosing the <br/>
            </h3>
            <h1 className="border-b-[0.3em]  font-primary_font_medium  md:text-[4em] py-[0.1em] text-primary_color_light border-primary_color_light">
              Sidan Advantage
            </h1>
           
            <h6 className="text-primary_color_light">
              Everything we do revolves around providing an exceptional
              experience for our clients. From delivering top-quality
              workmanship to ensuring timely project completion, we prioritize
              your satisfaction every step of the way.
            </h6>
          </div>

          <div className=" md:hidden w-full h-[30vh]"> 

<Tangent_div2 />
</div>

          <div className="hidden md:flex md:w-1/2 h-[80vh] flex flex-col justify-between">
            <Tangent_div />
            <Tangent_div2 />
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="flex flex-col gap-[2em] md:p-[2em]">

          <h2 className="text-primary_color md:text-[4em] font-primary_font_medium">What sets us "A-part"?</h2>
          <UniqueAccordion />
        </div>

        {/* Outro */}
        <div className="flex flex-col py-[1em] max-w-[800px] mx-auto items-center gap-[1em] md:p-[2em]">
      <WordAnimation>   
         <h3 className="text-primary_color text-center ">
          Choosing the
          </h3></WordAnimation>

<WordAnimation>
          <h1 className="hidden md:flex text-primary_color font-primary_font_medium text-center bg-primary_color text-secondary_color px-[0.5em] ">
         Sidan Advantage
          </h1>
          </WordAnimation>


          <WordAnimation>
          <h3 className="md:hidden text-primary_color font-primary_font_medium text-center bg-primary_color text-secondary_color px-[0.5em] ">
         Sidan Advantage
          </h3>
          </WordAnimation>




<WordAnimation>
          <h3 className="hidden md:block text-primary_color text-center ">
 gets you a thorough design, a precise budget that saves you
          money and a seamlessly coordinated schedule, ensuring excellence at every step.
          </h3>
          </WordAnimation>

          <WordAnimation>
          <h5 className=" md:hidden text-primary_color text-center ">
 gets you a thorough design, a precise budget that saves you
          money and a seamlessly coordinated schedule, ensuring excellence at every step.
          </h5>
          </WordAnimation>

          <motion.svg
      width="100%"
      height="50"
      viewBox="0 0 1003 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.path
        d="M0.508373 33.8137C388.156 14.9021 1127.48 -15.9567 983.602 11.9007C803.754 46.7225 275.781 14.0118 386.421 37.696C497.061 61.3803 697.924 33.6106 710.62 48.751"
        stroke="#20639B"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>

        </div>


        {/* Our Team Section */}
        
<AnimateUp>
         
         <div  id="teammates" className="flex flex-col  md:flex-row gap-[1em] items-start">
    <div className="flex flex-col gap-[1.5em] md:w-1/2  md:sticky md:top-20">
  
  <AnimateDown> <h1 className="font-primary_font_medium md:text-[4em]">Meet our <br/> dedicated Experts</h1></AnimateDown> 
                
                <h3>Behind Every Great Build Is a Great Team</h3>
                {/* <h6>{`Choosing the 'Sidan Advantage' gets you a thorough design, a precise budget that saves you
money and a seamlessly coordinated schedule, ensuring excellence at every step.`}</h6> */}
               
    </div>

                <div className="flex items-center justify-center md:w-1/2 md:justify-start   gap-[1em] 2xl:gap-[3em] w-full  flex-wrap ">
              {team.map((each_team, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[80vw] md:w-[20em] shadow-2xl max-w-[350px] ${index % 2 === 0 ? 'lg:mt-[10em]' : ''}`}
                  >
                    <div className="relative w-full h-[70vw] md:h-[25vw] max-h-[300px]">
                      <Image
                        src={each_team?.node?.employeeImage?.url}
                        fill
                        unoptimized
                        className="object-cover"
                      ></Image>
                    </div>
                  
                    <div className="w-full hover:text-amber-500 duration-500  bg-primary_color  p-5 md:p-5  flex flex-col items-center justify-evenly ">
                      <h6 className=" text-center  text-white md:text-left w-full   ">
                        {each_team?.node?.employeeName}
                      </h6>
    
                      <p className="italic text-white  text-center md:text-left w-full    ">
                        {each_team?.node?.employeePosition}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
    
    
          </div>
    
          </AnimateUp>
      



      </div>
    </div>
  );
};

export default Page;
