import React, { useState } from "react";
//import animeData from "../AnimeData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ anime, config }) => {

  const [showMore, setShowMore] = useState(false);
  return (
    <div className=" cardcontainer  pl-1 pr-1 pb-5 w-full">
      <div>
        <Link to={`/anime/${anime.mal_id}`}>
          <div
            className="pb-8 relative md:h-[330px] h-[300px]  text-white container card  "
            key={anime.id}
          >
            {config.showImage && (
              <img
                src={anime.images?.jpg.large_image_url}
                alt={anime.name}
                className=" h-[95%] w-[100%]"
              />
            )}

            {config.showTitle && (
              <h1>
                {showMore
                  ? anime.title
                  : anime.title?.length > 22
                  ? `${anime.title.substring(0, 22)}...`
                  : anime.title}
              </h1>
            )}

            <span className=" flex  space-x-2  text-sm pb-3 text-gray-500">
              <span className="">sub | dub </span>
              {config.showType && <span>{anime.type}</span>}
            </span>
            <div
              className=" pl-3 pt-2 absolute top-0 left-0 h-[100%] info"
              style={{
                backgroundImage: `url(${anime.images?.jpg.large_image_url})`,
              }}
            >
              <>
                {config.showTitle && (
                  <h1 className="pb-2 text-[1rem] text-[#00a2ff]">
                    {anime.title}
                  </h1>
                )}
                {config.showType && <p>{anime.type}</p>}
                {config.showEpisodes && <p>Episodes: {anime.episodes}</p>}
                {config.showGenres && (
                  <p>
                    {anime.genres?.[0]?.name} | {anime.genres?.[2]?.name} |
                    {anime.genres?.[3]?.name}
                  </p>
                )}
              </>
              {config.showDescription && (
                <p>{anime?.synopsis?.substring(0, 100)}...</p>
              )}
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
      </div>
    </div>
  );
};

export default Card;
