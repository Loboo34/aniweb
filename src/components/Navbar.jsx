import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
//import Popup from "./Popup";

import Popup from "reactjs-popup";
//import Warper from "./Warper";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Navbar = ({ toggle }) => {
  const [popUp, setPopUp] = useState(false);
  const [currentForm, setCurrentForm] = useState("login")

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    };
     const [open, setOpen] = useState(false);
     const closeModal = () => setOpen(false);
  return (
    <div className=" fixed z-40 w-[100%] text-[#00a2ff] flex items-center pt-1 pl-2 pb-2 bg-[#000000e8]">
      <FontAwesomeIcon
        icon={faBars}
        className=" md:text-[28px] text-[1rem] pr-4
      "
        onClick={toggle}
      />
      <div className=" flex space-x-2 pr-4  items-center">
        <img src="/img/logo1.png" alt="logo" className=" md:w-[50px] w-[30px]  h-auto " />
        <p className=" md:text-[22px] text-[.9rem] ">Slurp</p>
      </div>
      <div
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
      </div>

      <div className=" absolute right-2 pr-2 flex items-center space-x-3 ">
        <FontAwesomeIcon
          icon={faSearch}
          className=" pr-2 text-[18px] text-white"
        />
     
         <div>
            <button className=" text-[18px] bg-[#00a2ff] text-black pl-2 pr-2 pt-1 pb-1 rounded-md font-bold" onClick={() => setOpen(o => !o)}>
              LogIn
            </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        
       
          
            <div className="modal ">
             
              {currentForm === "login" ? (
                <Login onFormSwich={toggleForm} />
              ) : (
                <Register onFormSwich={toggleForm} />
              )}
            </div>
        </Popup>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
