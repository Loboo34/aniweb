import React from 'react'
import Footer from '../components/Footer/Footer'

const Search = () => {
  return (
    <main className=" pt-[70px]">
      <div className="  h-[250px] flex justify-center items-center bg-slate-900 w-full">
        <div className=" flex flex-col w-[90%] md:pl-[25%]">
          <label htmlFor="Search" className="text-[#00a2ff] text-[2rem]">
            Search
          </label>
          <input type="search" placeholder='Search...' className=" md:w-[50%] w-full h-[30px]  pl-2 pt-1 pb-1 rounded" />
        </div>
      </div>
     
    </main>
  );
}

export default Search