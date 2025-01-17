import React from "react";
import Header from "../components/Header/Header";
import WelcomePage from "../components/WelcomePage/welcomePage";
import PetCareSection from "../components/Pet-Care-Sections/petCareSection";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Do-you-know/Carousel";
import GoogleMaps from "../components/Map/GoogleMaps";
import Chatbot from "../components/Chatbot/Chatbot";

const Home = () => {
  return (
    <>
      <Header />
      <WelcomePage />
      <Chatbot />
      <PetCareSection />
      <Carousel />
      <GoogleMaps />
      <Footer />
    </>
  );
};

export default Home;
