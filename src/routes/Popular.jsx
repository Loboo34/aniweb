import React, { useState } from 'react'

import animeData from '../AnimeData'
import Navbar from '../components/Navbar'
import Card from '../components/Card';
import GenreData from '../components/GenreData';

const Popular = () => {
  const [showAllGenre, setShowAllGenre] = useState(false)

   const handleShowAllGenre = () => {
     setShowAllGenre((prevState) => !prevState);
   };

    const topTen = animeData.slice(0, 10);
    const truncatedGenre = GenreData.slice(0, 24)
  return (
    <div className=" bg-[#000000] pt-[55px] pl-4">
      <div className=" w-full md:flex ">
        <div className=" md:w-9/12">
          <h1 className=" text-[#00a2ffe7]  pb-4 text-[2.2rem] font-semibold">
            Most Popular
          </h1>
          <Card animeData={animeData} />
        </div>
        <div className="flex flex-col md:w-3/12 w-[100%] ">
          {" "}
          <div className="  ">
            <h1 className="text-[#00a2ffe7]  pb-4 text-[2.2rem] pl-4 font-semibold">
              Genre
            </h1>
            <div className="bg-gray-900 rounded-md mr-4 ml-4 pb-[50px] relative">
              <div className="  grid md:grid-cols-3 grid-cols-4 pl-3   ">
                {truncatedGenre.map((genre) => (
                  <div className="p-1">
                    <span
                      className=" text-white text-[.9rem] hover:bg-slate-500 pt-1 pb-1 pr-2 pl-2 cursor-default"
                      onClick={() => {
                        window.location.pathname = genre.link;
                      }}
                    >
                      {genre.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className=" absolute bottom-2 w-full flex justify-center">
                {!showAllGenre && (
                  <button
                    className=" text-slate-200 text-[1.2rem] bg-slate-600 pl-10 pr-10 cursor-pointer"
                    onClick={handleShowAllGenre}
                  >
                    {showAllGenre ? "show less" : "show more"}
                  </button>
                )}
                {showAllGenre && (
                  <button
                    className=" text-slate-200 text-[1.2rem] bg-slate-600 pl-12 pr-12 cursor-pointer"
                    onClick={handleShowAllGenre}
                  >
                    {showAllGenre ? "show less" : "show more"}
                  </button>
                )}
              </div>
              {showAllGenre && (
                <div className=" bg-gray-900 grid md:grid-cols-3 grid-cols-4 pl-3   ">
                  {GenreData.filter(
                    (genre) => !truncatedGenre.includes(genre)
                  ).map((genre) => (
                    <div className="p-1">
                      <span
                        className=" text-white text-[.9rem] hover:bg-slate-500 pt-1 pb-1 pr-2 pl-2 cursor-default"
                        onClick={() => {
                          window.location.pathname = genre.link;
                        }}
                      >
                        {genre.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="pt-10 mr-4 ml-4 pb-4">
            <h1 className=" text-[#00a2ff] text-[24px]  pb-4 pl-4 font-semibold">
              Top 10 Of The week
            </h1>
            <div className="bg-gray-900 pl-4 pt-2 pb-2">
              {topTen.map((anime) => (
                <div className=" flex pb-2 space-x-3 top">
                  <span className="text-[#00a2ff] text-[1.6rem]  underline-offset-8">
                    o1
                  </span>
                  <img
                    src={anime.cardpic}
                    alt={anime.name}
                    className=" w-[80px] h-[90px]"
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
        </div>
      </div>
    </div>
  );
}

export default Popular