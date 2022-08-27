import React from "react";
import { Cart } from "./components/cartPage/Cart";
import Footer from "./components/homepage/Footer";
import Navbar from "./components/homepage/Navbar";
import { ProductDetails } from "./components/productDetails/ProductDetails";
import Address from "./components/PaymentPage/Address";
import Payment from "./components/PaymentPage/Payment/Payment";
import Product from "./components/products/Product";
import HomePage from "./pages/HomePage";
import { Route, Routes, useParams } from "react-router-dom";

const App = () => {
  const x = useParams();
  console.log(x);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Product/*" element={<Product />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/address" element={<Address />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
