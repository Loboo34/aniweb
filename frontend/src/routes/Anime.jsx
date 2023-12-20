import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShareNodes, faAdd } from "@fortawesome/free-solid-svg-icons";
import { faStar, faBookmark } from "@fortawesome/free-regular-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

import animeData from "../AnimeData";
import Card from "../components/Card"
import Footer from "../components/Footer/Footer";


const Anime = () => {
   //const navigate = useNavigate();
  const { name } = useParams();
 const anime = animeData.find((anime) => anime.name === name);

  if (!anime) {
    return (
      <p className=" pt-[56px] w-full h-full flex justify-center items-center">
        Not Found
      </p>
    );
  }
const related = animeData.slice(0, 4)
const navigate = useNavigate()
  return (
    <div className=" bg-[#000000] pt-[60px] ">
      <div
        className="  h-[200px] flex justify-center alt"
        style={{
          backgroundImage: `url(${anime.img})`,
          backgroundSize: "cover",
          // filter: "blur(20px)",
        }}
      >
        <img src={anime.img} alt={anime.name} className=" h-[100%]" />
      </div>
      <div className="grid md:grid-cols-2 md:pl-6 text-white pb-4 ">
        <div className="   pt-3 pl-4 pb-5">
          <h1 className=" text-4xl pb-3 text-white">{anime.name}</h1>

          <div className="  flex space-x-2 pb-3 items-center">
            <span className="text-xl flex space-x-1 pr-1 ">
              <FontAwesomeIcon
                icon={faStar}
                className=" hover:text-[#00a2ff] "
              />
              <FontAwesomeIcon
                icon={faStar}
                className=" hover:text-[#00a2ff] "
              />
              <FontAwesomeIcon
                icon={faStar}
                className=" hover:text-[#00a2ff] "
              />
              <FontAwesomeIcon
                icon={faStar}
                className=" hover:text-[#00a2ff] "
              />
              <FontAwesomeIcon
                icon={faStar}
                className=" hover:text-[#00a2ff] "
              />
            </span>
            |<span>Average Rating:</span>
          </div>
          <p className=" text-base pb-3 text-gray-300">sub | dub . Tv</p>
          <p className=" pb-1 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            delectus consectetur, excepturi, ea tempora culpa, enim repellendus
            harum minus sint possimus! Doloremque veritatis, non molestias
            labore maiores vero voluptatibus minus.
          </p>
          <span className=" opacity-70 hover:opacity-95 cursor-default">
            More info
          </span>
          <div className=" pt-3 flex space-x-4">
            <span className=" text-[#00a2ff] text-xl border-2 border-[#00a2ff] pl-2 pr-2 flex items-center cursor-pointer hover:text-[#00a2ffe7]">
              <FontAwesomeIcon icon={faBookmark} className="pr-2 text-lg" />
              Add to Watchlist
            </span>
            <span className=" text-2xl hover:text-[#00a2ff]  tooltip">
              <FontAwesomeIcon icon={faShareNodes} />{" "}
              <p className="  text-sm tooltiptext">share</p>
            </span>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center text-white max-md:hidden">
          <img src={anime.img} alt="video" className=" w-[350px] pb-4" />
          <span className=" text-[#00a2ff] text-xl border-2 border-[#00a2ff] pl-2 pr-2 cursor-pointer hover:text-[#00a2ffe7]">
            <FontAwesomeIcon icon={faPlay} className="pr-2" />
            Start Watching sn1 Ep1
          </span>
        </div>
      </div>
      {/* break */}
      <div className="md:pl-8 md:w-9/12 w-full pb-[50px]">
        <h1 className=" text-[#00a2ff] text-[2rem] pb-4">Related</h1>
        <Card animeData={related} />
      </div>
      {/* break */}
      <div className=" pl-3">
        <h1 className=" text-[#00a2ff] text-3xl md:pl-6 pl-1 pb-4">
          More Like This
        </h1>
        <Swiper
          style={{
            "--swiper-navigation-color": "white",
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
          slidesPerView={2}
          spaceBetween={5}
          // grabCursor={true}
          // pagination={{
          //   clickable: true,
          // }}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySwiper  pb-11 md:pl-8 pr-8"
        >
          {animeData.map((anime) => (
            <SwiperSlide>
              <Link to={`anime/${anime.name}`} key={anime.id}>
                <div
                  className="text-white relative cursor-pointer container h-[100%]"
                  onClick={() => {
                    navigate(`anime/${anime.name}`);
                  }}
                >
                  <img
                    src={anime.cardpic}
                    alt={anime.name}
                    className=" md:h-[290px] md:w-[250px]  w-[180px] h-[200px]"
                  />
                  <h1>{anime.name}</h1>
                  <span className=" text-sm pb-2 text-gray-500">sub | dub</span>
                  <div
                    className=" pl-3 pt-2 absolute top-0 left-0 h-[100%] info"
                    style={{ backgroundImage: `url(${anime.cardpic})` }}
                  >
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
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};


export default Anime;
