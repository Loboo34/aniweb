import React, { useState } from 'react'
import Login from '../components/Login';
import Register from '../components/Register';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const LoginRegister = ({ closeModal, open }) => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div >
      <div >
        
        {currentForm === "login" ? (
          <Login onFormSwich={toggleForm} />
        ) : (
          <Register onFormSwich={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginRegister