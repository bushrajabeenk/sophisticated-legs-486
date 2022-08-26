import { HStack, VStack, Box, Center, Image } from "@chakra-ui/react";
import React from "react";

const FruitsVeggis = () => {
  return (
    <Box w={"80%"} m="auto" mt="2rem">
      <Center fontWeight={"bold"} fontSize={"20px"}>
        Fruits & Vegitables
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
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/e1a00954-68f4-4295-a01a-2319ef66f039/hp_orhanice-fnv-fnvStorefront_m_250822_560x378_01.jpg"
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
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/e1a00954-68f4-4295-a01a-2319ef66f039/hp_fresh-fruits-fnvStorefront_m_250822_275x184_02.jpg"
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
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/e1a00954-68f4-4295-a01a-2319ef66f039/hp_fresh-veggs-fnvStorefront_m_250822_275x184_03.jpg"
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
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/e1a00954-68f4-4295-a01a-2319ef66f039/hp_cuts-sporouts-fnvStorefront_m_250822_275x184_04.jpg"
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
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/e1a00954-68f4-4295-a01a-2319ef66f039/hp_exotic-fnv-fnvStorefront_m_250822_275x184_05.jpg"
                objectFit="contain"
              />
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default FruitsVeggis;
