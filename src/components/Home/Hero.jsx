import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import travel from '../../assets/travel.svg'
const Hero = () => {
  return (
    <div className="w-full flex xl:flex-row flex-col-reverse items-center ">
      <div className="xl:w-3/5 xl:h-[80vh] w-full h-full flex flex-col justify-around ">
        <h1 className="xl:text-[80px] xl:gap-10 text-2xl font-bold flex xl:items-start items-center justify-center flex-col">
          Explore
          <span className="flex items-center">
            Beautiful <PiStarFourFill />
          </span>
          World!
        </h1>

        <div className="xl:w-[800px] w-full shadow-md rounded-xl flex xl:flex-row flex-col justify-between items-center overflow-hidden">
          <div className="py-3 p-5 w-full h-full xl:px-8 text-[10px] xl:text-base flex items-end xl:gap-3">
            <div>
              <span className="text-blue-500">Located in</span>
              <p>Bangladesh</p>
            </div>
            <IoIosArrowDown className="text-blue-500" />
          </div>
          <hr className="w-full xl:w-[1px] h-[1px] xl:h-[40px] bg-gray-400" />
          <div className="py-3 p-5 w-full h-full xl:px-8 text-[10px] xl:text-base flex items-end xl:gap-3">
            <div>
              <span className="text-blue-500">Date</span>
              <p>Wed_7 Nov</p>
            </div>
            <IoIosArrowDown className="text-blue-500" />
          </div>
          <hr className="w-full xl:w-[1px] h-[1px] xl:h-[40px] bg-gray-400" />
          <div className="py-3 p-5 w-full h-full xl:px-8 text-[10px] xl:text-base flex items-end xl:gap-3">
            <div>
              <span className="text-blue-500">Price Range</span>
              <p>$400-$700</p>
            </div>
            <IoIosArrowDown className="text-blue-500" />
          </div>
          <div className="bg-blue-500 h-full flex items-center justify-center py-3 w-full xl:px-8 px-3 xl:text-base text-[10px] text-white ">
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="xl:w-2/5 xl:h-full w-[300px] h-[300px] flex self-center">
        <img className=" object-contain" src={travel} alt="" />
      </div>
    </div>
  );
};

export default Hero;
