import React from "react";
import { FaGlobeAmericas, FaNewspaper, FaWifi } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import travel2 from "../../assets/travel2.svg";

const SectionOne = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col my-20">
      <div className="sm:w-2/4 ">
        <div className="w-full h-full">
          <img src={travel2} alt="" />
        </div>
      </div>

      <div className="sm:w-2/4 flex flex-col justify-start text-center gap-10">
        <h1 className="text-3xl font-bold">
          Explore all corners of the world with us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          impedit officiis, fugiat eveniet dolorum assumenda magnam provident
          nam delectus voluptatibus praesentium ex voluptates vero autem rem
          consectetur molestias excepturi. Nihil!
        </p>
        {/* icons  */}
        <div className=" grid grid-cols-2 ">
          <div className=" col-span-1 flex items-center gap-10 font-semibold">
            <div className="icon">
              <FaGlobeAmericas />
            </div>
            <p>Flight</p>
          </div>
          <div className=" col-span-1 flex items-center gap-10 font-semibold">
            <div className="icon">
              <FaNewspaper />
            </div>
            <p>Hotel</p>
          </div>
          <div className=" col-span-1 flex items-center gap-10 font-semibold">
            <div className="icon">
              <FaWifi />
            </div>
            <p>Wifi</p>
          </div>
          <div className=" col-span-1 flex items-center gap-10 font-semibold">
            <div className="icon">
              <IoFastFood />
            </div>
            <p>Food</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
