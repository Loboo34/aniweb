import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import footerLinks from "../components/Footer/FooterLinks";
import Card from "../components/Card";
import animeData from "../AnimeData";
import AzCard from "../components/AzCard";
import Footer from "../components/Footer/Footer"

const AZlist = () => {
  const { name } = useParams();
  //const link = footerLinks.find((link) => link.name === name);
  const filter = animeData.slice(0, 10)
  return (
    <div className="pt-[55px] md:pl-4  relative">
      <h1 className=" text-[#00a2ffe7]  pb-4 md:text-[2.2rem] text-[1.2rem] font-semibold">
        AZ-List
      </h1>
      <div className=" md:flex pb-10  md:flex-wrap md:gap-4 grid grid-cols-8 gap-1">
        {footerLinks.map((link) => (
          <NavLink
            to={`/az-list/${link.name}`}
            activeClassName="active"
            className={`md:text-[1.3rem] text-[.8rem] pt-1 pb-1 cursor-deafult  text-white pl-2 pr-2 rounded mr-2 bg-gray-600  font-medium 
            `} key={link.id}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="">
        <AzCard animeData={filter} />
      </div>
    
    </div>
  );
};

export default AZlist;
