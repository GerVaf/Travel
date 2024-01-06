import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
  const [count, setCount] = useState(false);

  return (
    <div className="my-10 w-full">
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className=" grid grid-cols-2 gap-5 xl:gap-0 xl:grid-cols-4">
          <div className=" col-span-1 items-center justify-center flex flex-col  ">
            <div className=" border shadow-xl items-center justify-center flex flex-col rounded-xl gap-4 font-bold w-[150px] h-[150px]">
              <h1 className="xl:text-2xl text-xl text-orange-500">
                {count && (
                  <CountUp start={0} end={24} duration={5} delay={0.5} />
                )}
                +
              </h1>
              <h2>Cities</h2>
            </div>
          </div>
          <div className=" col-span-1 items-center justify-center flex flex-col  ">
            <div className=" border shadow-xl items-center justify-center flex flex-col rounded-xl gap-4 font-bold w-[150px] h-[150px]">
              <h1 className="xl:text-2xl text-xl text-orange-500">
                {count && (
                  <CountUp start={0} end={700} duration={5} delay={0.5} />
                )}
                +
              </h1>
              <h2>Places</h2>
            </div>
          </div>
          <div className=" col-span-1 items-center justify-center flex flex-col  ">
            <div className=" border shadow-xl items-center justify-center flex flex-col rounded-xl gap-4 font-bold w-[150px] h-[150px]">
              <h1 className="xl:text-2xl text-xl text-orange-500">
                {count && (
                  <CountUp start={0} end={200} duration={5} delay={0.5} />
                )}
                +
              </h1>
              <h2>Hotel</h2>
            </div>
          </div>
          <div className=" col-span-1 items-center justify-center flex flex-col  ">
            <div className=" border shadow-xl items-center justify-center flex flex-col rounded-xl gap-4 font-bold w-[150px] h-[150px]">
              <h1 className="xl:text-2xl text-xl text-orange-500">
                {count && (
                  <CountUp start={0} end={2} duration={5} delay={0.5} />
                )}
                k+
              </h1>
              <h2>Reviews</h2>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Count;
