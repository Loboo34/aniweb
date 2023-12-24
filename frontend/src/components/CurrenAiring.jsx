import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import animeData from "../AnimeData"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faAngleRight, faAngleLeft, faPlay, faBookBookmark, faBookmark
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CurrenAiring = () => {
  const swiperNavNextRef = useRef(null);
  const swiperNavPrevRef = useRef(null);

  return (
    <div className=" pt-[60px] pb-4 w-full relative flex items-center justify-center">
      {" "}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        className="mySwiper w-[90%]     md:h-[500px] h-[250px]"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {animeData.map((anime) => (
          <SwiperSlide key={anime.id}>
            <div className="bg-black justify-center relative  flex airing">
              <img src={anime.img} alt="" className=" w-full  mask1" />
              <div className=" text-white absolute md:top-[10%] bottom-[5%] left-0 z-10 md:pl-4 ">
                <h1 className=" md:text-[30px] text-[.9rem] font-black md:pb-6 pb-2">
                  {anime.name}
                </h1>
                <div className="md:pb-6 pb-2 text-[.7rem] flex items-center space-x-2">
                  <span>sub | dub</span>

                  <span>Action,shounen.... </span>
                </div>
                <p className=" text-left md:pr-[50%] md:text-[14px] text-[.7rem] font-medium pb-6 max-md:hidden ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Modi, rerum assumenda qui magni voluptatem sint mollitia,
                  dolorum dignissimos iure iusto similique cum fuga tenetur
                  expedita officiis ullam eaque aspernatur obcaecati?
                </p>
                <div className=" flex space-x-4 md:pt-6">
                  <span className=" text-[.9rem] md:text-[1.2rem] bg-blue-600 pl-3 pr-3 pt-2 pb-2  cursor-default hover:text-black">
                    <FontAwesomeIcon icon={faPlay} className=" pr-2 mt-1 " />
                    Watch Now
                  </span>

                  <span className=" text-[18px] border-2 border-blue-600 pl-2 pr-2 pt-2   cursor-default text-blue-600 hover:text-[#00a2ffe7] hover:border-[#00a2ffe7]">
                    <FontAwesomeIcon icon={faBookmark} />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className=" absolute md:left-[35px] left-[5px] md:top-[50%] max-md:hidden top-[55%] text-white z-10 cursor-pointer text-[20px] font-semibold"
        ref={swiperNavPrevRef}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div
        className=" absolute md:right-[35px] right-[5px] md:top-[50%] max-md:hidden top-[55%] z-10 text-white cursor-pointer text-[20px] font-semibold "
        ref={swiperNavNextRef}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};


export default CurrenAiring;
