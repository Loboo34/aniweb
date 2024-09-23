import React from "react";
//import animeData from "../AnimeData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Cardx = ({anime, config}) => {
  const navigate = useNavigate();
  return (
    <div className=" cardcontainer  pl-1 pr-1 pb-5 w-full">
      {config.showTitle && <h1 className="text-[#00a2ff] text-[24px]  md:pb-4 pb-3 font-semibold ">{anime.title}</h1>}
    </div>
  );
};

export default Cardx;
