import React from "react";
import animeData from "../AnimeData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Sections = () => {
  const secTitle = [
    {
      name: "Latest Episodes",
      description: "",
    },
    {
      name: "Over-Powered Protagonist",
      description: "",
    },
    {
      name: "Worth The Bing",
      description: "",
    },
    {
      name: "Under Rated",
      description: "",
    },
    {
      name: "Must watch",
      description: "",
    },
  ];
  return (
    <div className="pb-6 md:pl-10  md:pr-2 overflow-hidden">
      {secTitle.map((title) => (
        <div className=" pb-3">
          <h1 className=" text-[#00a2ff] text-[24px]  pb-4 font-semibold ">
            {title.name}
          </h1>
          <Swiper
            style={{
              "--swiper-navigation-color": "blue",
              "--swiper-pagination-color": "white",
            }}
            slidesPerView={5}
            spaceBetween={20}
            // grabCursor={true}
            // pagination={{
            //   clickable: true,
            // }}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}
            className="mySwiper  pb-11"
          >
            <div className=" flex">
              {animeData.map((anime) => (
                <div>
                  <SwiperSlide>
                    <Link to={`anime/${anime.name}`}>
                    <div className="text-white relative cursor-pointer container h-[100%]">
                      <img
                        src={anime.cardpic}
                        alt={anime.name}
                        className=" md:h-[300px] h-[200px] md:w-[250px] w-[100px]"
                      />
                      <h1 className=" text-xs md:text-[1rem]">{anime.name}</h1>
                      <span className=" md:text-sm text-xs pb-3 text-gray-500">
                        sub | dub
                      </span>
                      <div
                        className=" pl-3 pt-2 absolute top-0 left-0 h-[100%] info"
                        style={{ backgroundImage: `url(${anime.cardpic})` }}
                      >
                        <>
                          <h1 className="pb-2 text-[1rem] font-bold text-[#00a2ff]">
                            {anime.name}
                          </h1>
                          <p>No of seasons</p>
                          <p>No of Episodes</p>
                        </>
                        <p className=" pt-4 italic text-[1rem]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum impedit ut ex porro deserunt accusantium
                          delectus.{" "}
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
                </div>
              ))}
            </div>
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Sections;
