import React from 'react'
import Card from '../components/Card';
import Genretbl from '../components/Genre/Genretbl';
import TopOfWeek from '../components/TopOfWeek';
import animeData from '../AnimeData';
import Footer from '../components/Footer/Footer';

const Series = () => {
  return (
    <>
      <div className=" w-full lg:flex bg-[#000000] pt-[55px]">
        <div className=" lg:w-9/12">
          <h1 className=" text-[#00a2ffe7]  pb-4 text-[2.2rem] font-semibold">
            Tv Series
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
      <Footer />
    </>
  );
}

export default Series