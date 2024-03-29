import React from "react";
import "./style.scss";
import InputSearch from "./components/InputSearch";
const Banner = () => {
  return (
    <div className="  min-w-[100%]  bg-slate-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-[50px] items-center flex">
      <div className="flex justify-between w-[80%] mx-[300px]">
        <div className="basis-[10%]">
          <i className="fa-solid fa-sun"></i>
          {/* <i class="fa-regular fa-sun"></i> */}
        </div>
        <div className="basis-[60%] right-0">
          <InputSearch />
        </div>
        <div className="basis-[30%]">ok</div>
      </div>
    </div>
  );
};

export default Banner;
