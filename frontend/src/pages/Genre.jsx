import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GenreData from "../components/Genre/GenreData";
import Card from "../components/Card";
import animeData from "../AnimeData";
import Genretbl from "../components/Genre/Genretbl";
import TopOfWeek from "../components/TopOfWeek";
import { useGlobalContext } from "../context/GlobalProvider";

const Genre = () => {
  const { name } = useParams();
  const { genres } = useGlobalContext();
 const genre = genres.find((genre) => genre.name === name);
  

  
  return (
    <div className=" bg-[#000000] pt-[55px] pl-4">
      <div className=" w-full md:flex ">
        <div className=" md:w-9/12">
          <h1 className=" text-[#00a2ffe7]  pb-4 text-[2.2rem] font-semibold">
            
           
          </h1>
         {/* {anime.map((anime) => (
           <Card anime={anime} config={config} />
         ))} */}
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
