import React from 'react'

const Register = (props) => {
  return (
    <div className="  top-0 left-0 w-full h-full bg-[#3e3d3dbd] flex justify-center items-center">
      <div
        className="relative  w-[500px] h-[450px] text-white pt-4 pl-10 log"
        style={{ backgroundImage: "url(/img/slimebg.jpg)" }}
      >
        <h1 className=" text-center pb-9 ">Create an Account</h1>
        <form>
          <div className=" flex flex-col w-full pb-3">
            <label className=" pb-2 text-[1.2rem]">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              required
              name="name"
              id="name"
              className=" w-[80%] outline-none h-[30px] text-black pl-2 "
            />
          </div>
          <div className=" flex flex-col w-full pb-3">
            <label className=" pb-2 text-[1.2rem]">Email</label>
            <input
              type="email"
              placeholder="email@gmail.com"
              required
              name="email"
              id="email"
              className=" w-[80%] outline-none h-[30px] text-black pl-2 "
            />
          </div>
          <div className=" flex flex-col w-full pb-6">
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

          <div className=" bg-[#00a2ffe7] text-black text-[1.3rem]  font-bold w-[80%] text-center pt-1 ">
            <input type="submit" value="Register" />
          </div>

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
        </form>
      </div>
    </div>
  );
}

export default Register