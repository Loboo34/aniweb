import React, { useState } from "react";

import CurrenAiring from "../components/CurrenAiring";
import Infoblocks from "../components/Infoblocks/Infoblocks";
import Sections from "../components/Sections";



const Home = () => {
 
  return (
    <div className=" relative bg-[#000000] w-[100%]">
      <CurrenAiring />
      <Infoblocks />
      <Sections />
    </div>
  );
};

export default Home;
