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
import Snack from "../components/homepage/Snack";
import { Box } from "@chakra-ui/react";
import TopCarousel from "../components/homepage/TopCarousel";
const HomePage = () => {
  return (
    <Box>
      <TopCarousel />
      <ButtonsLink />
      <Cards />
      <BankOffers />
      <Cards />
      <Deals />
      <FruitsVeggis />
      <Beverages />
      <Snack />
      <Cleaning />
      <Makeup />
      <HomeKitchen />
      <BottomCarousel />
      <BrandStore />
    </Box>
  );
};
export default HomePage;
