"use client"
import React from 'react'
import Layout1 from '@/app/layout/Layout1'
import { events } from '@/app/Data/Data'
import Image from 'next/image'
import {IconComponent, IconComponent1} from '@/app/components/IconComponent'
import { useStateContext } from '@/app/Context/StateContext'
import Modal from '@/app/components/Modal'
import { useEffect, useState } from 'react'

import { usePathname } from "next/navigation";
import { getSingleEvent } from '@/app/api/queries'
const page = () => {

  const {GetDate, GetTime , set_show_modal,  set_url, show_modal}  = useStateContext()
  

  const [event, setEvent] = useState (events.data.eventsConnection.edges[1].node)
  const [loading, setLoading] = useState(false)
    const pathname = usePathname();
    const slug = pathname.split("/").pop();

    useEffect(() => {
      if (!slug) return;
  
      const fetchEvent = async () => {
        setLoading(true);
        try {
          const fetchedEvent = await getSingleEvent(slug);
          console.log("Fetched Post:", fetchedEvent);
  
          setEvent(fetchedEvent);

     
  
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchEvent();
      console.log(event)
    }, [slug]); // Runs only when slug changes
  return (
    <>
      {show_modal && <Modal />}
 <Layout1>
    <div className='flex flex-col lg:flex-row py-8'>
    <img src={event.eventCoverImage.url}  className='object-cover w-full lg:w-1/2  sticky top-[5px] h-[30em] max-h-[700px]'></img>
            {/* <div className='w-full  relative h-[30em] max-h-[700px]'>
                <Image src={event.eventCoverImage.url} fill className='object-cover'></Image>
            </div> */}

            <div className='w-full z-10 lg:1/2 bg-primary_color p-[2em] flex flex-col gap-[2em] '>
            <div>
                  <h1 className='text-white'>{event.eventName}</h1>
                  <p className='italic text-white'>{event.eventType}</p>
            </div>

            <p className='text-white'>{event.eventIntro}</p>
            {/* Date and Time  */}
              <div>
                <h5 className='font-bold text-white'>Event Date and Time</h5>
                <br/>
              <div className='flex flex-wrap   items-center gap-[2em] '>
         
         {event.eventDatesAndTime.map((each_date, index)=>{
         return  <div  key={index} className='mt-4 md:mt-0 lg:w-1/2 ' > 
        
         
      <IconComponent1 img_src={`/Regular Icons/date_icon.svg`} info={GetDate(each_date)}> </IconComponent1>  
   
          <div className='border-2 drop_shadow  mt-4 border-primary_color bg-white md:w-[20em] rounded-md p-6 flex flex-col gap-4'>
          <IconComponent img_src={`/Regular Icons/time_icon.svg`} info={GetTime(each_date)}></IconComponent>
           <IconComponent img_src={`/Regular Icons/location_icon.svg`} info={event?.eventLocation?.[index] !== undefined ? event.eventLocation[index] : event.eventLocation?.[0]}> </IconComponent>
           <IconComponent img_src={`/Regular Icons/ticket_icon.svg`} info={ event.ticketPrice[index]}> </IconComponent>
     
       
          </div>
         </div>
         
       })}</div>
     
              </div>
            
      

          {/* Event Details */}
        <div>
        <h5 className='text-white'>Event Details about  </h5>
        <h3 className='text-white'>{event.eventName} </h3>
        <br/>
          <div
                        className="rich-text p-4 rounded-lg "
                        dangerouslySetInnerHTML={{
                          __html: event.eventDetails.html,
                        }}/>
            </div>
        </div>

    </div>


         <div  >
                <h4>{`Gallery  Media Of Our`}</h4>
                <h2>  {event.eventName}</h2>
              <br/>
                <div className={`flex items-center justify-center  md:justify-start gap-[1em] 2xl:gap-[3em] w-full  flex-wrap  `}>
                {event?.eventGallery && event.eventGallery.length > 0 ? (
      event.eventGallery.map((each_image, index) => (
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
              fill= "true"
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

 
 </Layout1>
    </>

  )
}

export default page