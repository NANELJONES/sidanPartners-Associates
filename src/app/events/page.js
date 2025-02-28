"use client"
import React from 'react'
import { HeadersCollection5,HeadersCollection2, HeadersCollection1,HeadersCollection4  } from '../components/AllHeaders/HeadersCollection'
import Layout1 from '../layout/Layout1'
import EventList from '../components/Event/EventList'
// import { events } from '../Data/Data'
import DerivativeEvents from '../components/Event/DerivativeEvents'
import { useStateContext } from '../Context/StateContext'

const page = () => {

  const {events} =  useStateContext()

  console.log("These are all the events: " , events)

  return (
 <>

     <Layout1>
      
      <div className='relative flex flex-col gap-[2em] md:p-4 lg:p-8 mt-[2em] lg:flex-row'>
            <div className='lg:w-1/2 flex max-h-[600px]    lg:sticky top-[10px]  justify-between flex-col'>
                  <h1 className='text-[6em] lg:text-[10em]'> Events</h1>
                  <h4>Discover Our Upcoming Events: Get Involved, Take Action, and Help Us Combat Plastic Pollution to Build a Cleaner, Healthier Planet for Future Generations</h4>
            </div>



              <div className='w-full md:1/2 h-auto gap-[1em] '>
               
                
                <EventList events_list={events.data} ></EventList>
              </div>
      </div>
      
      



</Layout1>

 
 
 </>
     
  )
}

export default page