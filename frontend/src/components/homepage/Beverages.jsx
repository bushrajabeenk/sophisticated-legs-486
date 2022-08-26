import { HStack, VStack, Box, Center, Image } from "@chakra-ui/react";
import React from "react";

const Beverages = () => {
  return (
    <Box w={"80%"} m="auto" mt="2rem">
      <Center fontWeight={"bold"} fontSize={"20px"}>
        Beverages
      </Center>
      <hr />
      <HStack>
        <Box
          border="1px"
          borderColor="gray.50"
          w={{ md: "35rem" }}
          _hover={{
            boxShadow: "dark-lg",
            cursor: "pointer",
          }}
        >
          <Image
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/99ed1680-9fc5-488b-b97a-74071a73b3a5/hp_soft-drinks-beveragesStorefront_m_250822_560x378_01.jpg"
            objectFit="contain"
          />
        </Box>
        <VStack>
          <HStack>
            <Box
              border="1px"
              borderColor="gray.50"
              w={{ md: "15rem" }}
              _hover={{
                boxShadow: "dark-lg",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/99ed1680-9fc5-488b-b97a-74071a73b3a5/hp_juices-beveragesStorefront_m_250822_275x184_02.jpg"
                objectFit="contain"
              />
            </Box>
            <Box
              border="1px"
              borderColor="gray.50"
              w={{ md: "15rem" }}
              _hover={{
                boxShadow: "dark-lg",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/99ed1680-9fc5-488b-b97a-74071a73b3a5/hp_health-drinks-beveragesStorefront_m_250822_275x184_03.jpg"
                objectFit="contain"
              />
            </Box>
          </HStack>
          <HStack>
            <Box
              border="1px"
              borderColor="gray.50"
              w={{ md: "15rem" }}
              _hover={{
                boxShadow: "dark-lg",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/99ed1680-9fc5-488b-b97a-74071a73b3a5/hp_energy-drinks-beveragesStorefront_m_250822_275x184_04.jpg"
                objectFit="contain"
              />
            </Box>
            <Box
              border="1px"
              borderColor="gray.50"
              w={{ md: "15rem" }}
              _hover={{
                boxShadow: "dark-lg",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/99ed1680-9fc5-488b-b97a-74071a73b3a5/hp_coffee-tea-beveragesStorefront_m_250822_275x184_05.jpg"
                objectFit="contain"
              />
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Beverages;
