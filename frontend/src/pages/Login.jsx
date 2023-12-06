import React from "react";

const Login = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <div className="  w-[100%] h-full bg-[#eb5151bd] ">
      <div
        className="relative  md:w-[450px] md:h-[450px]  text-white pt-4 pl-10 max-md:pb-3 log"
        style={{ backgroundImage: "url(/img/slimebg.jpg)" }}
      >
        <h1 className=" text-center pb-9 ">Welcome Back</h1>
        <form>
          <div className=" flex flex-col w-full pb-3">
            <label className=" pb-2 text-[1.2rem]">Email</label>
            <input
              type="email"
              placeholder="name@email.com"
              required
              name="email"
              id="email"
              className=" w-[80%] outline-none h-[30px] text-black pl-2 "
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
              className=" w-[80%] outline-none h-[30px] text-black pl-2"
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
