import React from "react";
import Hero from "../components/Home/Hero";
import Popular from "../components/Home/Popular";
import SectionOne from "../components/Home/SectionOne";
import Footer from "./Footer";
import ExplorePlace from "../components/Home/ExplorePlace";
import Count from "../components/Home/Count";
import Gallery from "../components/Home/Gallery";

const Home = () => {
  return (
    <div className="flex justify-center h-[500vh]">
      <div className="sm:w-[80%] w-[95%] flex flex-col items-center">
        <Hero />
        <Popular />
        <SectionOne />
        <ExplorePlace/>
        <Count/>
        <Gallery/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
