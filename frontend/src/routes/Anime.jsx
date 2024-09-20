import React, { useEffect, useState } from "react";
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
import Card from "../components/Card";
import Footer from "../components/Footer/Footer";

const Anime = () => {
  //const navigate = useNavigate();

  const { id } = useParams();
  //  const anime = animeData.find((anime) => anime.name === name);

  //   if (!anime) {
  //     return (
  //       <p className=" pt-[56px] w-full h-full flex justify-center items-center">
  //         Not Found
  //       </p>
  //     );
  //   }
  const [anime, setAnime] = useState({});
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnime = async (anime) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
      const data = await response.json();
      setAnime(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [recommendations, setRecommendations] = useState([]);

  const getRelated = async (anime) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/recommendations/anime`
      );
      const data = await response.json();
      setRecommendations(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnime(id);
    getRelated();
  }, []);

  const related = recommendations.slice(0, 4);
  const navigate = useNavigate();
  return (
    <div className=" bg-[#000000] pt-[60px] ">
      <div
        className="  h-[250px] flex justify-center alt"
        style={{
          backgroundImage: `url(${anime.images?.jpg.large_image_url})`,
          backgroundSize: "cover",
          width: "100%",
          //height: "100%"
          // filter: "blur(20px)",
        }}
      >
        <img
          src={anime.images?.jpg.large_image_url}
          alt={anime.title}
          className=" w-[320px]"
        />
      </div>
      <div className="grid md:grid-cols-2 md:pl-6 text-white pb-4 ">
        <div className="   pt-3 pl-4 pb-5">
          <h1 className=" text-4xl pb-3 text-white">{anime.title}</h1>

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
            |<span>Average Rating:{anime.rating}</span>
          </div>
          <p className=" text-base pb-3 text-gray-300">
            sub | dub . {anime.type}
          </p>
          <p className=" pb-1 text-white">
            {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
            <button
              className=" opacity-70 hover:opacity-95 cursor-default"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "Show Less" : "More Info"}
            </button>
          </p>
         
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
        <div className=" flex flex-col justify-center items-center text-white">
          {anime.trailer?.embed_url && (
            <iframe
              src={trailer?.embed_url}
              title="Inline frame Exaple"
              width="400"
              height="250"
              allow="accelerometer;  clipboard-write; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
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
              spaceBetween: 2,
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
            <SwiperSlide key={anime.id}>
              <Link to={`/anime/${anime.name}`}>
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
                    <p className=" pt-4 italic text-[.7rem] md:text-[1rem]">
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
    </div>
  );
};

export default Anime;
