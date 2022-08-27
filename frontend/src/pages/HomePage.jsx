
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
import { Box } from "@chakra-ui/react";
import CaptionCarousel from '../components/homepage/TopCarasoule'
const HomePage = () => {
  return (
    <Box>
  
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
      
    </Box>
  );
};
export default HomePage;