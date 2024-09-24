import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenreData from "./GenreData";
import { useGlobalContext } from "../../context/GlobalProvider";

const Genretbl = () => {
  const [showAllGenre, setShowAllGenre] = useState(false);
  const [genres, setGenres] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const handleShowAllGenre = () => {
    setShowAllGenre((prevState) => !prevState);
  };

  const getGenres = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/anime/genres`);
      const data = await response.json();
      setGenres(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  const truncatedGenre = genres.slice(0, 24);

  //generate random colors
  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  };

  const navigate = useNavigate();
  return (
    <div className=" max-md:pt-4">
      <h1 className="text-[#00a2ffe7]  md:pb-4 pb-2 md:text-[2.2rem] text-[1.4rem] pl-4 font-semibold">
        Genre
      </h1>
      <div className="md:bg-gray-900 rounded-md md:mr-4 md:ml-4 mr-2 ml-2 pb-[50px] relative">
        <div className="  md:grid md:grid-cols-3   gc ">
          {truncatedGenre.map((genre) => (
            <div className="p-1" key={genre.mal_id}>
              <span
                className=" md:text-[.8rem] text-[.99rem] hover:bg-slate-500 pt-1 pb-1 pr-2 pl-2 cursor-default max-md:bg-slate-600 font-bold"
                onClick={() => {
                  navigate(`/genre/${genre.name}`);
                }}
                style={{
                  color: randomColor(),
                }}
              >
                {showMore
                  ? genre.name
                  : genre.name.length > 8
                  ? `${genre.name.substring(0, 8)}...`
                  : genre.name}
              </span>
            </div>
          ))}
        </div>
        <div className=" absolute bottom-2 w-full flex justify-center">
          {!showAllGenre && (
            <button
              className=" text-slate-200 text-[1.2rem] bg-slate-600 hover:bg-slate-500 w-[95%] cursor-pointer"
              onClick={handleShowAllGenre}
            >
              {showAllGenre ? "show less" : "show more"}
            </button>
          )}
          {showAllGenre && (
            <button
              className=" text-slate-200 text-[1.2rem] bg-slate-600 hover:bg-slate-500 w-[90%] cursor-pointer"
              onClick={handleShowAllGenre}
            >
              {showAllGenre ? "show less" : "show more"}
            </button>
          )}
        </div>
        {showAllGenre && (
          <div className=" md:bg-gray-900  md:grid md:grid-cols-3 gc   ">
            {genres
              .filter((genre) => !truncatedGenre.includes(genre))
              .map((genre) => (
                <div className="" key={genre.id}>
                  <span
                    className=" md:text-[.8rem] text-[.99rem] hover:bg-slate-500 max-md:bg-slate-600 pt-1 pb-1 pr-2 pl-2 cursor-default font-bold"
                    onClick={() => {
                      window.location.pathname = genre.link;
                    }}
                    style={{
                      color: randomColor(),
                    }}
                  >
                    {showMore
                      ? genre.name
                      : genre.name.length > 8
                      ? `${genre.name.substring(0, 8)}...`
                      : genre.name}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Genretbl;
