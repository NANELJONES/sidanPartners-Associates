"use client"
import React from 'react'
import { Button2 } from '../Buttons';
import Link from 'next/link';
import { useStateContext } from '@/app/Context/StateContext';


const EventCard = ({ event_data }) => {
  // Destructure the required fields from the event data
  if (!event_data) {
    return <div>Loading...</div>;
  }

  console.log("Event data:", event_data);
  const {GetDate, GetTime} =  useStateContext()
  const {
    eventCoverImage,
    eventName,
    slug,
    eventIntro,
    eventLocation,
    eventDatesAndTime,
    externalEventLink
  } = event_data;

  console.log("this is the single event data",event_data)
  return (

    <div className=" mx-auto w-full   md:scale-[0.9] lg:scale-1  rounded-lg max-w-sm shadow-lg">
      {/* Cover Image */}
      <img
        src={eventCoverImage.url}
        alt={eventName}
        className="w-full h-[20em] md:h-[15em] lg:h-[20em] object-cover rounded-t-md "
      />
      
   <div className='bg-primary_color p-6'>
       {/* Event Name */}
       <h5 className=" mb-2 text-white">{eventName}</h5>

      
    <div className='flex flex-col justify-between'>
        {/* Event Location */}
        <p className="font-medium flex items-center  mb-2 gap-2 text-white">
        <strong>Location:</strong>  {eventLocation}
      </p>
      
      {/* Event Date */}
     
      <p className="text-white">
        Date:<br/>
        <strong></strong> { GetDate(eventDatesAndTime[0])   } 
        {eventDatesAndTime.length > 1 && ` - ${ GetDate(eventDatesAndTime[1])}`}
      </p>

    </div>

      <div className='flex items-center justify-between gap-4  mt-2 '  >
   <Link href={externalEventLink === null  ? `/events/${slug}` : externalEventLink} className='w-full'> <button className='w-full bg-none bg-secondary_color text-white bg-primary_color'>Register</button></Link>
    <Link href={`/events/${slug}`} className='w-full'>  <button className=' w-full  bg-none text-white   border-white'>Learn More</button></Link>
   
   </div>
   </div> 


    </div>
  );
};


const EventCard2 = ({ event_data }) => {
  // Destructure the required fields from the event data
  const {
    eventCoverImage: { url: coverImageUrl },
    eventName,
    eventIntro,
    eventLocation,
    eventDatesAndTime,
    slug,
  } = event_data;

  return (
    <div className="border-2 mx-auto bg-[#F7F7F7]   border-primary_color p-4 m-2 rounded-lg max-w-sm shadow-lg">
      {/* Cover Image */}
      <img
        src={coverImageUrl}
        alt={eventName}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      
   <div className=''>
       {/* Event Name */}
       <h4 className=" mb-2">{eventName}</h4>
      
      {/* Event Intro (Excerpt) */}
      <p className=" mb-2">{eventIntro}</p>
      
      {/* Event Location */}
      <p className="font-medium mb-2">
        <strong>Location:</strong> <br/> {eventLocation}
      </p>
      
      {/* Event Date */}
      <p>Date:</p>
      <p className="">
        <strong></strong> {new Date(eventDatesAndTime[0]).toLocaleDateString()} 
        {eventDatesAndTime.length > 1 && ` - ${new Date(eventDatesAndTime[1]).toLocaleDateString()}`}
      </p>
   </div> 
   <br/>
   <div className='flex items-center justify-between gap-4'  >
 { <Link href={`/events/${slug}`}><button className='w-full md:w-1/2 bg-none text-white bg-primary_color'>Register</button></Link>  }
   {<Link href={`/events/${slug}`}> <button className=' w-full md:w-1/2 bg-none   border-primary_color'>Learn More</button></Link>}
   </div>
    </div>
  );
};

export  {EventCard, EventCard2};
