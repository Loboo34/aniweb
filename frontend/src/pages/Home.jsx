import React, { useState } from "react";

import CurrenAiring from "../components/CurrenAiring";
import Infoblocks from "../components/Infoblocks/Infoblocks";
import Sections from "../components/Sections";
import Upcoming from "../components/Upcoming";
import Footer from "../components/Footer/Footer";



const Home = () => {
 
  return (
    <div className=" relativ w-[100%]">
      <CurrenAiring />
      <Infoblocks />
      <Sections />
     <Footer />
    </div>
  );
};

export default Home;
