import React from "react";
import { Box, Image } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.page_layout}>
      <div className={`${styles.navbar} ${styles.topnav}`}>
        <div id={styles.logo}>
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
              <i className="fa-solid fa-phone num"></i> 1860 123 1000
            </span>
            <span>
              <i className="fa-solid fa-location-dot add"></i> Bengaluru
            </span>
            <span className={styles.login_main}>
              <i className="fa-regular fa-user"></i> Login/Signup
            </span>{" "}
            <span className={styles.login}></span>
            <div></div>
          </div>
          <div className={styles.search_cart}>
            <div className={styles.search_cart_inp}>
              <input
                style={{ outline: "solid 1px #84c225" }}
                type="text"
                placeholder="Search for products.."
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className={styles.cart}>
              <Box>
                <i className="fa-solid fa-basket-shopping"></i>
              </Box>
              <div>
                <span>My Basket</span>
                <br />
                <span>0 Items</span>
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
                    <hr />
                    <a href="">Foodgrains, Oil & Masala</a>
                    <hr />
                    <a href="">Bakery, Cakes & Dairy</a>
                    <hr />
                    <a href="">Beverages</a>
                    <hr />
                    <a href="">Snacks & Branded Foods</a>
                    <hr />
                    <a href="">Beauty & Hygiene</a>
                    <hr />
                    <a href="">Cleaning & Household</a>
                    <hr />
                    <a href="">Kitche, Garden & Pets</a>
                    <hr />
                    <a href="">Eggs, Meat & Fish</a>
                    <hr />
                    <a href="">Gourmet & World Food</a>
                    <hr />
                    <a href="">Baby Care</a>
                    <hr />
                    <a href="">View All</a>
                  </div>
                  <div className={styles.column}>
                    <a href="">Fresh Vegetables</a>
                    <hr />
                    <a href="">Herbs & Seasonings</a>
                    <hr />
                    <a href="">Fresh Fruits</a>
                    <hr />
                    <a href="">Exotic Fruits & Veggies</a>
                    <hr />
                    <a href="">Cuts & Sprouts</a>
                    <hr />
                    <a href="">Flower Bouqets, Bunches</a>
                  </div>
                  <div className={styles.column}>
                    <a href="">Potato Onion & Tomato</a>
                    <hr />
                    <a href="">Cucumber &amp; Capsicum</a>
                    <hr />
                    <a href="">Beans Brinjals & Okra</a>
                    <hr />
                    <a href="">Leafy Vegetables</a>
                    <hr />
                    <a href="">Cabbage & Cauliflower</a>
                    <hr />
                    <a href="">Root Vegetables</a>
                    <hr />
                    <a href="">Gourd, Pumpkin, Drumstick</a>
                    <hr />
                    <a href="">Specialty</a>
                  </div>
                  <div className={styles.column}>
                    <a href="">Popular Searches</a>
                    <hr />
                    <a href="">Vegetables</a>
                    <hr />
                    <a href="">Cucumber</a>
                    <hr />
                    <a href="">Vegetable</a>
                    <hr />
                    <a href="">Chinese Cabbage</a>
                    <hr />
                    <a href="">Vege</a>
                    <hr />
                    <a href="">Veg</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
        {/* <div className={styles.navbar}>
          <button className={styles.dropbtnoffer}>OFFERS</button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
