import React from "react";
import GenreData from "./Genre/GenreData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  const sideBarMenu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Popular",
      path: "/popular",
    },
    {
      id: 3,
      name: "Tv",
      path: "/tvseries",
    },
    {
      id: 4,
      name: "Movies",
      path: "/movies",
    },
    {
      id: 5,
      name: "Dub",
      path: "/dub",
    },
    {
      id: 6,
      name: "Sub",
      path: "/sub",
    },
  ];
  //const navigate = useNavigate()
  return (
    <div
      className={` w-full h-full bg-[#0d0c0c98] overflow-hidden fixed z-50 ${
        isOpen ? "w-[250px]" : "hidden"
      }`}
    >
      <div
        className={` text-teal-50   bg-[#000000]  h-[100vh] relative  overflow-scroll pl-4 pt-3 ${
          isOpen ? "w-[250px]" : "hidden"
        }`}
      >
        <span className=" cursor-default" onClick={toggle}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
        <div className=" flex flex-col">
          {sideBarMenu.map((link) => (
            <p
              className=" text-[22px] pb-2 hover:text-[#00a2ff] cursor-default"
              key={link.id}
              // onClick={() => {
              //   navigate(`link/${link.name}`)
              // }}
               onClick={() => {
                 window.location.pathname = link.path;
              }}
            >
              {link.name}
            </p>
          ))}
        </div>

        <h1 className=" text-[20px] pb-3 pt-5 text-[#00a2ff] font-bold ">
          Genre
        </h1>
        <div className=" grid grid-cols-2">
          {GenreData.map((gen) => (
            <p className=" text-[16px]" key={gen.id}>
              {gen.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
