import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalProvider';
import Card from '../components/Card';
import Genretbl from '../components/Genre/Genretbl';
import TopOfWeek from '../components/TopOfWeek';
import { secTitle } from '../components/Sections';

const SectionViewMore = () => {
    const { name } = useParams();

    const section = secTitle.find((sec) => sec.name === name);

    const {  movies, special } = useGlobalContext();

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
                return movies;
            case "Specials":
                return special;
            default:
                return [];
        }
    }

    const animeList = renderAnime(section);
  return (
    <div className=" pt-[60px] bg-[#000000] pr-1 pl-1">
      <div className="lg:flex w-full md:pl-2">
        <div className=" lg:w-9/12 w-full">
          <h1 className="text-[#00a2ffe7]  pb-4 text-[2.2rem] pl-4 font-semibold">
            {name}
          </h1>
          <div className="md:grid md:grid-cols-4">
            {animeList.map((anime) => (
              <Card anime={anime} config={config} />
            ))}
          </div>
        </div>
        <div className=" lg:w-3/12 w-[100%] ">
          {" "}
          <>
            <Genretbl />
          </>
          <>
            <TopOfWeek />
          </>
        </div>
      </div>
    </div>
  );
}

export default SectionViewMore