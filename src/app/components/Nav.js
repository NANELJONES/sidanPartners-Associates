"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [show_nav, set_show_nav] = useState(false);
  const [sub_menu, set_sub_menu] =  useState("")

  const nav_options = [

    { nav_name: "Home", nav_icon: "./menu.svg", nav_link: "/" },
    { nav_name: "Services", nav_icon: "./menu.svg", nav_link: "/services" },
   
    { nav_name: "Resources", nav_icon: "./menu.svg", nav_link: "/", sub_menu:[
      {"sub_link_name":"Portfolio", "sub_link_link":"/projects"  },
      {"sub_link_name":"Blog and Updates", "sub_link_link":"/blog"  },

      {"sub_link_name":"Brochure", "sub_link_link":"/projects"  },
      
    
    
    ] },  

  
   
    // { nav_name: "Community", nav_icon: "./menu.svg", nav_link: "/", sub_menu:[
    //   {"sub_link_name":"Facebook Community", "sub_link_link":"https://web.facebook.com/plasticpunch"  },
    //   {"sub_link_name":"X", "sub_link_link":"https://x.com/PlasticPunchGH"  },
    //   {"sub_link_name":"Discord", "sub_link_link":"/"  },
     
    
    // ] },
  
    { nav_name: "Reviews", nav_icon: "./menu.svg", nav_link: "/reviews" },
   
    { nav_name: "About Us", nav_icon: "./menu.svg", nav_link: "/aboutUs" },
     { nav_name: "Careers", nav_icon: "./menu.svg", nav_link: "/joinUs" },
    { nav_name: "Contact Us", nav_icon: "./menu.svg", nav_link: "/contactUs" },
  ];

  return (
    <div className="fixed top-0 w-full font-thin overflow-y z-[20] backdrop-blur-md">
      {/* Toggle button for small screens */}
      <Image
        src={show_nav ? "/close.svg" : "/menu.svg"}
        alt="menu"
        width={30}
        height={30}
        className="absolute top-4 left-4 md:hidden bg-primary_color p-2 rounded-sm z-[200] cursor-pointer"
        onClick={() => set_show_nav(!show_nav)}
      />

      {/* Navigation menu */}
      <div
 className={`${
  show_nav ? "block pt-20" : "hidden"
} md:flex example flex-cols items-start md:flex-row md:gap-10 md:items-center p-4 md:p-2 
w-[80%] md:w-full 
h-screen md:h-auto 
max-h-screen md:min-h-[15px]  
overflow-y-auto md:overflow-visible 
justify-around shadow-md bg-primary_color`}   
      >
       <img
          src="/Logo.png"
          alt="Company Logo"
          
          className=" hidden md:block   max-w-[100px] md:max-w-[90px]   w-[12em]"
        />

        <div className="flex flex-col md:flex-row gap-4  h-auto items-start justify-start md:items-center">
          {nav_options.map((each_value) => (
            <div key={each_value.nav_name} className="relative  " onMouseEnter={()=>{each_value?.sub_menu ? set_sub_menu( each_value.nav_name) :set_sub_menu ("") }}  onMouseLeave={()=>{ set_sub_menu ("") }}  > 
                <Link href={each_value.nav_link} >
             <p 
              onClick={()=>{ set_show_nav(false)}}
             
             className="text-white  text-left md:hover:text-[1.3em] md:hover:font-semibold transition-all duration-500 md:text-center text-[1.5em] md:text-[0.8em]  cursor-pointer">

                {each_value.nav_name}
              </p>
            </Link>  

            {each_value?.sub_menu && sub_menu ===  each_value.nav_name  ? <div className="px-10 md:absolute  md:shadow-xl md:rounded-sm md:top-[2em] md:bg-primary_color  md:w-[15em] md:h-[14em] flex flex-col justify-around items-start px-4   " >
              {each_value?.sub_menu.map((each_sublink, index)=> {
               return <Link href={each_sublink.sub_link_link} key={index}> <p className="text-white md:hover:text-[1.1em] md:hover:font-semibold transition-all duration-500  text-[1.2em] md:text-[0.8em]  cursor-pointer">{each_sublink.sub_link_name} </p> </Link>
              })}
              


            </div> : "" }
             </div>
            
          ))}
        </div>
    <img
          src="/Logo.png"
          alt="Company Logo"
          
          className="w-[15em] max-w-[150px]  mt-2 md:hidden md:w-[12em]"
        />
      </div>
    </div>
  );
};

export default Nav;
