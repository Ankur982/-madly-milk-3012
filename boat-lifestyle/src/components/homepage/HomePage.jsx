import React from "react";
import { Blog } from "../blog/Blog";
import { Footer } from "../Footer";
import { Navbar } from "../navbar/Navbar";
import { BestSeller } from "./BestSellers";
import { BoatSuperheroes } from "./BoatSuperheroes";
import { ComplexSlider } from "./ComplexSlider";
import { DailyDeal } from "./DailyDeals";
import { DropestProducts } from "./DropestProducts";
import { HomeAudio } from "./HomeAudio";
import { ImageSlider1 } from "./ImageSlider1";
import { ImageSlider3 } from "./ImageSlider3";
import { InThePress } from "./InThePress";
import { NewArrivals } from "./NewArrivals";
import { SmartWatches } from "./SmartWatches";
import Timer from "./Timmer";
import { TopEarbuds } from "./TopEarbuds";
import { TrendingANC } from "./TrendingANC";
import { TrendingWired } from "./TrendingWired";
import { TrendingWireless } from "./TrendingWireless";
import { Video } from "./Video";
import { WhatTheySay } from "./WhatTheySay";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <ImageSlider1 />
      <ComplexSlider />
      <BestSeller />
      <Timer/>
      <DailyDeal />
      <DropestProducts />
      <NewArrivals />
      <SmartWatches/>
      <TrendingWireless />
      <TrendingANC />
      <TopEarbuds />
      <TrendingWired />
      <BoatSuperheroes />
      <HomeAudio />
      <ImageSlider3 />
      <Video />
      <Blog/>
      <WhatTheySay />
      <InThePress />
      <Footer />
    </>
  );
};
