import React from "react"
import { Link } from "react-router-dom"

const Card = ({anime}) => {
    
    return(
       <div className=" flex flex-col " key={anime?.mal_id}>
              <div className=" flex space-x-2 pb-2  w-full" key={anime.mal_id}>
                <Link to={`/anime/${anime.mal_id}`}>
                  <img
                    src={anime.images?.jpg.large_image_url}
                    alt="pic"
                    className=" pl-1  h-[80px]"
                    // onClick={() => {
                    //   navigate(`anime/${anime.title}`);
                    // }}
                  />
                </Link >
                <div className=" text-white">
                  <p className=" text-[.9rem] font-semibold text-left ">
                    {anime.title}
                  </p>
                  <p className=" text-[.8rem]">ep: {anime.episodes}</p>
                  <span className=" text-[.8rem]">Sub | Dub</span>
                </div>
              </div>
              <hr className=" text-white pb-2 w-[80%] opacity-30" />
            </div>
    )
}

export default Card