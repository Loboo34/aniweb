import React from "react";
import animeData from "../AnimeData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className=" cardcontainer">
      {props.animeData.map((anime) => (
        <Link to={`anime/${anime.name}`}>
          <div className="pb-6 relative md:h-[320px] md:w-[220px] w-[150px] h-[300px]   text-white container ">
            <img
              src={anime.cardpic}
              alt={anime.name}
              className=" h-[260px] w-[100%]"
            />
            <h1>{anime.name}</h1>
            <span className=" text-sm pb-3 text-gray-500">sub | dub</span>
            <div
              className=" pl-3 pt-2 absolute top-0 left-0 h-[100%] info"
              style={{ backgroundImage: `url(${anime.cardpic})` }}
            >
              <>
                <h1 className="pb-2 text-[1rem] text-[#00a2ff]">
                  {anime.name}
                </h1>
                <p>No of seasons</p>
                <p>No of Episodes</p>
              </>
              <p className=" pt-4 italic text-[.9rem] ">
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
        </Link>
      ))}
    </div>
  );
};

export default Card;
