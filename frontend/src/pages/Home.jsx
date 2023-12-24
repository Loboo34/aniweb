import React, { useState } from "react";

import CurrenAiring from "../components/CurrenAiring";
import Infoblocks from "../components/Infoblocks/Infoblocks";
import Sections from "../components/Sections";
import Upcoming from "../components/Upcoming";
import Footer from "../components/Footer/Footer";



const Home = () => {
 
  return (
    <div className=" relativ w-full">
      <CurrenAiring />
      <Infoblocks />
      <Sections />
    
    </div>
  );
};

export default Home;
