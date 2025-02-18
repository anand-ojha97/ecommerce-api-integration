import React from "react";
import HeroBanner from "../components/Banner/HeroBanner";
import HomeFeatures from "../components/Features/HomeFeatures";
import FruitShop from "../components/Fruits Shop/FruitShop";
import DiscountFeatures from "../components/Features/DiscountFeatures";
import VegitableShop from "../components/Sliders/VegitableShop";
import YellowBanner from "../components/Banner/YellowBanner";
import Bestseller from "../components/Seller/Bestseller";
import Fact from "../components/Fact/Fact";
import Testimonial from "../components/Sliders/Reviews";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <HomeFeatures />
      <FruitShop />
      <DiscountFeatures />
      <VegitableShop />
      <YellowBanner />
      <Bestseller />
      <Fact />
      <Testimonial />
    </>
  );
};

export default Home;
