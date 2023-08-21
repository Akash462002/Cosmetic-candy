import React from "react";
import Header from "../HomeComponent/Header";
import Navbar from "../HomeComponent/Navbar";
import Slider from "../HomeComponent/Slider";
import HotDeals from "../HomeComponent/HotLink";
import JustIn from "../HomeComponent/JustIn";
import Video from "../HomeComponent/Video";
import TopPick from "../HomeComponent/TopPick";
import Reffer from "../HomeComponent/Reffer";
import Footer from "../HomeComponent/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      {/* <Product /> */}
      <HotDeals />
      <JustIn />
      <Video />
      <TopPick />
      <Reffer />
      <Footer />
    </div>
  );
}

export default HomePage;
