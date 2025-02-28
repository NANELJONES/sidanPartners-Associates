"use client";
import React from "react";
import { EventCard } from "./EventCard";
import AnimateUp from "../AnimateUp";


const EventList = ({ events_list }) => {
  console.log("these are the events", events_list)

  return (
    <div className="  flex flex-wrap justify-center">
      {events_list.map((each_event, index) => (
        <div key={index} className={`${index % 2 === 0 ? "mx-auto md:w-1/2  mt-[5em] lg:w-full 2xl:w-1/2" : " mx-auto md:w-1/2 lg:w-full 2xl:w-1/2 mt-[3em]"}`}>
     
        <AnimateUp>  <EventCard event_data={each_event.node} /></AnimateUp>
        </div>
      ))}
    </div>
  );
};

export default EventList;
