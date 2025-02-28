"use client"
import React from 'react'
import Link from 'next/link'

const SocialIcons = ({icon_path,text, url, icon}) => {
  return (
<Link href={url}>

<span className="flex    items-center gap-2 md:gap-2">
       <span className='text-primary_color text-[1.5em]'>{icon}</span>

       <span className="flex flex-col  items-center md:items-start">
         <p className="text-primary_color ">{text}</p>
       </span>
     </span>

</Link>
    
  )
}

export default SocialIcons
