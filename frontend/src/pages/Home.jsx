import React, { Suspense, useState } from "react";

//import CurrenAiring from "../components/CurrenAiring";
//import Infoblocks from "../components/Infoblocks/Infoblocks";
//import Sections from "../components/Sections";
const CurrenAiring = React.lazy(() => import("../components/CurrenAiring"));
const Infoblocks = React.lazy(() => import("../components/Infoblocks/Infoblocks"));
const Sections = React.lazy(() => import("../components/Sections"));





const Home = () => {
 
  return (
    <div className=" relativ w-full">
      <Suspense fallback={<div>Loading...</div>}>
      <CurrenAiring />
      <Infoblocks />
      <Sections />
    </Suspense>
    </div>
  );
};

export default Home;
