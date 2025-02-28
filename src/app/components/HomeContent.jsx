"use client";
import React, { useState, useEffect } from "react";
import { events } from "../Data/Data";
import { blog_info } from "../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Button2 , Button1, Button3} from "./Buttons";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useStateContext } from "../Context/StateContext";


// ✅ Rename blog_content to BlogContent (React components must be capitalized)
const BlogContent = ({ blog }) => {
  return (
    <div
      className="relative w-full h-full bg-cover  "
      style={{ backgroundImage: `url(${blog.node.coverImage.url})` }}
    >

      <div className="bg-gradient-to-t from-[#1E2D7D] to-transparent h-[80%] absolute bottom-0 w-full"></div>
      <div  className="w-full p-[3em] z-[10] flex flex-col gap-4 md:w-2/3   absolute bottom-0 ">
      <p  className="text-white">{blog.node.contentType}</p>
      <h2 className="lg:hidden limited-text_header text-white ">
        {blog.node.title}
      </h2>
      <h1 className=" hidden  lg:block text-white ">
        {blog.node.title}
      </h1>
      <p className="text-white limited-text_normal ">{blog.node.excerpt}</p>
      <Button3 link_address={`/blog/${blog.node.slug}`} title="Read More" > </Button3>



      </div>
    </div>
  );
};




const EventPost = ({event})=>{
  const {GetDate, GetTime} = useStateContext()
return (
  <div 
  className="relative w-full h-full bg-cover "
      style={{ backgroundImage: `url(${event.node.eventCoverImage.url})` }}
  > 
  
  <div className="rounded-lg bg-gradient-to-t from-[#1E2D7D] to-transparent h-[80%] absolute bottom-0 w-full"></div>
  <div  className="w-full z-[10] p-[3em] flex flex-col gap-2 md:w-2/3   absolute bottom-0 ">
  <p  className="text-white">{event.node.eventType}</p>
  <h2 className=" limited-text_header lg:hidden text-white ">
    {event.node.eventName}
  </h2>

  <h1 className="hidden lg:block text-white ">
    {event.node.eventName}
  </h1>
  <p className="text-white limited-text_normal">{event.node.eventIntro}</p>
 

  <span className="flex gap-2  items-center"> <img className="w-10 object-cover   bg-white p-2 rounded-md"  src= "/Regular Icons/location_icon.svg"/>  <p className="text-white"> { event.node.eventLocation}</p></span>
 
 <span className="flex gap-2 items-center"> <img className="w-10 object-cover   bg-white p-2 rounded-md"  src= "/Regular Icons/date_icon.svg"/> <p className="text-white"> { GetDate(event.node.eventDatesAndTime[0]) }</p></span>
 
 <span className="flex gap-2 items-center"> <img className="w-10 object-cover   bg-white p-2 rounded-md"  src= "/Regular Icons/time_icon.svg"/> <p className="text-white"> { GetTime(event.node.eventDatesAndTime[0]) }</p></span>
 
 
  <Button3 link_address={`/blog/${event.node.slug}`} title="Read More" > </Button3>



  </div>
  
  </div>
)
}

const HomeContent = () => {
  const [slides, setSlides] = useState([]);
  const {blog, events} = useStateContext()



  useEffect(() => {
    // Extract 2 blogs and add "type: news&blog"
    if(!blog && !events){
      return
    }

    const blogs = blog.data.slice(0, 2).map((blog) => ({
      ...blog,
      type: "news&blog",
    }));

    // Extract 2 events and add "type: event"
    const eventList = events.data.slice(0, 2).map((event) => ({
      ...event,
      type: "event",
    }));

    // Merge both lists
    setSlides([...blogs, ...eventList]);
  }, [blog, events]);

  return (
    <div className="w-full mx-auto  mt-[5em]  ">
      {/* <h2 className="text-3xl text-white font-bold text-center mb-6">Latest Blogs & Events</h2> */}
      <Swiper
       pagination={{ clickable: true }}
       navigation={true}
       autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Fix autoplay
       effect="fade" // ✅ Enable fade effect
       fadeEffect={{ crossFade: true }} // ✅ Smooth fade transition
       modules={[Autoplay, Pagination, EffectFade, Navigation]}
       spaceBetween={20}
       slidesPerView={1}
      
        className="mySwiper w-full h-[80vh] max-h-[600px]"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className=" rounded-lg shadow-md h-full">
            {/* ✅ Use BlogContent component correctly */}
            {item.type === "news&blog" ? (
              <BlogContent blog={item} />
            ) : (
             <EventPost event={item}></EventPost>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeContent;
