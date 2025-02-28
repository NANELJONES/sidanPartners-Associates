

import React from "react";
import AbstractCube from "../components/3D/AbstractCube";
import Layout1 from "../layout/Layout1";
import SampleProject from "../components/SampleProject";
import Subscribe from "../components/Subscribe";

import Header from "../components/Header";

import { useStateContext } from "../Context/StateContext";
import { getProjects } from "../api/queries";
import { getProjectOptions } from "../api/queries";

import Categories from "../components/Blog/Categories";
const page = () => {
  // The URL and title you'd like to \

  


  

  return (
    <div className="bg-primary_color">
      {/* <AbstractCube></AbstractCube> */}
      <Layout1>
        <Header></Header>
    
       </Layout1>
    </div>
  );
};

export default page;
