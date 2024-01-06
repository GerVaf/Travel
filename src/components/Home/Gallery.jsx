import React from "react";

const Gallery = () => {
  return (
    <div className="w-full flex flex-col gap-5 my-10">
      <div className="flex justify-between items-end ">
        <div className="flex xl:flex-row flex-col xl:items-end gap-5">
          <h1 className="text-2xl xl:text-4xl font-bold">Our Gallery</h1>
          <span className="xl:text-base text-[10px]">-Share your happy moments</span>
        </div>
        <button className="text-orange-500 font-semibold">View all</button>
      </div>

      {/* photo layout  */}
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className=" col-span-1 flex flex-col-reverse h-[80vh]">
          <div className="xl:h-[30vh] p-2 overflow-hidden">
            <img
              src="https://i.pinimg.com/564x/5a/ce/e9/5acee9b1a093b8f5e51f4f915f4e367e.jpg"
              alt=""
              className=" object-cover rounded w-full h-full"
            />
          </div>
          <div className="xl:h-[50vh] p-2 overflow-hidden">
            <img
              src="https://i.pinimg.com/564x/5a/ce/e9/5acee9b1a093b8f5e51f4f915f4e367e.jpg"
              alt=""
              className=" object-cover rounded w-full h-full"
            />
          </div>
        </div>
        <div className=" col-span-1 flex flex-col h-[80vh]">
          <div className="xl:h-[30vh] p-2 overflow-hidden">
            <img
              src="https://i.pinimg.com/564x/5a/ce/e9/5acee9b1a093b8f5e51f4f915f4e367e.jpg"
              alt=""
              className=" object-cover rounded w-full h-full"
            />
          </div>
          <div className="xl:h-[50vh] p-2 overflow-hidden">
            <img
              src="https://i.pinimg.com/564x/5a/ce/e9/5acee9b1a093b8f5e51f4f915f4e367e.jpg"
              alt=""
              className=" object-cover rounded w-full h-full"
            />
          </div>
        </div>
        <div className=" col-span-1 flex flex-col-reverse h-[80vh]">
          <div className="xl:h-[30vh] p-2 overflow-hidden">
            <img
              src="https://i.pinimg.com/564x/5a/ce/e9/5acee9b1a093b8f5e51f4f915f4e367e.jpg"
              alt=""
              className=" object-cover rounded w-full h-full"
            />
          </div>
          <div className="xl:h-[50vh] p-2 overflow-hidden">
            <img
              src="https://i.pinimg.com/564x/5a/ce/e9/5acee9b1a093b8f5e51f4f915f4e367e.jpg"
              alt=""
              className=" object-cover rounded w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
