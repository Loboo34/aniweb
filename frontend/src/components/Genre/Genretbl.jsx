import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GenreData from './GenreData';

const Genretbl = () => {
     const [showAllGenre, setShowAllGenre] = useState(false);

     const handleShowAllGenre = () => {
       setShowAllGenre((prevState) => !prevState);
     };
      const truncatedGenre = GenreData.slice(0, 25);
      const navigate = useNavigate();
  return (
    <div className=" max-md:pt-4">
      <h1 className="text-[#00a2ffe7]  md:pb-4 pb-2 md:text-[2.2rem] text-[1.4rem] pl-4 font-semibold">
        Genre
      </h1>
      <div className="md:bg-gray-900 rounded-md mr-4 ml-4 pb-[50px] relative">
        <div className="  md:grid md:grid-cols-3  md:pl-3  gc ">
          {truncatedGenre.map((genre) => (
            <div className="p-1" key={genre.id}>
              <span
                className=" text-white text-[.9rem] hover:bg-slate-500 pt-1 pb-1 pr-2 pl-2 cursor-default max-md:bg-slate-600"
                onClick={() => {
                  navigate(`/genre/${genre.name}`);
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
          <div className=" md:bg-gray-900 grid md:grid-cols-3 md:pl-3 gc   ">
            {GenreData.filter((genre) => !truncatedGenre.includes(genre)).map(
              (genre) => (
                <div className="p-1">
                  <span
                    className=" text-white text-[.9rem] hover:bg-slate-500 max-md:bg-slate-600 pt-1 pb-1 pr-2 pl-2 cursor-default"
                    onClick={() => {
                      window.location.pathname = genre.link;
                    }}
                  >
                    {genre.name}
                  </span>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Genretbl