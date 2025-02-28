"use client"
import React from 'react'
import Layout1 from '../layout/Layout1'
import { awareness_content } from '../Data/Data'
import AwarenessMaterial from '../components/AwarenessMaterial'
import { HeadersCollection1 } from '../components/AllHeaders/HeadersCollection'
import { useStateContext } from '../Context/StateContext'

const page = () => {

  const {awarenessMaterial} = useStateContext()
  return (
    <>
    <Layout1>
    <div className=''>
      <HeadersCollection1 heading="Awareness" second_heading= "Materials" sub_heading="Get in touch with our latest blogs, from all around the world regarding our various inputs and projects." source="/Gallery Media Image.svg"></HeadersCollection1>
    </div>
    <AwarenessMaterial input_data={awarenessMaterial.data}></AwarenessMaterial>



    </Layout1>
    </>
  )
}

export default page