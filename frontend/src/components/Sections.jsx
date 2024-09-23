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
import Card from "./Card";
import Cardx from "./Cardx";
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

  const { upcomingAnime, popularAnime } = useGlobalContext();

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
      case "Latest Episodes":
        return upcomingAnime.slice(0, 10);
      case "Over-Powered Protagonist":
        return popularAnime.slice(0, 10);
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
      {secTitle.map((section) => {
        const animeList = renderAnime(section);
        return (
          <div key={section.id}>
            <h1 className=" text-[#00a2ff] text-[24px]  md:pb-4 pb-3 font-semibold ">
              {section.name}
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
                  {animeList.map((anime) => (
                    <SwiperSlide>
                      <div className=" flex">
                        <Card anime={anime} config={config} />
                      </div>
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
