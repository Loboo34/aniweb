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
    <div className="pt-[55px] pl-4  relative">
      <h1 className=" text-[#00a2ffe7]  pb-4 text-[2.2rem] font-semibold">
        AZ-List
      </h1>
      <div className=" flex pb-10  flex-wrap gap-4">
        {footerLinks.map((link) => (
          <NavLink
            to={`/az-list/${link.name}`}
            activeClassName="active"
            className={`text-[1.3rem] pt-1 pb-1 cursor-deafult  text-white pl-2 pr-2 rounded mr-2 bg-gray-600  font-medium 
            `}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="">
        <AzCard animeData={filter} />
      </div>
      <Footer />
    </div>
  );
};

export default AZlist;
