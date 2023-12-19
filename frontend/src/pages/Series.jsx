import React from 'react'
import Card from '../components/Card';
import Genretbl from '../components/Genre/Genretbl';
import TopOfWeek from '../components/TopOfWeek';
import animeData from '../AnimeData';

const Series = () => {
  return (
    <div className=" bg-[#000000] pt-[55px] pl-4">
      <div className=" w-full md:flex ">
        <div className=" md:w-9/12">
          <h1 className=" text-[#00a2ffe7]  pb-4 text-[2.2rem] font-semibold">
           Tv Series
          </h1>
          <Card animeData={animeData} />
        </div>
        <div className="flex flex-col md:w-3/12 w-[100%] ">
          {" "}
          <>
            <Genretbl />
          </>
          <TopOfWeek />
        </div>
      </div>
    </div>
  );
}

export default Series