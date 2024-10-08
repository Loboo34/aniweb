import React from "react";
import animeData from "../AnimeData";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";

const TopOfWeek = () => {
  
  const { airingAnime } = useGlobalContext();
  const topTen = airingAnime?.sort((a, b) => b.score - a.score).slice(0, 10);
  
  const navigate = useNavigate();


  topTen.map((anime, index) => {
    anime.rank = index + 1;
  });

  return (
    <div className=" pt-4 ml-4 pb-4">
      <h1 className=" text-[#00a2ff] text-[24px]  pb-4 pl-4 font-semibold">
        Top 10 Of The week
      </h1>
      <div className="bg-gray-900 pl-4 pt-2 pb-2 flex flex-col">
        {topTen.map((anime) => (
          <div className=" flex pb-2 space-x-3 top w-full" key={anime.id}>
            <span className=" w-[60px] md:w-1/3 flex justify-center text-center text-[#00a2ff]  text-[1.6rem]  underline-offset-8 cursor-pointer">
              {anime.rank}
            </span>
            <div className="w-[120px] h-[180px] p-0 md:w-1/3 md:h-[100px]">
              <img
                src={anime.images?.jpg.large_image_url}
                alt={anime.title}
                className=" w-[100%] h-[100%]"
                onClick={() => {
                  navigate(`/anime/${anime.name}`);
                }}
              />
            </div>
            <div className="text-white text-[16px] md:text-[.9rem] md:w-2/3">
              <p>
                {anime.title.length > 20
                  ? `${anime.title.substring(0, 35)}...`
                  : anime.title}
              </p>
              <p>{anime.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOfWeek;
