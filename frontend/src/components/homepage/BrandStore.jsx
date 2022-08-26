import React from "react";
import { HStack, Box, Image, Center } from "@chakra-ui/react";
const BrandStore = () => {
  return (
    <Box w={"80%"} m="auto" mt="2rem">
      <Center fontWeight={"bold"} fontSize={"20px"}>
        Brand Store
      </Center>
      <hr />
      <HStack spacing={"1rem"} mt="1rem">
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "lg",
            cursor: "pointer",
          }}
          border="1px"
          borderColor="gray.200"
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/aa778521-219e-4fb9-87fa-93fd3272908f/hp_amul-brandStorefront_m_480_250722_01.jpg"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
          border="1px"
          borderColor="gray.200"
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/aa778521-219e-4fb9-87fa-93fd3272908f/hp_dettol-brandStorefront_m_480_250722_02.jpg"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
          border="1px"
          borderColor="gray.200"
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/aa778521-219e-4fb9-87fa-93fd3272908f/hp_cocolabrandStorefront_m_480_250722_03.jpg"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
          border="1px"
          borderColor="gray.200"
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/aa778521-219e-4fb9-87fa-93fd3272908f/hp_loreal-brandStorefront_m_480_250722_04.jpg"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
          border="1px"
          borderColor="gray.200"
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/aa778521-219e-4fb9-87fa-93fd3272908f/hp_indaia-gate-brandStorefront_m_480_250722_05.jpg"
            objectFit="contain"
          />
        </Box>
        <Box
          w={{ md: "18rem" }}
          _hover={{
            boxShadow: "base",
            cursor: "pointer",
          }}
          border="1px"
          borderColor="gray.200"
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/aa778521-219e-4fb9-87fa-93fd3272908f/hp_durex-brandStorefront_m_480_250722_06.jpg"
            objectFit="contain"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default BrandStore;
