import React, { useState } from "react";

import animeData from "../AnimeData";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import GenreData from "../components/Genre/GenreData";
import { useNavigate } from "react-router-dom";
import Genretbl from "../components/Genre/Genretbl";
import TopOfWeek from "../components/TopOfWeek";
import Footer from "../components/Footer/Footer";

const Popular = () => {
  // const titlePage = [
  //   { id: 1, name: "Popular" },
  //   { id: 1, name: "Tv" },
  //   { id: 1, name: "Movies" },
  //   { id: 1, name: "Dub" },
  //   { id: 1, name: "Popular" },
  // ];
 
  return (
    <>
      <div className=" md:w-full lg:flex bg-[#000000] pt-[55px] ">
        <div className=" lg:w-9/12 w-full">
          <h1 className=" text-[#00a2ffe7]  pb-4 pl-2 md:text-[2.2rem] text-[1.4rem] font-semibold">
            Most Popular
          </h1>
          <Card animeData={animeData} />
        </div>
        <div className="  lg:w-3/12 w-[100%] ">
          {" "}
          <>
            <Genretbl />
          </>
          <TopOfWeek />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Popular;
