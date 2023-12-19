import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = (props) => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const { loginUser, isLoading } = useLogin()
   const handleSubmit = async (e) => {
    e.preventDefault();

    await loginUser(email, password);
  };
  return (
    <div className=" ">
      <div
        className=" pl-10 w-[100%] h-[100%] pt-5 text-white pb-10 log"
        style={{ backgroundImage: "url(/img/slimebg.jpg)" }}
      >
        <h1 className="  text-[#00a2ff] text-2xl pb-6  ">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col w-full pb-3">
            <label className=" pb-2 text-[1.2rem]">Email</label>
            <input
              type="email"
              placeholder="name@email.com"
              required
              name="email"
              id="email"
              value={email}
              className=" w-[80%] outline-none h-[30px] text-black pl-2 "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex flex-col w-full pb-3">
            <label htmlFor="" className=" pb-2 text-[1.2rem]">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              required
              name="password"
              value={password}
              className=" w-[80%] outline-none h-[30px] text-black pl-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" flex space-x-3 pb-3">
            <label className=" ">
              <input type="checkbox" /> Remember me
            </label>
            <p className="text-[#00a2ffdc] hover:text-[#00a2ff] cursor-pointer ">
              Forgot password?
            </p>
          </div>
          <div className=" bg-[#00a2ffe7] text-black text-[1.3rem]  font-bold w-[80%] text-center pt-1 pb-1">
            <input type="submit" value="Login" />
          </div>

          <div className="pt-3 text-center pr-12">
            <p className="">
              Dont have an account?{" "}
              <span
                className="hover:text-[#00a2ff] cursor-pointer"
                onClick={() => props.onFormSwich("register")}
              >
                Register
              </span>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
