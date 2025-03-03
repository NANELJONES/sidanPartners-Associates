"use client";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import { useStateContext } from "../Context/StateContext";
import Layout1 from "../layout/Layout1";
import { AllLines } from "../components/AllLines";
import AnimateDown from "../Animations/AnimateDown";
import AnimateUp from "../components/AnimateUp";
const ContactPage = () => {
  const form = useRef();
  const [contact, setContact] = useState({
    user_name: "",
    email: "",
    message: "",
  });

  const { set_show_processing } = useStateContext();

  const resetter = () => {
    setContact({ user_name: "", email: "", message: "" });
  };

  const successToast = () => {
    toast.success("Message Successfully Sent", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      theme: "dark",
    });
  };

  const failedToast = (errorMessage = "Message Could Not Be Sent.") => {
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      theme: "dark",
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    set_show_processing(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_P_KEY
      );
      console.log("Email sent successfully:", result);
      set_show_processing(false);
      //alert("Email Successfully send")
       successToast();
      resetter();
    
    } catch (error) {
      console.error("Email sending error:", error);
      set_show_processing(false);
      failedToast("Failed to send message. Try again later.");
    }
  };

  return (
 <div className="relative bg-primary_color">
    <AllLines></AllLines>
 <Layout1>


 <div className="   p-[1em] lg:p-0 md:max-h-[1000px] ">
      {/* Toast Container (only one instance needed) */}
      <ToastContainer />

      <div className="flex flex-col md:flex-row   ">
        {/* Background Image */}

        <div className="w-full layout_padding   flex flex-col  border-b-[1em] border-b-primary_color_light  md:border-b-0  lg:justify-between  gap-[2em] md:w-1/2">
          <h2 className="text-primary_color_light">
            Start Your Journey with <br/> Sidan Today!
          </h2>

          <p className="text-primary_color_light lg:w-2/3" >
            Our job is to transform your ideas into sustainable realities in
            Ghana and beyond.
            <br />
            <br />
            Get in touch with us to discuss your project, request a
            consultation, or simply learn more about what we do.
          </p>

<AnimateDown>

<img 
    className="w-[70%] max-h-[400px] md:w-[90%] "
    src="/imageries/concept_image.png"
    />

</AnimateDown>

     
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative layout_padding z-10    w-full md:w-1/2  gap-[2em] p-2  flex flex-col "
        >
          <h1 className=" text-primary_color_light text-[4em] md:text-[6em]">Over here!</h1>

          <div className="flex flex-col gap-2">
            <p className="font-light text-white">Name:</p>
            <input
              value={contact.user_name}
              onChange={(e) =>
                setContact({ ...contact, user_name: e.target.value })
              }
              name="user_name"
              className="bg-transparent border-b  border-b-primary_color_light text-[0.8em] text-white p-2"
              placeholder="Please Enter Your Name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-light text-white">Email:</p>
            <input
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
              name="email"
              type="email"
              className="bg-transparent border-b  border-b-primary_color_light text-white p-2 text-[0.8em]"
              placeholder="Please Enter Your Email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white">Message:</p>
            <textarea
              value={contact.message}
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
              name="message"
              rows="5"
              className="bg-transparent border text-white p-2 text-[0.8em]"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="border self-start w-2/3 rounded-none max-w-[200px]   text-white bg-none hover:bg-primary_color_light hover:text-primary_color duration-300 hover:border-0"
          >
            SEND MESSAGE
          </button>

        </form>
      </div>

     
    </div>
 </Layout1>
 
 </div>
  );
};

export default ContactPage;
