import React, { useState } from "react";

import animeData from "../AnimeData";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import GenreData from "../components/Genre/GenreData";
import { useNavigate } from "react-router-dom";
import Genretbl from "../components/Genre/Genretbl";
import TopOfWeek from "../components/TopOfWeek";
import Footer from "../components/Footer/Footer";
import { GlobalProvider, useGlobalContext } from "../context/GlobalProvider";

const Popular = () => {
  const config = {
    showTitle: true,
    showImage: true,
    showSeasons: true,
    showEpisodes: true,
    showDescription: true,
    showType: true,
    showGenres: true,
    showSeason: true,
  };

  const { popularAnime } = useGlobalContext();

  return (
    <>
      <div className=" md:w-full lg:flex bg-[#000000] pt-[55px] ">
        <div className=" lg:w-9/12 w-full">
          <h1 className=" text-[#00a2ffe7]  pb-4 pl-2 md:text-[2.2rem] text-[1.4rem] font-semibold">
            Most Popular
          </h1>
          <div className="md:grid md:grid-cols-4">
            {" "}
            {popularAnime.map((anime) => (
              <Card anime={anime} config={config} />
            ))}
          </div>
        </div>
        <div className="  lg:w-3/12 w-[100%] ">
          {" "}
          <>
            <Genretbl />
          </>
          <TopOfWeek />
        </div>
      </div>
    </>
  );
};

export default Popular;
