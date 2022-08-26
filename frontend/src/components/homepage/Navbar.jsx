import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  
  return (
    <div className={styles.page_layout}>
      <div>
        <div className={`${styles.navbar} ${styles.topnav}`}>
          <div
            // onClick={() => navigate("/")}
            id={styles.logo}
          >
            <Image
              w={["70%", "100%", "100%"]}
              h={[50]}
              src="https://64.media.tumblr.com/b0b0f04a44b92332a6c6343ac5bf1e96/3ff50a552f527619-c9/s400x600/d7effd42407109492412543fd1f3f1613c97483a.png"
              alt="bigbasket_logo"
            />
          </div>
          <div>
            <div className={styles.userLocation}>
              <span>
                <i className="fa-solid fa-phone num"></i> 656465415645456
              </span>
              <span>
                <i className="fa-solid fa-location-dot add"></i> 52125 Bengaluru
              </span>
              <span className={styles.login_main}>
                <i className="fa-regular fa-user"></i>{" "}
                {/* {!login ? (
                  <i onClick={() => navigate("/login")}>login/signup</i>
                ) : (
                  <i onClick={handleLogout}>Logout</i>
                )} */}
              </span>{" "}
              <span className={styles.login}>
                {/* <i>
                  {!login ? (
                    <i onClick={() => navigate("/login")}>login/signup</i>
                  ) : (
                    <i onClick={handleLogout}>Logout</i>
                  )}
                </i> */}
              </span>
              <div></div>
            </div>
            <div className={styles.search_cart}>
              <div className={styles.search_cart_inp}>
                <input
                  style={{ outline: "solid 1px #84c225" }}
                  type="text"
                  //   value={SearchText}
                  //   onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search for products.."
                />
                <button
                // onClick={handleSearch}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <div
                className={styles.cart}
                // onClick={handleCart}
              >
                <Box>
                  <i className="fa-solid fa-basket-shopping"></i>
                </Box>
                <div>
                  <span>My Basket</span>
                  <br />
                  <span>
                    {/* {cart}  */}
                    Item
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.div2}>
          <ul style={{ listStyleType: "none" }} className={styles.ulnav}>
            <div className={styles.navbar}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>SHOP BY CATEGORY</button>
                <div className={styles.dropdowncontent}>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <a href="">Fruits & Vegetables</a>
                      <a href="">Foodgrains, Oil & Masala</a>
                      <a href="">Bakery, Cakes & Dairy</a>
                      <a href="">Beverages</a>
                      <a href="">Snacks & Branded Foods</a>
                      <a href="">Beauty & Hygiene</a>
                      <a href="">Cleaning & Household</a>
                      <a href="">Kitche, Garden & Pets</a>
                      <a href="">Eggs, Meat & Fish</a>
                      <a href="">Gourmet & World Food</a>
                      <a href="">Baby Care</a>
                      <a href="">View All</a>
                    </div>
                    <div className={styles.column}>
                      <a href="">Fresh Vegetables</a>
                      <a href="">Herbs & Seasonings</a>
                      <a href="">Fresh Fruits</a>
                      <a href="">Exotic Fruits & Veggies</a>
                      <a href="">Cuts & Sprouts</a>
                      <a href="">Flower Bouqets, Bunches</a>
                    </div>
                    <div className={styles.column}>
                      <a href="">Potato Onion & Tomato</a>
                      <a href="">Cucumber &amp; Capsicum</a>
                      <a href="">Beans Brinjals & Okra</a>
                      <a href="">Leafy Vegetables</a>
                      <a href="">Cabbage & Cauliflower</a>
                      <a href="">Root Vegetables</a>
                      <a href="">Gourd, Pumpkin, Drumstick</a>
                      <a href="">Specialty</a>
                    </div>
                    <div className={styles.column}>
                      <a href="">Popular Searches</a>
                      <a href="">Vegetables</a>
                      <a href="">Cucumber</a>
                      <a href="">Vegetable</a>
                      <a href="">Chinese Cabbage</a>
                      <a href="">Vege</a>
                      <a href="">Veg</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
          <div className={styles.navbar}>
            <button className={styles.dropbtnoffer}>OFFERS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
