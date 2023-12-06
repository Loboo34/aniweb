import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Pagination, Navigation, Keyboard } from "swiper/modules";
import animeData from '../AnimeData';


const Latestep = () => {
  return (
    <div className=" pb-6  pr-2 ">
      <h1 className="text-[#00a2ff] text-[24px] pl-4 pb-4 font-semibold ">
        Latest Episodes
      </h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={5}
        spaceBetween={30}
        // grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper pl-8 pb-11"
      >
        <div className="">
          {animeData.map((anime) => (
            <SwiperSlide>
              <div className=" text-white relative cursor-pointer container h-[100%]">
                <img
                  src={anime.cardpic}
                  alt="pic"
                  className=" h-[280px] w-[250px]"
                />
                <h1>{anime.name}</h1>
                <span>sub | dub</span>
                <div className=" pl-3 pt-2 absolute top-0 left-0 h-[100%] info" style={{backgroundImage: `url(${anime.cardpic})` }}>
                  <>
                    <h1 className="pb-2 text-[20px] text-[#00a2ff]">
                      {anime.name}
                    </h1>
                    <p>No of seasons</p>
                    <p>No of Episodes</p>
                  </>
                  <p className=" pt-4 italic">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum impedit ut ex porro deserunt accusantium delectus.{" "}
                  </p>
                  <div className="space-x-5 text-[20px] absolute bottom-2  ">
                    <FontAwesomeIcon icon={faPlay} className="hover:text-[#00a2ff]  " />
                    <FontAwesomeIcon icon={faAdd} className="hover:text-[#00a2ff]  " />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Latestep