import React from "react";
import GenreData from "./GenreData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  const sideBarMenu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Popular",
      path: "/popular",
    },
    {
      name: "Tv",
      path: "/Tvseries",
    },
    {
      name: "Movies",
      path: "/movies",
    },
    {
      name: "Dub",
      path: "/dub",
    },
    {
      name: "Sub",
      path: "/sub",
    },
  ];
  //const url = `sideBarMenu/$(sideBarMenu)`
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
            <>
              <p
                className=" text-[22px] pb-2 hover:text-[#00a2ff] cursor-default"
                onClick={() => {
                  window.location.pathname = link.path;
                }}
              >
                {link.name}
              </p>
            </>
          ))}
        </div>

        <h1 className=" text-[20px] pb-3 pt-5 text-[#00a2ff] font-bold ">
          Genre
        </h1>
        <div className=" grid grid-cols-2">
          {GenreData.map((gen) => (
            <p className=" text-[16px]">{gen.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
