import React from "react";
import animeData from "../../AnimeData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import myBlocks from "./myBlocks";
import { useGlobalContext } from "../../context/GlobalProvider";


const Infoblocks = () => {
  const navigate = useNavigate();
 

  const {popularAnime} = useGlobalContext();
  //console.log(global);
 const animeInfo = popularAnime.slice(0, 4);
  return (
    <div className=" md:flex md:space-x-3 pb-5">
      {myBlocks.map((block) => (
        <div
          className="  w-[300px]  pl-3 pb-6 flex flex-col space-x-1  relative"
          key={block.id}
        >
          <h1 className=" text-[#00a2ff] pb-4 text-[20px]">{block.title}</h1>
          {animeInfo.map((anime) => (
            <div className=" flex flex-col " key={anime.mal_id}>
              <div className=" flex space-x-2 pb-2  w-full" key={anime.mal_id}>
                <Link to={`/anime/${anime.mal_id}`}>
                  <img
                    src={anime.images.jpg.large_image_url}
                    alt="pic"
                    className=" pl-1  h-[80px]"
                    // onClick={() => {
                    //   navigate(`anime/${anime.title}`);
                    // }}
                  />
                </Link>
                <div className=" text-white">
                  <p className=" text-[.9rem] font-semibold text-left ">
                    {anime.title}
                  </p>
                  <p className=" text-[.8rem]">ep: {anime.episodes}</p>
                  <span className=" text-[.8rem]">Sub | Dub</span>
                </div>
              </div>
              <hr className=" text-white pb-2 w-[80%] opacity-30" />
            </div>
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
      ))}
    </div>
  );
};

export default Infoblocks;
