import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";

const Register = (props) => {
  // const [username, setUserame] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { registerUser, error } = useRegister();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    try {
      await registerUser(username, email, password);
    } catch (error) {
      console.log("Registration Error:", error);
    }
  };

  //    const handleChange = (e) => {
  // console.log(e.target)
  // const {username, value} = e.target
  // setFormValues({ ...formValues, [username]: value})
  // console.log(formValues)
  //    }

  return (
    <div className="   ">
      {/* <pre className=' text-white'>{JSON.stringify(formValues, undefined,2)}</pre> */}
      <div
        className="relative  md:w-[450px] md:h-[450px]  text-white pt-4 pl-10 max-md:pb-3 log"
        style={{ backgroundImage: "url(/img/slimebg.jpg)" }}
      >
        <h1 className=" text-[#00a2ff] text-2xl pb-6  ">Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col w-full pb-3">
            <div className=" pb-2 text-[1.2rem]">Name</div>
            <input
              type="text"
              placeholder="Enter Name"
              name="username"
              id="username"
              value={formData.username}
              className=" w-[80%] outline-none h-[30px] text-black pl-2 "
              onChange={handleInputChange}
            />
          </div>
          <div className=" flex flex-col w-full pb-3">
            <div className=" pb-2 text-[1.2rem]">Email</div>
            <input
              type="email"
              placeholder="email@gmail.com"
              name="email"
              id="email"
              value={formData.email}
              className=" w-[80%] outline-none h-[30px] text-black pl-2 "
              onChange={handleInputChange}
            />
          </div>
          <div className=" flex flex-col w-full pb-6">
            <div htmlFor="" className=" pb-2 text-[1.2rem]">
              Password
            </div>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              className=" w-[80%] outline-none h-[30px] text-black pl-2"
              onChange={handleInputChange}
            />
          </div>

          <button className=" bg-[#00a2ffe7] text-black text-[1.3rem]  font-bold w-[80%] text-center pt-1 ">
            <input type="submit" value="Register" />
          </button>

          <div className="pt-3 text-center pr-12">
            <p className="">
              Have an account?{" "}
              <span
                className="hover:text-[#00a2ff] cursor-pointer"
                onClick={() => props.onFormSwich("login")}
              >
                Login
              </span>{" "}
            </p>
          </div>
          {error && <div className=" text-red-800">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;
