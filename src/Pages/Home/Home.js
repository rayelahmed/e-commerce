import React from "react";
import BrandSlider from "../BrandSlider/BrandSlider";
import "./Home.css";
import BlogArea from "../BlogArea/BlogArea";
import Banner from "./Banner";
import FeaturedBanner from "./FeaturedBanner";
import Legacy from "../Legacy/Legacy";
import Deficient from "../Deficient/Deficient";
import Banner2 from "../Banner/Banner2";

const Home = ({ addToCart }) => {
  return (
    <div className=" home-section">
      <Banner />
      <FeaturedBanner />
      <Deficient addToCart={addToCart} />
      <Banner2 />
      <Legacy addToCart={addToCart} />
      <BlogArea></BlogArea>
      <BrandSlider></BrandSlider>
    </div>
  );
};

export default Home;
