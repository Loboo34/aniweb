import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import footerLinks from "../components/Footer/FooterLinks";
//import Card from "../components/Card";
const Card = lazy(() => import("../components/Card"));

const AZlist = () => {
  const { letter } = useParams();
  //const link = footerLinks.find((link) => link.name === name);
  const [animeList, setAnimeList] = useState([]);
  
  useEffect(() => {
    const getAnime = async () => {
      const response = await fetch(
        `http://localhost:4000/api/anime/anime/${letter}`
      );
      const data = await response.json();
      console.log(data);
      setAnimeList(data.data);
    };
    getAnime();
  }, [letter]);
  // const filter = animeData.slice(0, 10)
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
    <div className="pt-[55px] md:pl-4  relative">
      <h1 className=" text-[#00a2ffe7]  pb-4 md:text-[2.2rem] text-[1.2rem] font-semibold">
        AZ-List
      </h1>
      <div className=" md:flex pb-10  md:flex-wrap md:gap-4 grid grid-cols-8 ">
        {footerLinks.map((link) => (
          <NavLink
            to={`/az-list/${link.letter}`}
            activeclassname="active"
            className={`md:text-[1.3rem] text-[.8rem] pt-1 pb-1 cursor-deafult  text-white pl-2 pr-2 rounded mr-2 bg-gray-600  font-medium 
            `}
            key={link.id}
          >
            {link.letter}
          </NavLink>
        ))}
      </div>
      <>
        <div className="md:grid md:grid-cols-5">
          {animeList.map((anime) => (
            <Suspense key={anime.id} fallback={<div>Loading...</div>}>
            <Card anime={anime} config={config} />
            </Suspense>
          ))}
        </div>
      </>
    </div>
  );
};

export default AZlist;
