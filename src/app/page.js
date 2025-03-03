import dynamic from "next/dynamic";


const Header = dynamic(() => import("./components/Header"));
const Intro = dynamic(() => import("./components/Intro"));
const Layout1 = dynamic(() => import("./layout/Layout1"));
const AbstractCube = dynamic(() => import("./components/3D/AbstractCube"));
import LookingFor from "./components/LookingFor";
import WhatWeOffer from "./components/WhatWeOffer";
import SampleProject from "./components/SampleProject";



import  {AllLines} from "./components/AllLines";

const BlogSample = dynamic(() => import("./components/BlogSample"));


export default function Home() {
  return (
    <div className=" bg-primary_color relative">
      {/* <AbstractCube></AbstractCube> */}
      
      {/* <div className='border-2 border-primary_color rounded-full absolute left-[50%] top-[30em] z-[10]  flex items-center justify-around   w-[6em] h-[6em] bg-secondary_color-50' >
    <p className='text-secondary_color'> Scroll <br/> Down  <br/> </p>
    </div> */}

     
      <Layout1>
        {/* <AllLines></AllLines> */}


        <div className="flex flex-col lg:flex-row gap-4 relative h-auto bg-black-200 w-full">
         

          <div className="flex flex-col p-2 md:p-8 z-10 gap-10 w-full">
        <Header />

            <Intro />
           
            <WhatWeOffer />
            <LookingFor />
          <SampleProject />
              <BlogSample />
        

            
          
          </div>
        </div>

      </Layout1>
    </div>
  );
}
