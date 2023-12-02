import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faReddit,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const footerLinks = [
      {
        name: "All",
        path: "/AZ-list",
      },
      {
        name: "#",
        path: "/",
      },
      {
        name: "0-9",
        path: "/",
      },
      {
        name: "A",
        path: "/",
      },
      {
        name: "B",
        path: "/",
      },
      {
        name: "C",
        path: "/",
      },
      {
        name: "D",
        path: "/",
      },
      {
        name: "E",
        path: "/",
      },
      {
        name: "F",
        path: "/",
      },
      {
        name: "G",
        path: "/",
      },
      {
        name: "H",
        path: "/",
      },
      {
        name: "I",
        path: "/",
      },
      {
        name: "J",
        path: "/",
      },
      {
        name: "K",
        path: "/",
      },
      {
        name: "L",
        path: "/",
      },
      {
        name: "M",
        path: "/",
      },
      {
        name: "N",
        path: "/",
      },
      {
        name: "O",
        path: "/",
      },
      {
        name: "P",
        path: "/",
      },
      {
        name: "Q",
        path: "/",
      },
      {
        name: "R",
        path: "/",
      },
      {
        name: "S",
        path: "/",
      },
      {
        name: "T",
        path: "/",
      },
      {
        name: "U",
        path: "/",
      },
      {
        name: "V",
        path: "/",
      },
      {
        name: "W",
        path: "/",
      },
      {
        name: "X",
        path: "/",
      },
      {
        name: "Y",
        path: "/",
      },
      {
        name: "Z",
        path: "/",
      },
    ];
  const myStyle = {
    backgroundImage: "url(/img/footer.jpg)",
    // backgroundPositionX: 'right',
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <div className="  pt-8 pb-8  pl-4 bg-[#000000d9] " style={myStyle}>
      <div className=" flex pb-4 md:pb-8 max-md:flex max-md:justify-center max-md:items-center">
        <img
          src="/img/logo1.png"
          alt="img1"
          className="h-[12] w-[90px] pl-6 max-md:hidden"
        />
        <hr className=" text-black h-[50px] w-[50px] font-bold rotate-90 -ml-2 opacity-20 max-md:hidden" />
        <h1 className=" pl-10 text-center text-white leading-4 pt-2 max-md:hidden">
          Join <br />
          now
        </h1>
        <div className="pl-3 pt-3  flex space-x-3">
          <FontAwesomeIcon
            icon={faDiscord}
            className=" text-3xl text-[#00a2ff]  rounded pl-1 pr-1"
          />
          <FontAwesomeIcon
            icon={faTelegram}
            className="  text-3xl text-[#00a2ff] rounded pl-1 pr-1"
          />
          <FontAwesomeIcon
            icon={faReddit}
            className="  300 text-3xl text-red-600 pl-1 pr-1"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="  text-3xl text-[#00a2ff] pl-1 pr-1"
          />
        </div>
      </div>
      <hr className=" text-black h-4 w-[435px] text-center ml-6 opacity-20" />
      <div className=" flex max-md:hidden">
        <h1 className=" text-xl pr-3 text-white">A-Z LIST</h1>
        <hr className=" text-black mt-3 w-[20px] font-bold rotate-90 opacity-20" />
        <h4 className=" pl-3 text-white">
          Searching anime order by alphabet name A to Z.
        </h4>
      </div>
      <div className=" pt-4 flex space-x-3 max-md:hidden">
        {footerLinks.map((link) => (
          <button
            className=" text-[14px] pt-1 pb-1  bg-black text-white pl-2 pr-2 rounded mr-2 hover:bg-pink-500 font-medium"
            onClick={() => {
              window.location.pathname = link.path;
            }}
          >
            {link.name}
          </button>
        ))}
      </div>
      <div className=" flex md:pt-6 ">
        <h1 className=" pr-8 text-[10px] md:text-sm text-white">
          Terms of service
        </h1>
        <h1 className=" pr-8 text-[10px] md:text-sm text-white">
          Terms of service
        </h1>
        <h1 className=" pr-8 text-[10px] md:text-sm text-white">DMCA</h1>
        <h1 className=" pr-8 text-[10px] md:text-sm text-white">Contact</h1>
        <h1 className=" pr-8 text-[10px] md:text-sm text-white">
          Zoro proxy site
        </h1>
      </div>
    </div>
  );
};

export default Footer;
