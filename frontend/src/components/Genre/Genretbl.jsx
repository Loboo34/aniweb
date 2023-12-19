import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GenreData from './GenreData';

const Genretbl = () => {
     const [showAllGenre, setShowAllGenre] = useState(false);

     const handleShowAllGenre = () => {
       setShowAllGenre((prevState) => !prevState);
     };
      const truncatedGenre = GenreData.slice(0, 24);
      const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-[#00a2ffe7]  pb-4 text-[2.2rem] pl-4 font-semibold">
        Genre
      </h1>
      <div className="bg-gray-900 rounded-md mr-4 ml-4 pb-[50px] relative">
        <div className="  grid md:grid-cols-3 grid-cols-4 pl-3   ">
          {truncatedGenre.map((genre) => (
            <div className="p-1" key={genre.id}>
              <span
                className=" text-white text-[.9rem] hover:bg-slate-500 pt-1 pb-1 pr-2 pl-2 cursor-default"
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
          <div className=" bg-gray-900 grid md:grid-cols-3 grid-cols-4 pl-3   ">
            {GenreData.filter((genre) => !truncatedGenre.includes(genre)).map(
              (genre) => (
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
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Genretbl