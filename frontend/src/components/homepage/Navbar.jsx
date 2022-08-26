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

        <ul
          style={{ listStyleType: "none", display: "flex" }}
          className={styles.ulnav}
        >
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
                  <div className={styles.column}>
                    <img src="" alt="navbarimg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.navbar}>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>OFFERS</button>
            </div>
          </div>
        </ul>

        {/* <button
          //   onClick={Scroll}
          className={styles.scroll}
        >
          <i className="fa-solid fa-angle-up"></i>
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;

// let navbar = () => {
//   return `<div id="page_layout">
//       <div id="navv">
//           <div id="brand_curr">
//               <p><a href="index.html">BESTSELLERS</a></p>
//               <p id="currency"><a href="index.html">CURRENCY SELECTOR</a></p>
//               <p id="gold_rate"><a href="products.html">GOLD RATE</a></p>
//           </div>
//           <div>
//               <a href="login.html" id="user_l">LOGIN</a>
//               <a href="#">ENCIRCLE</a>
//               <a href="#">GOLDEN HARVEST</a>
//               <a href="#">BOOK AN APPOINTMENT</a>
//               <a href="cart.html">WISHLIST</a>
//               <a id = "cart1" href="cart.html">CART</a>
//           </div>
//       </div>
//       <div id="div2">
//           <a href="index.html"><img id="logo"
//                   src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/cb53f671-01d0-449e-b18d-a4e61e6ffa0b/TanishqLogo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-cb53f671-01d0-449e-b18d-a4e61e6ffa0b-mC036IT"
//                   alt="" /></a>
//           <ul id="topnav2" class="top ulnav">
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">ALL JEWELLERY</button>
//                       <div class="dropdown-content">
//                           <div class="header"></div>
//                           <div class="row">
//                               <div class="column">
//                                   <h3>CATEGORY</h3>
//                                   <a href="products.html">ALL JEWELLERY</a>
//                                   <a href="products.html" id="earrings">EARRINGS</a>
//                                   <a href="products.html" id="pendants">PENDANTS</a>
//                                   <a href="products.html">FINGER RINGS</a>
//                                   <a href="products.html" id="mangalsutra">MANGALSUTRA</a>
//                                   <a href="products.html">CHAIN</a>
//                                   <a href="products.html" id="necklace">NECKLACE</a>
//                                   <a href="products.html">NOSE PIN</a>
//                                   <a href="products.html">COUPLE RINGS</a>
//                               </div>
//                               <div class="column">
//                                   <a href="products.html">NECKLACE SET</a>
//                                   <a href="products.html" id="earrings">BANGLE</a>
//                                   <a href="products.html" id="pendants">BRACELETS</a>
//                                   <a href="products.html">PENDANT AND EARRING SET</a>
//                                   <a href="products.html" id="mangalsutra">GOLD COINS</a>
//                               </div>
//                               <div class="column">
//                                   <h3>GENDER</h3>
//                                   <a href="products.html">MEN</a>
//                                   <a href="products.html">WOMEN</a>
//                                   <a href="products.html">KIDS</a>
//                                   <a href="products.html">UNISEX</a>
//                               </div>
//                               <div class="column">
//                                   <h3>PRICE BRAND</h3>
//                                   <a href="products.html">
//                                       <5000 </a>
//                                           <a href="products.html">5K - 10K</a>
//                                           <a href="products.html">10K - 20K</a>
//                                           <a href="products.html">20K - 30K</a>
//                                           <a href="products.html">30K - 40K</a>
//                                           <a href="products.html">40K - 50K</a>
//                                           <a href="products.html">50K</a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">GOLD</button>
//                       <div class="dropdown-content">
//                           <div class="header"></div>
//                           <div class="row">
//                               <div class="column">
//                                   <h3>EARINGS</h3>
//                                   <a href="products.html">JHUMKA</a>
//                                   <a href="products.html">STUD</a>
//                                   <a href="products.html">HOOP</a>
//                                   <a href="products.html">DROP</a>
//                               </div>
//                               <div class="column">
//                                   <h3>PENDANTS</h3>
//                                   <a href="products.html">DAILY</a>
//                                   <a href="products.html">PARTY</a>
//                                   <a href="products.html">WORK WEAR</a>
//                                   <a href="products.html">TRADITIONAL</a>
//                               </div>
//                               <div class="column">
//                                   <h3>FINGER RING</h3>
//                                   <a href="products.html">ENGAEMENT RINGS</a>
//                                   <a href="products.html">PARTY</a>
//                                   <a href="products.html">WORKWEAR</a>
//                                   <a href="products.html">DAILY WEAR</a>
//                               </div>
//                               <div class="column">
//                                   <h3>OTHER CATEGORIES</h3>
//                                   <a href="products.html">CHAIN</a>
//                                   <a href="products.html">MANGALSUTRA</a>
//                                   <a href="products.html">NECKWEAR</a>
//                                   <a href="products.html">NOSE PIN</a>
//                                   <a href="products.html">NECKWEAR SET</a>
//                                   <a href="products.html">BANGLE</a>
//                                   <a href="products.html">BRACELET</a>
//                               </div>
//                               <div class="column">
//                                   <h3>GOLD COIN</h3>
//                                   <a href="products.html">1 GRAMS</a>
//                                   <a href="products.html">2 GRAMS</a>
//                                   <a href="products.html">4 GRAMS</a>
//                                   <a href="products.html">5 GRAMS</a>
//                                   <a href="products.html">8 GRAMS</a>
//                                   <a href="products.html">10 GRAMS</a>
//                                   <a href="products.html">25 GRAMS</a>
//                                   <a href="products.html">50 GRAMS</a>
//                                   <a href="products.html">100 GRAMS</a>
//                                   <a href="products.html">500 GRAMS</a>
//                                   <a href="products.html">1000 GRAMS</a>
//                               </div>
//                               <div class="column">
//                                   <h3>METAL COLOUR</h3>
//                                   <a href="products.html">YELLOW</a>
//                                   <a href="products.html">ROSE</a>
//                                   <a href="products.html">WHITE</a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">DIAMOND</button>
//                       <div class="dropdown-content">
//                           <div class="header"></div>
//                           <div class="row">
//                               <div class="column">
//                                   <h3>EARINGS</h3>
//                                   <a href="products.html">STUD</a>
//                                   <a href="products.html">HOOP</a>
//                                   <a href="products.html">DROP</a>
//                                   <a href="products.html">JHUMKA</a>
//                               </div>
//                               <div class="column">
//                                   <h3>PENDANTS</h3>
//                                   <a href="products.html">DAILY</a>
//                                   <a href="products.html">PARTY</a>
//                                   <a href="products.html">WORKWEAR</a>
//                                   <a href="products.html">TRADITIONAL</a>
//                               </div>
//                               <div class="column">
//                                   <h3>FINGER RING</h3>
//                                   <a href="products.html">ENGAEMENT RINGS</a>
//                                   <a href="products.html">SOLITARIES</a>
//                                   <a href="products.html">CASUAL</a>
//                               </div>
//                               <div class="column">
//                                   <h3>OTHER CATEGORIES</h3>
//                                   <a href="products.html">MANGALSUTRA</a>
//                                   <a href="products.html">NECKLACES</a>
//                                   <a href="products.html">NOSE PIN</a>
//                                   <a href="products.html">NECKLACE SET</a>
//                                   <a href="products.html">PENDANTS AND EARINGS SET</a>
//                                   <a href="products.html">BANGLE</a>
//                                   <a href="products.html">BRACELETS</a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">EARINGS</button>
//                       <div class="dropdown-content">
//                           <div class="header"></div>
//                           <div class="row">
//                               <div class="column">
//                                   <h3>POPULAR EARINGS</h3>
//                                   <a href="products.html">JHUMKAS</a>
//                                   <a href="products.html">STUDS</a>
//                                   <a href="products.html">LONG DROPS</a>
//                                   <a href="products.html">SHORT DROPS</a>
//                                   <a href="products.html">CHANDBALI</a>
//                                   <a href="products.html">DANGLE</a>
//                                   <a href="products.html">7 STONE</a>
//                                   <a href="products.html">BALI</a>
//                                   <a href="products.html">CLUSTER</a>
//                                   <a href="products.html">COLOR STONE</a>
//                                   <a href="products.html">NAVRATNA EARRINGS</a>
//                               </div>
//                               <div class="column">
//                                   <a href="products.html">ETERNITY</a>
//                                   <a href="products.html">FANCY</a>
//                                   <a href="products.html">FLORAL</a>
//                                   <a href="products.html">GEMSTONE</a>
//                                   <a href="products.html">GEOMATRIC</a>
//                                   <a href="products.html">HUGGIES</a>
//                                   <a href="products.html">JALI</a>
//                                   <a href="products.html">LEAF</a>
//                                   <a href="products.html">MOTIF</a>
//                               </div>
//                               <div class="column">
//                                   <a href="products.html">HOOP</a>
//                                   <a href="products.html">PLATINUM</a>
//                                   <a href="products.html">RAJKOT BALI</a>
//                                   <a href="products.html">SINGLE STONE</a>
//                                   <a href="products.html">STUD WITH HANDING</a>
//                                   <a href="products.html">SUI SHAGA</a>
//                                   <a href="products.html">TRADITIONAL STUD</a>
//                               </div>
//                               <div class="column">
//                                   <h3>SHOP BY</h3>
//                                   <a href="products.html">10000</a>
//                                   <a href="products.html">10K-25K</a>
//                                   <a href="products.html">25K-50K</a>
//                                   <a href="products.html">50K-100K</a>
//                                   <a href="products.html">100K-200K</a>
//                                   <a href="products.html">200K-500K</a>
//                               </div>
//                               <div class="column">
//                                   <h3>SHOP BY</h3>
//                                   <a href="products.html"> 10000 </a>
//                                   <a href="products.html">10K-25K</a>
//                                   <a href="products.html">25K-50K</a>
//                                   <a href="products.html">50K-100K</a>
//                                   <a href="products.html">100K-200K</a>
//                                   <a href="products.html">200K-500K</a>
//                               </div>
//                               <div class="column">
//                                   <h3>BY METALS & STONES</h3>
//                                   <a href="products.html"> GOLD EARRINGS</a>
//                                   <a href="products.html">DIAMOND EARRINGS</a>
//                                   <a href="products.html">WHITE GOLD EARRINGS</a>
//                                   <a href="products.html">ROSE GOLD EARRINGS</a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">RINGS</button>
//                       <div class="dropdown-content">
//                           <div class="header"></div>
//                           <div class="row">
//                               <div class="column">
//                                   <h3>POPULAR RINGS</h3>
//                                   <a href="products.html">ENGAEMENT RINGS</a>
//                                   <a href="products.html">GOLD ENGAEMENT RINGS</a>
//                                   <a href="products.html">DIAMOND ENGAEMENT RINGS</a>
//                                   <a href="products.html">PLATINUM ENGAEMENT RINGS</a>
//                                   <a href="products.html">GOLD RINGS</a>
//                                   <a href="products.html">DIAMOND RINGS</a>
//                                   <a href="products.html">PLATINUM RINGS</a>
//                                   <a href="products.html">MEN'S RINGS</a>
//                                   <a href="products.html">CASUAL RINGS</a>
//                               </div>
//                               <div class="column">
//                                   <a href="products.html">GOLD BAND RINGS</a>
//                                   <a href="products.html">DIAMOND BAND RINGS</a>
//                                   <a href="products.html">PLATINUM BAND RINGS</a>
//                                   <a href="products.html">COUPLE RINGS</a>
//                                   <a href="products.html">SOLITARIES RINGS</a>
//                                   <a href="products.html">RELIGIOS RINGS</a>
//                                   <a href="products.html">NAVRATNA RINGS</a>
//                                   <a href="products.html">ALPHABET RINGS</a>
//                               </div>
//                               <div class="column">
//                                   <h3>PRICE RANGE</h3>
//                                   <a href="products.html">10000</a>
//                                   <a href="products.html">10K-25K</a>
//                                   <a href="products.html">25K-50K</a>
//                                   <a href="products.html">50K-100K</a>
//                                   <a href="products.html">100K-200K</a>
//                                   <a href="products.html">200K-500K</a>
//                               </div>
//                               <div class="column">
//                                   <h3>BY METALS & STONES</h3>
//                                   <a href="products.html">GEMSTONE</a>
//                                   <a href="products.html">SOLITARIES</a>
//                                   <a href="products.html">ROSE GOLD</a>
//                                   <a href="products.html">YELLOW GOLD</a>
//                                   <a href="products.html">WHITE GOLD</a>
//                                   <a href="products.html">SILVER</a>
//                                   <a href="products.html">GOLD</a>
//                                   <a href="products.html">DIAMOND</a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">DIGITAL GOLD</button>
//                   </div>
//               </div>
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">COLLECTIONS</button>
//                       <div class="dropdown-content">
//                           <div class="header"></div>
//                           <div class="row">
//                               <div class="column">
//                                   <a href="products.html">ROMANCE OF POLKI</a>
//                                   <a href="products.html">COLOUR ME JOY</a>
//                                   <a href="products.html">DOR</a>
//                                   <a href="products.html">UTSAAH</a>
//                                   <a href="products.html">LITTLE BIG MOMENTS</a>
//                                   <a href="products.html">ENGAEMENT RINGS</a>
//                                   <a href="products.html">DROPS OF RADIANCE</a>
//                                   <a href="products.html">MOODS OF THE EARTH</a>
//                                   <a href="products.html">EKATVAM</a>
//                               </div>
//                               <div class="column">
//                                   <a href="products.html">AARAMBH</a>
//                                   <a href="products.html">NYUSHA</a>
//                                   <a href="products.html">WEAR YOUR PRAYERS</a>
//                                   <a href="products.html">VIRASAT</a>
//                                   <a href="products.html">AHALYA</a>
//                                   <a href="products.html">SWAYAHM</a>
//                                   <a href="products.html">PREEN</a>
//                                   <a href="products.html">UTSAVA</a>
//                                   <a href="products.html">GULNAAZ</a>
//                               </div>
//                               <div class="column">
//                                   <a href="products.html">AVEER</a>
//                                   <a href="products.html">PADMAAVAT</a>
//                                   <a href="products.html">SYMBOL OF STRENGTH</a>
//                                   <a href="products.html">QUEEN OF HEARTS</a>
//                                   <a href="products.html">NILOUFER</a>
//                                   <a href="products.html">MIRAYAH</a>
//                                   <a href="products.html">GLITTERATI</a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">RIVAAH</button>
//                   </div>
//               </div>
//               <div class="navbar">
//                   <div class="dropdown">
//                       <button class="dropbtn">MIA</button>
//                       <div class="dropdown-content">
//                           <div class="header"></div>
//                           <div class="row">
//                               <div class="column">
//                                   <h3>CATEGORY</h3>
//                                   <a href="products.html>EARRINGS</a>
//                                   <a href="products.html">PENDANTS</a>
//                                   <a href="products.html">BRACELET</a>
//                                   <a href="products.html">RINGS</a>
//                                   <a href="products.html">NECKWEAR</a>
//                                   <a href="products.html">BANGLE</a>
//                                   <a href="products.html">CHAIN</a>
//                                   <a href="products.html">PENDANTS WITH CHAIN</a>
//                                   <a href="products.html">NOSEPINS</a>
//                               </div>
//                               <div class="column">
//                                   <h3>COLLECTIONS</h3>
//                                   <h3>MIA X DISNEY - THE PRINCESS</h3>
//                                   <a href="products.html">BIRTHSTONE</a>
//                                   <a href="products.html">MIA FESTIVE</a>
//                                   <a href="products.html">MIA GLAM</a>
//                                   <a href="products.html">MIA WINGS</a>
//                                   <a href="products.html">MIA ALLROUNDERS</a>
//                                   <a href="products.html">FRIENDS OF BRIDE</a>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <i class="material-icons" id="room">room</i>
//               <i class="material-icons" id="search">search</i>
//           </ul>
//       </div>
//   </div>`
// }
// export {navbar}
