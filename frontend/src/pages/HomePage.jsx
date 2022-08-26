import React from "react";
import Footer from ".././components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";
import BankOffers from "../components/homepage/BankOffers";
import Beverages from "../components/homepage/Beverages";
import BottomCarousel from "../components/homepage/BottomCarousel";
import BrandStore from "../components/homepage/BrandStore";
import ButtonsLink from "../components/homepage/ButtonsLink";
import Cards from "../components/homepage/Cards";
import Cleaning from "../components/homepage/Cleaning";
import Deals from "../components/homepage/Deals";
import FruitsVeggis from "../components/homepage/FruitsVeggis";
import HomeKitchen from "../components/homepage/HomeKitchen";
import Makeup from "../components/homepage/Makeup";
import Snak from "../components/homepage/Snak";

export const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <CaptionCarousel />
      <ButtonsLink />
      <Cards />
      <BankOffers />
      <Cards />
      <Deals />
      <FruitsVeggis />
      <Beverages />
      <Snak />
      <Cleaning />
      <Makeup />
      <HomeKitchen />
      <BottomCarousel />
      <BrandStore />
      <Footer />
    </Box>
  );
};
