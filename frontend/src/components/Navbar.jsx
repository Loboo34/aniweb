import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
//import Popup from "./Popup";
import Popup from "reactjs-popup";

import LoginRegister from "../pages/LoginRegister";
//import { useAuthContext } from "../hooks/useAuthContext";
import { AuthContext } from "../context/AuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
const Navbar = ({ toggle }) => {
  //const [popUp, setPopUp] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const { user } = useContext(AuthContext);
  const {logout} = useLogout()

  const handleLogout = () => {
    logout()
  }
  return (
    <div className=" fixed z-40 w-[100%] text-[#00a2ff] flex items-center pt-2 pl-2 pb-2 bg-[#000000e8]">
      <FontAwesomeIcon
        icon={faBars}
        className=" md:text-[28px] text-[1.2rem] pr-4
      "
        onClick={toggle}
      />
      <div className=" flex space-x-2 pr-4  items-center">
        <img
          src="/img/logo1.png"
          alt="logo"
          className=" md:w-[50px] w-[30px]  h-auto "
        />
        <>
          <p className=" md:text-[22px] text-[1rem] hover:text-white cursor-pointer ">
            Slurp
          </p>
        </>
      </div>
      {/* <div
        className="flex space-x-2 items-center"
        onClick={() => {
          setPopUp(true);
        }}
      >
        <span className=" md:text-[22px] text-[.9rem]">Browse</span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="text-[14px] pt-2 active:bg-red-500"
        />
        <Popup trigger={popUp} setTrigger={setPopUp} />
      </div> */}

      <div className=" absolute  right-1 md:pr-2 flex items-center space-x-3 ">
        <FontAwesomeIcon
          icon={faSearch}
          className=" pr-2 text-[1.3rem] text-white"
        />
        {user && (
          <div>
            <div className=" w-12 h-auto rounded-full  flex justify-center items-center">
              <img
                src="/img/logo1.png"
                alt="profile-pic"
                className=" w-[90%] cursor-pointer"
                onClick={handleLogout}
              />
            </div>
            {/* <h1 className=" text-white">{user.email}</h1>
            <button onClick={handleLogout}>Log Out</button> */}
          </div>
        )}
        {!user && (
          <div>
            <button
              className=" text-[18px] bg-[#00a2ff] text-black pl-2 pr-2 pt-1 pb-1 rounded-md font-bold"
              onClick={() => setOpen((o) => !o)}
            >
              LogIn
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="modal w-screen flex justify-center">
                <div className=" relative md:w-[450px] md:h-[450px] w-[90%] max-md:absolute max-md:top-[-400px] left-5">
                  <span
                    className=" absolute -right-3 -top-4 z-30 text-[1.4rem] bg-white p-2 pt-1 pb-1 rounded-[50px] close"
                    onClick={closeModal}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className=" "
                      onClick={closeModal}
                    />
                  </span>
                  <LoginRegister />
                </div>
              </div>
            </Popup>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
