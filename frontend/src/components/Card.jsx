import React from "react";
//import animeData from "../AnimeData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" cardcontainer md:grid md:grid-cols-4 pl-1 pr-1 pb-5 w-full">
      {props.animeData.map((anime) => (
      
        <div
          className="pb-8 relative md:h-[330px] h-[300px]  text-white container card "
           onClick={() => {
            navigate(`/anime/${anime.name}`);
         }} key={anime.id}
        >
          <img
            src={anime.images?.jpg.large_image_url}
            alt={anime.name}
            className=" h-[95%] w-[100%]"
          />
          <h1>{anime.name}</h1>
          <span className=" text-sm pb-3 text-gray-500">sub | dub</span>
          <div
            className=" pl-3 pt-2 absolute top-0 left-0 h-[100%] info"
            style={{ backgroundImage: `url(${anime.cardpic})` }}
          >
            <>
              <h1 className="pb-2 text-[1rem] text-[#00a2ff]">{anime.title}</h1>
              <p>No of seasons</p>
              <p>No of Episodes</p>
            </>
            <p className=" pt-4 italic md:text-[.9rem] text-[.7rem] ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              impedit ut ex porro deserunt accusantium delectus.{" "}
            </p>
            <div className="space-x-5 text-[20px] absolute bottom-2  ">
              <div className="tooltip">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="hover:text-[#00a2ff]  "
                />
                <span className=" text-[13px] font-semibold tooltiptext">
                  Play
                </span>
              </div>
              <div className=" tooltip">
                <FontAwesomeIcon
                  icon={faAdd}
                  className="hover:text-[#00a2ff] "
                />
                <span className=" text-[13px] font-semibold tooltiptext">
                  Add to WAtchlist
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
