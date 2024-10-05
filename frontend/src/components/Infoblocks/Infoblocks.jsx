import React from "react";
import animeData from "../../AnimeData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import myBlocks from "./myBlocks";
import { useGlobalContext } from "../../context/GlobalProvider";
import Card from "./card";
import { useAnime } from "../../context/AnimeContext";

const Infoblocks = () => {
  const navigate = useNavigate();

  const myBlocks = [
    { id: 0, title: "TopAring" },
    { id: 1, title: "Upcoming" },
    { id: 2, title: "Popular" },
    { id: 3, title: "Completed" },
  ];

  const { popularAnime, airingAnime, upcomingAnime, favoriteAnime } =
    useGlobalContext();
  const renderAnime = (block) => {
    switch (block.title) {
      case "TopAring":
        return airingAnime?.slice(0, 4);
      case "Upcoming":
        return upcomingAnime?.slice(0, 4);
      case "Popular":
        return popularAnime?.slice(0, 4);
      case "Completed":
        return favoriteAnime?.slice(0, 4);

      default:
        return [];
    }
  };

  return (
    <div className=" md:grid md:grid-cols-4 pb-5 infoblock">
      {myBlocks.map((block) => {
        const animeList = renderAnime(block);

        return (
          <div
            className="  w-[300px]  pl-3 pb-6 flex flex-col space-x-1  relative"
            key={block.id}
          >
            <h1 className=" text-[#00a2ff] pb-4 text-[20px]">{block.title}</h1>
            {animeList?.map((anime) => (
              <Card anime={anime} />
            ))}
            <Link to={`viewmore/${block.title}`}>
              <div className=" absolute bottom-0 mt-3 flex  items-center left-4 md:opacity-80 hover:opacity-100 cursor-default">
                <p className=" text-[#00a2ff] text-[16px]  pr-2">View more</p>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-[#00a2ff] pt-1 md:text-[15px] text-[.7rem] font-extrabold "
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Infoblocks;
