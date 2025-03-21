import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

import Genretbl from "../components/Genre/Genretbl";
import TopOfWeek from "../components/TopOfWeek";
import { useGlobalContext } from "../context/GlobalProvider";


const Genre = () => {
  const { name} = useParams();
  const { genres } = useGlobalContext();
 const gnre = genres.find((genre) => genre.name === name);

 
const {genre} = useGlobalContext();
  

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



  
  return (
    <div className=" bg-[#000000] pt-[55px] pl-4">
      <div className=" w-full md:flex ">
        <div className=" md:w-9/12">
          <h1 className=" text-[#00a2ffe7]  pb-4 text-[2.2rem] font-semibold">
            
           {name}
          </h1>
           {genre.map((anime) => (
           <Card anime={anime} config={config} />
         ))}  
        </div>
        <div className="flex flex-col md:w-3/12 w-[100%] ">
          {" "}
          <>
            <Genretbl />
          </>
          <TopOfWeek />
        </div>
      </div>
    </div>
  );
};

export default Genre;
