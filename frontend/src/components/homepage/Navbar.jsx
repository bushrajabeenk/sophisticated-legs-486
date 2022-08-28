import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Box, Image } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Email from "../login/Email";
import style from "../login/box.module.css";
import Rightbox from "../login/Rightbox";
import Otp from "../login/Otp";
import Signup from "../login/Signup";
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, settext] = useState("");
  const [state,setstate]=useState(false)
  const navigate = useNavigate()
  let data;
  useEffect(() => {
    data = JSON.parse(localStorage.getItem("data")) || null;
    console.log(data.firstname,'this')
    
  }, [show, show1]);


  const toggle = ()=>{
    setstate(true)
  }
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
            <span className={styles.login_main} onClick={onOpen}>
              <i className="fa-regular fa-user"></i>
              {!state ?"Login/Signup":"Logout"}
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
            <div className={styles.cart} onClick={()=>navigate("/basket")}>
              <Box>
                <i className="fa-solid fa-basket-shopping"></i>
              </Box>
              <div>
                <span>My Basket</span>
                <br />
                {/* <span>0 Items</span> */}
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
                    <Link to="/product">Fruits & Vegetables</Link>
                    <hr />
                    <Link to="/product">Foodgrains, Oil & Masala</Link>
                    <hr />
                    <Link to="/product">Bakery, Cakes & Dairy</Link>
                    <hr />
                    <Link to="/product">Beverages</Link>
                    <hr />
                    <Link to="/product">Snacks & Branded Foods</Link>
                    <hr />
                    <Link to="/product">Beauty & Hygiene</Link>
                    <hr />
                    <Link to="/product">Cleaning & Household</Link>
                    <hr />
                    <Link to="/product">Kitche, Garden & Pets</Link>
                    <hr />
                    <Link to="/product">Eggs, Meat & Fish</Link>
                    <hr />
                    <Link to="/product">Gourmet & World Food</Link>
                    <hr />
                    <Link to="/product">Baby Care</Link>
                    <hr />
                    <Link to="/product">View All</Link>
                  </div>
                  <div className={styles.column}>
                    <Link to="/product">Fresh Vegetables</Link>
                    <hr />
                    <Link to="/product">Herbs & Seasonings</Link>
                    <hr />
                    <Link to="/product">Fresh Fruits</Link>
                    <hr />
                    <Link to="/product">Exotic Fruits & Veggies</Link>
                    <hr />
                    <Link to="/product">Cuts & Sprouts</Link>
                    <hr />
                    <Link to="/product">Flower Bouqets, Bunches</Link>
                  </div>
                  <div className={styles.column}>
                    <Link to="/product">Potato Onion & Tomato</Link>
                    <hr />
                    <Link to="/product">Cucumber &amp; Capsicum</Link>
                    <hr />
                    <Link to="/product">Beans Brinjals & Okra</Link>
                    <hr />
                    <Link to="/product">Leafy Vegetables</Link>
                    <hr />
                    <Link to="/product">Cabbage & Cauliflower</Link>
                    <hr />
                    <Link to="/product">Root Vegetables</Link>
                    <hr />
                    <Link to="/product">Gourd, Pumpkin, Drumstick</Link>
                    <hr />
                    <Link to="/product">Specialty</Link>
                  </div>
                  <div className={styles.column}>
                    <Link to="/product">Popular Searches</Link>
                    <hr />
                    <Link to="/product">Vegetables</Link>
                    <hr />
                    <Link to="/product">Cucumber</Link>
                    <hr />
                    <Link to="/product">Vegetable</Link>
                    <hr />
                    <Link to="/product">Chinese Cabbage</Link>
                    <hr />
                    <Link to="/product">Vege</Link>
                    <hr />
                    <Link to="/product">Veg</Link>
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
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            style={{
              maxWidth: "715px",
              height: "510px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <ModalCloseButton
              marginTop="30px"
              marginRight="50px"
              borderRadius="50%"
              backgroundColor="grey"
            />
            <div className={style.flexbox}>
              <div className={style.leftbox}>
                {show && show1 ? (
                  <Email setShow={setShow} text={text} settext={settext} />
                ) : null}
                {!show && show1 ? (
                  <Otp
                  login={toggle}
                    setShow={setShow}
                    text={text}
                    isOpen={onClose}
                    setShow1={setShow1}
                  />
                ) : null}
                {!show && !show1 ? <Signup close={onClose} login={toggle} ></Signup> : null}
              </div>
              <div className={style.rightbox}>
                <Rightbox></Rightbox>
              </div>
            </div>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default Navbar;
