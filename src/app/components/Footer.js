import React from "react";
import Layout2 from "../layout/Layout2";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import Subscribe from "./Subscribe";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between mt-2 md:mt-[20px] gap-[2em] md:py-20 bg-secondary_color relative z-[2]">
      <Layout2>
        <div className="flex flex-col gap-2">
          <h1 className="text-primary_color text-center w-full md:text-left">
            Get In touch 
          </h1>

          <div className="w-full h-[1px] bg-primary_color"></div>
          <br />
          <div className="normal_div items-start gap-10">
            <div className="w-full md:w-[30%] md:w-flex flex-col items-center gap-4 md:block">
              <h2 className="text-primary_color text-center md:text-left">Socials</h2>
              <div className="flex w-full flex-col md:mt-[2em] items-center gap-4 md:items-start flex-wrap">
                <SocialIcons
                  icon={<CiFacebook />}
                  icon_path="/socialIcons/facebook.svg"
                  text="Sidan Associates and Partners"
                  url="https://web.facebook.com/p/Sidan-Architects-Partners-100089776124049/?_rdc=1&_rdr#"
                />
                <SocialIcons
                  icon={<FaInstagram />}
                  icon_path="/socialIcons/instagram.svg"
                  text="sidanassociates_partners"
                  url="https://www.instagram.com/sidanassociates_partners/"
                />
                <SocialIcons
                  icon={<FaYoutube />}
                  icon_path="/socialIcons/youtube.svg"
                  text="Sidan Associates & Partners"
                  url="https://www.youtube.com/@SidanAssociates"
                />
                <SocialIcons
                  icon={<CiLinkedin />}
                  icon_path="/socialIcons/linkedin.svg"
                  text="Sidan Associates & Partners."
                  url="https://www.linkedin.com/company/sidan-associates-partners/"
                />
              </div>
            </div>

            <div className="w-full md:w-[30%] md:w-flex flex-col items-center gap-4 md:block">
              <h2 className="text-primary_color text-center md:text-left">Contact</h2>
            

                           {/* Phone */}
                           <span className="flex md:mt-[2em]  flex-col md:flex-row items-center gap-2 md:gap-5">
                <FaPhoneAlt className="text-primary_color text-[1em]" />
                <span className="flex flex-col items-center md:items-start">
                  <p className="text-primary_color">++233 55 141 4038</p>
                </span>
              </span>
<br/>

              <Link href="https://www.google.com/maps/place/Sidan+Associates+and+Partners/@5.6639714,-0.1380203,15z/data=!4m6!3m5!1s0xfdf830003157015:0x4f68b6ad3756383!8m2!3d5.6639714!4d-0.1380203!16s%2Fg%2F11wq3mgxn6?sa=X&ved=1t:2428&ictx=111&coh=225984&entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D">
              <span className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
            
                <FaLocationDot className="text-primary_color text-[1em]" />
                <p className="text-primary_color text-center md:text-left">
                  FC262 Sika-Bu Rd, Adenta Municipality, Ghana
                </p>
              </span>
              </Link>
              <br />

 


              <span className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
                <MdEmail className="text-primary_color text-[1em]" />
                <span className="flex flex-col items-center md:items-start">
                  <p className="text-primary_color">hello@sidanassociates.com</p>
                </span>
              </span>
            </div>
          </div>
          <br />
          <Subscribe />

          <br/>
          <div className='normal_div '>
  <Link href={"#"}> 
    <p className='text-primary_color  p-2'>Our Company</p>
  </Link>
  <Link href={"/services"}> 
    <p className='text-primary_color  p-2 w-full'>Our Services</p>
  </Link>
  <Link href={"/projects"}> 
    <p className='text-primary_color  p-2'>Projects</p>
  </Link>
  <Link href={"/faq"}> 
    <p className='text-primary_color  p-2'>FAQ</p>
  </Link>
  <Link href={"/contactUs"}> 
    <p className='text-primary_color  p-2'>Contact Us</p>
  </Link>
</div>


          <p className="text-primary_color text-center mt-[3em]">
            © 2024 Sidan Partners and Associates All rights reserved
          </p>
          <Link href={"https://kr8tos.vercel.app/"}>
            <p className="text-primary_color text-center">Developed by Kr8tos</p>
          </Link>
        </div>
      </Layout2>
    </div>
  );
};

export default Footer;