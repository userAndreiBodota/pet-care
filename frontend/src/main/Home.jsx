import React from "react";
import Header from "../components/Header/Header";
import WelcomePage from "../components/WelcomePage/welcomePage";
import PetCareSection from "../components/Pet-Care-Sections/petCareSection";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Do-you-know/Carousel";
import GoogleMaps from "../components/Map/GoogleMaps";

const Home = () => {
  return (
    <>
      <Header />
      <WelcomePage />
      <PetCareSection />
      <Carousel />
      <GoogleMaps />
      <Footer />
    </>
  );
};

export default Home;
