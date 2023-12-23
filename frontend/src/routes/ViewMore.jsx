import React, { useState } from "react";
import Card from "../components/Card";
import animeData from "../AnimeData";
import { Link, useParams } from "react-router-dom";
import myBlocks from "../components/Infoblocks/myBlocks";
import GenreData from "../components/Genre/GenreData";
import Genretbl from "../components/Genre/Genretbl";
import TopOfWeek from "../components/TopOfWeek";
import Footer from "../components/Footer/Footer";

const ViewMore = () => {
  const { title } = useParams();

  const block = myBlocks.find((block) => block.title === title);

 
  
 
  return (
    <div className=" pt-[60px] bg-[#000000] pr-1 pl-1">
      <div className="lg:flex w-full md:pl-2">
        <div className=" lg:w-9/12 w-full">
          <h1 className="text-[#00a2ffe7]  pb-4 text-[2.2rem] pl-4 font-semibold">
            {block.title}
          </h1>
          <Card animeData={animeData} />
        </div>
        <div className=" lg:w-3/12 w-[100%] ">
          {" "}
         <>
         <Genretbl /></>
         <>
         <TopOfWeek />
         </>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewMore;
