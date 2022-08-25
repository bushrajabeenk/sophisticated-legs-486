// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Box, Image } from "@chakra-ui/react";
// import styles from "./Navbar.module.css";

// const Navbar = () => {
//   return (
//     <div>
//       <div>
//         <div className={styles.navbar}>
//           <div
//             // onClick={() => navigate("/")}
//             id={styles.logo}
//           >
//             <Image
//               w={["70%", "100%", "100%"]}
//               h={[50]}
//               src="https://64.media.tumblr.com/b0b0f04a44b92332a6c6343ac5bf1e96/3ff50a552f527619-c9/s400x600/d7effd42407109492412543fd1f3f1613c97483a.png"
//               alt="bigbasket_logo"
//             />
//           </div>
//           <div>
//             <div className={styles.userLocation}>
//               <span>
//                 <i className="fa-solid fa-phone num"></i> 656465415645456
//               </span>
//               <span>
//                 <i className="fa-solid fa-location-dot add"></i> 52125 Bengaluru
//               </span>
//               <span className={styles.login_main}>
//                 <i className="fa-regular fa-user"></i>{" "}
//                 {/* {!login ? (
//                   <i onClick={() => navigate("/login")}>login/signup</i>
//                 ) : (
//                   <i onClick={handleLogout}>Logout</i>
//                 )} */}
//               </span>{" "}
//               <span className={styles.login}>
//                 {/* <i>
//                   {!login ? (
//                     <i onClick={() => navigate("/login")}>login/signup</i>
//                   ) : (
//                     <i onClick={handleLogout}>Logout</i>
//                   )}
//                 </i> */}
//               </span>
//               <div></div>
//             </div>
//             <div className={styles.search_cart}>
//               <div className={styles.search_cart_inp}>
//                 <input
//                   style={{ outline: "solid 1px #84c225" }}
//                   type="text"
//                   //   value={SearchText}
//                   //   onChange={(e) => setSearchText(e.target.value)}
//                   placeholder="Search for products.."
//                 />
//                 <button
//                 // onClick={handleSearch}
//                 >
//                   <i className="fa-solid fa-magnifying-glass"></i>
//                 </button>
//               </div>
//               <div
//                 className={styles.cart}
//                 // onClick={handleCart}
//               >
//                 <Box>
//                   <i className="fa-solid fa-basket-shopping"></i>
//                 </Box>
//                 <div>
//                   <span>My Basket</span>
//                   <br />
//                   <span>
//                     {/* {cart}  */}
//                     Item
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.catAndoffer}>
//           <select
//           //   onChange={handleSelect}
//           >
//             <option value="#">SHOP BY CATOGERY</option>
//             <option value="products">Fruit and vegetable</option>
//             <option value="products">Bakery and Dairy</option>
//             <option value="products">Foodgrain, oil and masala</option>
//             <option value="products">Baverage</option>
//             <option value="products">Snakes and branded foods</option>
//             <option value="products">Clean and Households</option>
//           </select>
//           <button>
//             <i className="fa-solid fa-diamond"></i> Offers
//           </button>
//         </div>
//         <button
//           //   onClick={Scroll}
//           className={styles.scroll}
//         >
//           <i className="fa-solid fa-angle-up"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text> */}

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

const NAV_ITEMS = [
  // {
  //   label: "Inspiration",
  //   children: [
  //     {
  //       label: "Explore Design Work",
  //       subLabel: "Trending Design to inspire you",
  //       href: "#",
  //     },
  //     {
  //       label: "New & Noteworthy",
  //       subLabel: "Up-and-coming Designers",
  //       href: "#",
  //     },
  //   ],
  // },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  // {
  //   label: "Learn Design",
  //   href: "#",
  // },
  {
    label: "Hire Designers",
    href: "#",
  },
];
