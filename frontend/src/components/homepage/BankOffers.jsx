import React from "react";
import { HStack, Box, Image, Center } from "@chakra-ui/react";
const BankOffers = () => {
  return (
    <Box w={"80%"} m="auto" mt="2rem">
      <Center fontWeight={"bold"} fontSize={"20px"}>
        Bank Offers
      </Center>
      <hr />
      <HStack spacing={"1rem"} mt="1rem">
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_paytm_360_11082022.jpg"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_rbl_360_110822.jpg"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_aff_m_indus_360_110822.jpg"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/9b0da17e-0131-4d5b-a7d8-bbabe29e98b0/t1_hp_m_aff_dbs_360_110822.jpg"
            objectFit="contain"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default BankOffers;
