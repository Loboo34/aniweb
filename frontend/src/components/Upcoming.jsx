import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import Ccg from "./Ccg";
import animeData from "../AnimeData";
import Card from "./Card";
const Upcoming = () => {
  return (
    <div className=" bg-red-500">
      <Swiper
        style={{
          "--swiper-navigation-color": "blue",
          "--swiper-pagination-color": "white",
        }}
        slidesPerView={5}
        spaceBetween={2}
        // grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper  pb-11 bg-pink-400 flex"
      >
        <SwiperSlide>
          <div>
            {" "}
            <Ccg />
            <Card animeData={animeData}/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Upcoming;
