import React, { lazy, useEffect, useState } from "react";
//import animeData from "../AnimeData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
const Sections = () => {
  const secTitle = [
    {
      id: 0,
      name: "Latest Episodes",
      description: "",
    },
    {
      id: 1,
      name: "Over-Powered Protagonist",
      description: "",
    },
    {
      id: 2,
      name: "Worth The Bing",
      description: "",
    },
    {
      id: 3,
      name: "Under Rated",
      description: "",
    },
    {
      id: 4,
      name: "Must watch",
      description: "",
    },
  ];
  const some = lazy()
  const [animeData, setAnimeData] = useState([]);
  const [anime, setAnime] = useState();

  const {popularAnime} = useGlobalContext();

  const getCurrentAnime = async(anime) => {
    try{
      const resposnce = await fetch(
        "https://api.jikan.moe/v4/recommendations/anime"
      );
      const data = await resposnce.json();
      setAnimeData(data.data);
    }
    catch(error){
      console.log(error);
    }
  }


  useEffect(() => {
    getCurrentAnime( anime);
  }
  , []);
  return (
    <div className=" md:pl-6  md:pr-2 overflow-hidden w-full">
      {secTitle.map((title) => (
        <div key={title.id}>
          <h1 className=" text-[#00a2ff] text-[24px]  md:pb-4 pb-3 font-semibold ">
            {title.name}
          </h1>
          <div className=" w-full">
            <Swiper
              style={{
                "--swiper-navigation-color": "blue",
                "--swiper-pagination-color": "white",
              }}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                768: {
                  spaceBetween: 20,
                  slidesPerView: 5,
                },
              }}
              // grabCursor={true}
              // pagination={{
              //   clickable: true,
              // }}
              slidesPerView={2}
              spaceBetween={10}
              keyboard={{
                enabled: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Keyboard]}
              className="mySwiper  pb-2 md:pb-6"
            >
              <div className=" w-full">
                {popularAnime.map((anime) => (
                  <SwiperSlide key={anime.id}>
                    <Link to={`anime/${anime.name}`}>
                      <div className="text-white relative cursor-pointer container h-[100%]">
                        <img
                          loading="lazy"
                          src={anime.images?.jpg.large_image_url}
                          alt={anime.name}
                          className=" w-full md:h-[300px] h-[230px]"
                        />
                        <h1 className=" text-xs md:text-[1rem]">
                          {anime.title}
                        </h1>
                        <span className=" md:text-sm text-xs pb-3 text-gray-500 ">
                          sub | dub
                          <span className="pl-2"> {anime.type}</span>
                        </span>
                        <div
                          className=" pl-3 pt-2 absolute top-0 left-0 h-[100%] info"
                          style={{
                            backgroundImage: `url(${anime.images?.jpg.large_image_url})`,
                          }}
                        >
                          <>
                            <h1 className="pb-2 text-[1rem] font-bold text-[#00a2ff]">
                              {anime.title}
                            </h1>
                            {/* <p>No of seasons</p> */}
                            <p>Episodes: {anime.episodes}</p>
                          </>
                          <p className=" pt-4 italic md:text-[1rem] text-[.7rem] pr-2">
                            {anime.synopsis.substring(0, 90)}...
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
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sections;
