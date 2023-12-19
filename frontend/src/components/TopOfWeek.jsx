import React from "react";
import animeData from "../AnimeData";
import { useNavigate } from "react-router-dom";

const TopOfWeek = () => {
  const topTen = animeData.slice(0, 10);
  const navigate = useNavigate();
  return (
    <div className="pt-10 mr-4 ml-4 pb-4">
      <h1 className=" text-[#00a2ff] text-[24px]  pb-4 pl-4 font-semibold">
        Top 10 Of The week
      </h1>
      <div className="bg-gray-900 pl-4 pt-2 pb-2">
        {topTen.map((anime) => (
          <div className=" flex pb-2 space-x-3 top" key={anime.id}>
            <span className="text-[#00a2ff] text-[1.6rem]  underline-offset-8">
              o1
            </span>
            <img
              src={anime.cardpic}
              alt={anime.name}
              className=" w-[80px] h-[90px]"
              onClick={() => {
                navigate(`/anime/${anime.name}`);
              }}
            />
            <div className="text-white text-[16px]">
              <p>{anime.name}</p>
              <p>No of epissodes</p>
              <p>Tv</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOfWeek;
