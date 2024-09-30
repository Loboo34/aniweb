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
import { useGlobalContext } from "../context/GlobalProvider";
import Cardx from "../components/Cardx";

const Anime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const {popularAnime} = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const popular = popularAnime.slice(0, 10);

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
    type,
    genres,
    episodes,
    mal_id,
  } = anime;
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


  useEffect(() => {
  const fetchAnime = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await response.json();
    console.log(data);
    setAnime(data.data);
  };
  fetchAnime();
  }, [id]);


  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/recommendations`
      );
      const data = await response.json();
      console.log(data);
      setRecommendations(data.data);
    };
    fetchRecommendations();
  }, [id]);


  const related = recommendations?.slice(0, 4);

 
  return (
    <div className=" bg-[#000000] pt-[60px] ">
      <div
        className="  h-[250px] flex justify-center alt"
        style={{
          backgroundImage: `url(${images?.jpg.large_image_url})`,
          backgroundSize: "cover",
          width: "100%",
          //height: "100%"
          // filter: "blur(20px)",
        }}
      >
        <img
          src={images?.jpg.large_image_url}
          alt={anime.title}
          className=" w-[320px]"
        />
      </div>
      <div className="grid md:grid-cols-2 md:pl-6 text-white pb-4 ">
        <div className="   pt-3 pl-4 pb-5">
          <h1 className=" text-4xl pb-3 text-white">{anime?.title}</h1>
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
            |<span>Average Rating:{rating}</span>
          </div>
          <p className=" text-base pb-3 text-gray-300">sub | dub . {type}</p>
          <p className=" pb-3">
            {genres?.[0].name +
              " | " +
              genres?.[2]?.name +
              " | " +
              genres?.[3]?.name}
          </p>
          ``
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
          {trailer?.embed_url && (
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
      <div className="md:pl-8 md:w-9/12 w-full pb-[50px] ">
        <h1 className=" text-[#00a2ff] text-[2rem] pb-4">Related</h1>
        <div className=" flex space-x-2">
          {related.map((anime) => (
            <Cardx anime={anime} config={config} />
          ))}
        </div>
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
          {popular.map((anime) => (
            <SwiperSlide key={anime.mal_id}>
              <Card anime={anime} config={config} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Anime;
