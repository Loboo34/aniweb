import React, { lazy, Suspense, useEffect, useState } from "react";
//import animeData from "../AnimeData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";
import Card from "./Card";



const Sections = () => {
 

  const { upcomingAnime, popularAnime, airingAnime, movies, special } = useGlobalContext();

  const config = {
    showTitle: true,
    showImage: true,
    showSeasons: true,
    showEpisodes: true,
    showDescription: true,
    showType: true,
    showGenres: true,
    showSeason: true,
  };

  const renderAnime = (section) => {
    switch (section.name) {
      case "Top Movies":
        return movies?.slice(0, 10);
      case "Specials":
        return special?.slice(0, 10);
      // case "Worth The Bing":
      //   return popularAnime.slice(0, 10);
      // case "Under Rated":
      //   return popularAnime.slice(0, 10);
      // case "Must watch":
      //   return popularAnime.slice(0, 10);
      default:
        return [];
    }
  };

  return (
    <div className=" md:pl-6  md:pr-2 overflow-hidden w-full">
      {secTitle?.map((section) => {
        const animeList = renderAnime(section);
        return (
          <div key={section.id}>
            <div className=" relative">
              <h1 className=" text-[#00a2ff] text-[24px]  md:pb-4 pb-3 font-semibold ">
                {section.name}
              </h1>
              <Link to={`/more/${section.name}`}>
                <div className=" absolute right-6 top-3 text-white hover:text-[#00a2ff] pl-2 pr-2 flex space-x-2   cursor-pointer">
                  <p className="text-[15px]">View more</p>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-[#00a2ff] md:text-[15px] text-[.7rem] font-extrabold pt-[.39em]  "
                  />
                </div>
              </Link>
            </div>
            <div className=" w-full">
              <Swiper
                style={{
                  "--swiper-navigation-color": "blue",
                  "--swiper-pagination-color": "white",
                }}
                breakpoints={{
                  480: {
                    spaceBetween: 2,
                    slidesPerView: 4,
                  },
                  768: {
                    spaceBetween: 2,
                    slidesPerView: 6,
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
                  {animeList?.map((anime) => (
                    <SwiperSlide>
                      <Suspense fallback={<div>Loading...</div>}>
                        <div className=" flex">
                          <Card anime={anime} config={config} />
                        </div>
                      </Suspense>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sections;

export  const secTitle = [
  {
    id: 0,
    name: "Top Movies",
    description: "",
  },
  {
    id: 1,
    name: "Specials",
    description: "",
  },
  // {
  //   id: 2,
  //   name: "Worth The Bing",
  //   description: "",
  // },
  // {
  //   id: 3,
  //   name: "Under Rated",
  //   description: "",
  // },
  // {
  //   id: 4,
  //   name: "Must watch",
  //   description: "",
  // },
];

