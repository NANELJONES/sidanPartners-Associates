"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import { getClients } from '../api/queries';



const Clients = () => {
const [client_logos, setClientLogos] = useState([]);

  useEffect(() => {
    getClients().then((clients) => {
      const logos = clients.map((client) => client);
      setClientLogos(logos);
    });

    console.log(client_logos);

  }, []);


  const [company_name, set_company_name] = useState("")

  return (
    <div className="w-full p-[2em] md:p-[5em] bg-primary_color border-secondary_color">
      <div className="gap-5 items-start">
        <h1 className='text-white'>Our trused<br /> Partners Over The Years</h1>
      </div>
      <br />
      <p className="w-full text-white md:w-2/3 lg:w-1/2">
        We are proud to collaborate with trusted partners and serve clients across a variety of industries. Our success is founded on strong relationships with developers, architects, suppliers, and corporate clients, all of whom share a commitment to high standards.
      </p>



      {/* Swiper for client logos */}
      <Swiper
        slidesPerView={"auto"} // Adjust number of visible slides
        spaceBetween={1} // Space between slides
        pagination={{ clickable: true }}
        navigation={true}
        centeredSlides={true} // Center the slides
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Auto slide with a 1 second delay, continue on interaction
        loop={true} // Infinite loop
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper  relative mt-[2em] md:mt-[5em]"
      >
        {client_logos.map((each_client, index) => (
<SwiperSlide
  key={index}
  className="relative w-[200px] h-auto shadow-md my-auto ml-4 max-w-[200px] md:max-w-[150px] flex flex-col items-center justify-center bg-[rgba(186, 186, 186, 0.7)]"
  onMouseEnter={()=>{
    set_company_name(each_client?.node?.partnerName)
  } }


  onMouseLeave={()=>{
    set_company_name("")
  }

  }
  

>
  {/* Logo */}
  <img
    src={each_client.node.partnerLogo.url}
    className="h-2/3  object-contain"
    alt={`client-${index}`}
  />

  {/* Partner Name */}
  {company_name === each_client.node.partnerName ?   <p className=" w-full flex items-center justify-around absolute top-0 h-full  text-center text-white  z-10 bg-black/50 p-1">
    {each_client.node.partnerName}
  </p> : ""}
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
