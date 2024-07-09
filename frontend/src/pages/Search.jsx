import React from "react";
import Footer from "../components/Footer/Footer";

const Search = () => {
  return (
    <main className=" pt-[70px]">
      <div
        className="  h-[250px] flex justify-center items-center bg-[black] w-full log"
        style={{ backgroundImage: "url(/img/slimebg.jpg)"}}
      >
       <div class="input-wrapper">
  <input class="input-box" type="text" placeholder="Search ..." />
  <span class="underline"></span>
</div>

      </div>
    </main>
  );
};

export default Search;
