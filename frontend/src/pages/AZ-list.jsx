import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import footerLinks from "../components/Footer/FooterLinks";
import axios from "axios";
import Paginatin from "../components/Paginatin";
//import Card from "../components/Card";
const Card = lazy(() => import("../components/Card"));

const AZlist = () => {
  const { letter } = useParams();
  //const link = footerLinks.find((link) => link.name === name);
  const [animeList, setAnimeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState(letter);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const limit = 25; // Number of items per page

  //   setLoading(true);
  //   const response = await axios.get(
  //     `http://localhost:4000/api/anime/anime/${letter}?page=${page}&limit=${limit}`
  //   );
  //   const { pagination, data } = response.data;
  //   setAnimeList(data);
  //   console.log(data.data);
  //   setCurrentPage(pagination.current_page);
  //   setTotalPages(pagination.last_visible_page);
  //   setHasNextPage(pagination.has_next_page);

  //   console.log(pagination);

  // };

  // useEffect(() => {
  //   getAnime(currentPage);
  // }, [letter, currentPage]);
  // const filter = animeData.slice(0, 10)
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

 
  const fetchAnime = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/anime/anime/${letter}?page=${page}&limit=${limit}`
      );
      const { pagination, data } = response.data;
      setAnimeList(data);
      setCurrentPage(pagination.current_page);
      setTotalPages(pagination.last_visible_page);
      setHasNextPage(pagination.has_next_page);
      console.log(data);
      console.log(pagination);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //setLoading(true)
    fetchAnime(currentPage, selectedLetter);
  }, [letter, currentPage, selectedLetter]);

  const handleLetterChange = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
  };

  //function to generate page numbers based on total pages
 
  return (
    <div className="pt-[55px] md:pl-4  relative">
      <h1 className=" text-[#00a2ffe7]  pb-4 md:text-[2.2rem] text-[1.2rem] font-semibold">
        AZ-List
      </h1>
      <div className=" md:flex pb-10  md:flex-wrap md:gap-4 grid grid-cols-8 ">
        {footerLinks.map((link) => (
          <NavLink
            to={`/az-list/${link.letter}`}
            activeclassname="active"
            className={`md:text-[1.3rem] text-[.8rem] pt-1 pb-1 cursor-deafult  text-white pl-2 pr-2 rounded mr-2 bg-gray-600  font-medium 
            `}
            key={link.id}
            onClick={() => handleLetterChange(link.letter)}
          >
            {link.letter}
          </NavLink>
        ))}
      </div>
      <>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="md:grid md:grid-cols-5 cardContainer pb-[30px]">
            {animeList.map((anime) => (
              <Suspense key={anime.mal_id} fallback={<div>Loading...</div>}>
                <Card anime={anime} config={config} />
              </Suspense>
            ))}
          </div>
        )}
      </>
      {loading && <div>Loading...</div>}

     <Paginatin totalPages={totalPages} currentPage={currentPage} hasNextPage={hasNextPage} />
    </div>
  );
};

export default AZlist;
