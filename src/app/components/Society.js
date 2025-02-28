"use client";
import React, { useState } from 'react';
import AnimateUp from './AnimateUp';

const Society = () => {
  const [showMore, setShowMore] = useState(null);

  const toggleDetails = (csrName) => {
    setShowMore(showMore === csrName ? null : csrName);
  };

  const csrData = [
    {
      Csr_Name: "Sustainability and Environmental Responsibility",
      Csr_Details: "We are committed to sustainable practices, focusing on reducing our carbon footprint, promoting recycling, and supporting environmental conservation initiatives. Our team actively engages in charity programs aimed at enhancing sustainability in our communities.",
      Csr_Icon: "/csr icons/carbon_sustainability.svg",
    },
    {
      Csr_Name: "Community Development and Social Impact",
      Csr_Details: "Our dedication to community development involves collaborating with local organizations to enhance education, healthcare access, and poverty alleviation initiatives. We strive to create a positive social impact through active participation and investment in our communities.",
      Csr_Icon: "/csr icons/ri_user-community-line.svg",
    },
    {
      Csr_Name: "Employee Welfare and Safety",
      Csr_Details: "We prioritize the well-being and safety of our employees by fostering a supportive work environment. Our initiatives focus on mental health resources, safe working conditions, and programs that promote work-life balance, ensuring our team members thrive both personally and professionally.",
      Csr_Icon: "/csr icons/clarity_employee-line.svg",
    },
    {
      Csr_Name: "Ethical Business Practices and Governance",
      Csr_Details: "Our commitment to ethical business practices is reflected in our transparent governance structure. We adhere to high standards of integrity, ensuring fair treatment for all stakeholders, and actively engage in responsible decision-making that supports ethical behavior in our operations.",
      Csr_Icon: "/csr icons/ri_government-fill.svg",
    },
  ];

  return (
    <div className="relative md:p-[4em] shadow-md  bg_blur flex flex-col gap-10 p-4">
      <h1 className=" hidden  md:block leading-[1.5em]  md:w-[70%] text-white">
       <p className='text-white'>Our</p> Sustainable Development Goals (CSR)
      </h1>
   
      <h3 className=" md:hidden  md:block leading-[1.5em]  md:w-[70%] text-white">
       <p className='text-white'>Our</p> Sustainable Development Goals (CSR)
      </h3>
    

      <p className ="md:w-2/3 text-white">
      We are committed to sustainable practices, focusing on reducing our carbon footprint, promoting recycling, and supporting environmental conservation initiatives.
        <br />

      
      </p>

      <div className="flex flex-wrap items-center  justify-around gap-10 transition">
        {csrData.map((csr, index) => (
          <div key={index} className={`transition-all duration-500  bg-primary_color ${showMore === csr.Csr_Name ? ' w-full  md:w-[70%]  py-[3em] max-w-[500px] ' : 'max-w-[250px]'}`}>
            <AnimateUp> 
              <div 
                className=" p-4 h-[20em] flex shadow-xl flex-col justify-end relative"
              >
                <img
                  className={`w-[5em]  absolute top-4 right-4 max-w-[40px] ${showMore  === csr.Csr_Name ? 'top-[-20px]' : ''} `}
                  src={csr.Csr_Icon}
                  alt={csr.Csr_Name}
                />
                <div className="h-auto self-end">
                  <h5 className={` text-[1em] text-white font-medium leading-[1.4] md:text-[1.3em] md:w-full md:leading-[1.5] 2xl:text-[20px] 2xl:leading-[1.6] ${showMore === csr.Csr_Name ? 'md:w-1/2' :""}`}>
                    {csr.Csr_Name}
                  </h5>
                  <br/>
                  {showMore === csr.Csr_Name && (
                    <p className="text-white">{csr.Csr_Details}</p>
                  )}
                  <button
                    className="bg-none text-white border-none text-left border-b-2 border-white  p-2 w-2/3"
                    onClick={() => toggleDetails(csr.Csr_Name)}
                  >
                    {showMore === csr.Csr_Name ? "Show Less " : "Read More"}
                  </button>
                </div>
              </div>
            </AnimateUp>
          </div>
        ))}
      </div>

   
      <p className =" text-white border-l-8 border-primary_color px-2 md:w-1/3">
      We are committed to sustainable practices, focusing on reducing our carbon footprint, promoting recycling, and supporting environmental conservation initiatives.
    
      
      
      </p>
      <button className=' bg-none max-w-[200px] bg-primary_color rounded-none  text-white'>Read More</button>
     
    </div>
  );
};

export default Society;
