import React from "react";
//import animeData from '../AnimeData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AzCard = (props) => {
  return (
    <div className=" cardcontainer md:gid md:grid-cols-4 relative pb-8">
      {props.animeData.map((anime) => (
        <Link to={`/anime/${anime.name}`}>
          <div className="  h-[380px] mb-3 relative container ">
            <img
              src={anime.cardpic}
              alt={anime.name}
              className=" h-[330px] w-[280px] "
            />
            <h1 className=" text-white text-xs md:text-[1rem] pt-1">
              {anime.name}
            </h1>
            <span className=" md:text-sm text-xs pb-3 text-gray-500">
              sub | dub
            </span>
            <div
              className=" md:pl-3 pl-2 pt-2 absolute top-0 left-0 h-[100%] text-white info"
              style={{ backgroundImage: `url(${anime.cardpic})` }}
            >
              <h1 className="pb-2 text-[1rem] font-bold text-[#00a2ff]">
                {anime.name}
              </h1>
              <p>No of seasons</p>
              <p>No of Episodes</p>

              <p className=" pt-4 italic md:text-[1rem] text-[.7rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                impedit ut ex porro deserunt accusantium delectus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Et, quasi aliquam
                culpa nostrum explicabo repudiandae debitis minus voluptates
                eaque sequi ex fuga. Nesciunt, esse distinctio.{" "}
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

export default AzCard;
