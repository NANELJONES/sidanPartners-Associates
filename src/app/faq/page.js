import React from 'react'
import Accordion from '../Accordion'
import Layout1 from '../layout/Layout1'
import { HeadersCollection7 } from '../components/AllHeaders/HeadersCollection'
const Page = () => {
  const FAQ = [
    {
      "question": "What services does Sidan Associates and Partners offer?",
      "answer": "We provide end-to-end design and construction services, including architectural design, structural engineering, project management, interior design, and general contracting."
    },
    {
      "question": "Do you handle both residential and commercial projects?",
      "answer": "Yes, we specialize in both residential and commercial construction projects, delivering high-quality solutions tailored to our clients' needs."
    },
    {
      "question": "Can Sidan Associates and Partners help with project permits and approvals?",
      "answer": "Absolutely! We assist clients in securing all necessary permits and approvals to ensure compliance with local regulations."
    },
    {
      "question": "How long does a typical project take?",
      "answer": "Project timelines vary depending on the size and complexity, but we provide detailed schedules during the planning phase to keep clients informed."
    },
    {
      "question": "Do you offer customized designs for projects?",
      "answer": "Yes, we work closely with clients to create bespoke architectural designs that align with their vision, needs, and budget."
    },
    {
      "question": "Can you handle renovations and remodeling?",
      "answer": "Yes, we offer renovation and remodeling services for both residential and commercial spaces, improving functionality and aesthetics."
    },
    {
      "question": "What is the cost estimation process for a project?",
      "answer": "We provide a detailed cost estimate after an initial consultation, site assessment, and design phase, ensuring transparency in pricing."
    },
    {
      "question": "Do you provide 3D renderings and visualizations?",
      "answer": "Yes, we offer 3D renderings and virtual walkthroughs to help clients visualize their projects before construction begins."
    },
    {
      "question": "How do I get started with a project?",
      "answer": "Simply contact us for a consultation. We’ll discuss your requirements, provide recommendations, and outline the next steps for your project."
    },
    {
      "question": "Do you offer sustainable and eco-friendly building solutions?",
      "answer": "Yes, we incorporate sustainable design principles, energy-efficient materials, and eco-friendly construction practices into our projects."
    },
    {
      "question": "What areas do you serve?",
      "answer": "We operate in multiple regions and can take on projects in various locations. Contact us to confirm if we cover your area."
    },
    {
      "question": "Can you work within my budget?",
      "answer": "Yes, we tailor our design and construction solutions to fit different budgets while maintaining high-quality standards."
    },
    {
      "question": "Do you offer post-construction support and maintenance?",
      "answer": "Yes, we provide post-construction support, including maintenance and repairs, to ensure long-term durability and satisfaction."
    },
    {
      "question": "How do you ensure quality control during construction?",
      "answer": "We have strict quality control measures, regular site inspections, and experienced project managers overseeing every phase of construction."
    },
    {
      "question": "What makes Sidan Associates and Partners different from other firms?",
      "answer": "Our holistic approach, attention to detail, commitment to quality, and client-focused service set us apart in the design and construction industry."
    }
  ]

  return (
    <div className=" bg-secondary_color">
      <Layout1>
    <HeadersCollection7 heading={"Frequently Asked Questions"} text={`We’ve compiled answers to the most commonly asked questions to help you understand the
process and how we can assist with your design/construction needs.`} ></HeadersCollection7>
      <div className="space-y-4 mt-[4em]">
        {FAQ.map((item, index) => (
          <Accordion key={index} heading={`${index + 1}. ${item.question}`} content={item.answer} />
        ))}
      </div>
      </Layout1>
    </div>
  )
}

export default Page
