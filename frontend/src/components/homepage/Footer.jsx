import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import AppStoreBadge from "../assets/AppStoreBadge";
import PlayStoreBadge from "../assets/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "white")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>
              <Text style={{ color: "#6CD138" }}>bigbasket</Text>
            </ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>In News</Link>
            <Link href={"#"}>Green bigbasket</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Affiliate</Link>
            <Link href={"#"}>Terms and Conditions</Link>
            <Link href={"#"}>Careers At bigbasket</Link>
            <Link href={"#"}>bb Instant</Link>
            <Link href={"#"}>bb Daily</Link>
            <Link href={"#"}>bb Blog</Link>
            <Link href={"#"}>bbnow</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>
              <Text style={{ color: "#6CD138" }}>Help</Text>
            </ListHeader>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>bb Wallet FAQs</Link>
            <Link href={"#"}>bb Wallet T&Cs</Link>
            <Link href={"#"}>Vendor Connect</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>
              <Text style={{ color: "#6CD138" }}>Download Our App</Text>
            </ListHeader>
            <AppStoreBadge />
            <PlayStoreBadge />
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>
              <Text style={{ color: "#6CD138" }}>Get Social With Us</Text>
            </ListHeader>
            <Stack direction={"row"} spacing={4}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Stack direction={"row"} spacing={20}>
            <Text style={{ textAlign: "left", color: "#6CD138" }}>
              POPULAR CATEGORIES:
            </Text>
            <Stack direction={"row"}>
              <Text style={{ textAlign: "left" }}>
                Fruits & Vegetables, Basmati Rice, Green Tea, OTC, Cheese, Dry
                Fruits, Foodgrains, Oil & Masala, Chocolates & Sweets, Soft
                Drinks, Energy Drinks, Bakery, Cakes & Dairy, Olive Oils,
                Sunflower Oils, Liquid Soaps & Bars,
              </Text>
            </Stack>
          </Stack>
        </Container>

        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Stack direction={"row"} spacing={8}>
            <Text style={{ textAlign: "justify", color: "#6CD138" }}>
              POPULAR BRANDS:
            </Text>
            <Stack direction={"row"}>
              <Text style={{ textAlign: "left" }}>
                BB Royal, Amul, Haldirams , Tropicana, Kelloggs, Dettol, MTR,
                BRU, McCain, Ariel, Britannia, Nescafe , Colgate, Horlicks,
                Galaxy, Complan,
              </Text>
            </Stack>
          </Stack>
        </Container>

        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={14}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Stack direction={"row"} spacing={32}>
            <Text style={{ textAlign: "left", color: "#6CD138" }}>
              CITIES WE SERVE:
            </Text>
            <Stack direction={"row"}>
              <Text style={{ textAlign: "left" }}>
                Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore,
                Madurai, Coimbatore, Vijayawada-Guntur, Kolkata,
                Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon,
                Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore,
                Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi,
                Krishna District, Bhubaneshwar-Cuttack, Guwahati, Renigunta,
                Hubli, Davanagere, Trichy, Amravati, Raipur, Rajkot, Gwalior,
                Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai
                Rural, Vizag Rural, Lucknow Rural, Noida Rural, Ahmedabad Rural,
                Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural, Chandigarh
                Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi
                Rural, Kolkata Rural, Mumbai Rural, Mysore Rural, Nagpur Rural,
                Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur
                Rural, Ranchi, Nashik, Agra,{" "}
              </Text>
            </Stack>
          </Stack>
        </Container>

        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Stack direction={"row"} spacing={10}>
            <Text style={{ textAlign: "left", color: "#6CD138" }}>
              PAYMENT OPTIONS:
            </Text>
            <Stack direction={"row"} spacing={4}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        bg={useColorModeValue("beige.700", "beige.200")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            Copyright © 2021-2023 Supermarket Grocery Supplies Pvt Ltd
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
