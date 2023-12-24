import React from 'react'
import Card from '../components/Card';
import animeData from '../AnimeData';
import TopOfWeek from '../components/TopOfWeek';
import Genretbl from '../components/Genre/Genretbl';
import Footer from '../components/Footer/Footer';

const Movies = () => {
  return (
    <>
      <div className=" w-full lg:flex bg-[#000000] pt-[55px]">
        <div className=" lg:w-9/12">
          <h1 className=" text-[#00a2ffe7]  pb-4 text-[2.2rem] font-semibold">
            Movies
          </h1>
          <Card animeData={animeData} />
        </div>
        <div className="  lg:w-3/12 w-[100%] ">
          {" "}
          <>
          <Genretbl />
          </>
            <TopOfWeek />
        </div>
      </div>
     
    </>
  );
}

export default Movies