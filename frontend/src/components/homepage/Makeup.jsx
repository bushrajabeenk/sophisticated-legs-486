import { HStack, VStack, Box, Center, Image } from "@chakra-ui/react";
import React from "react";

const Makeup = () => {
  return (
    <Box w={"80%"} m="auto" mt="2rem">
      <Center fontWeight={"bold"} fontSize={"20px"}>
        Beauty & Hygiene
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
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d0206b0-a6e1-4c4e-9a2a-c8426acbeea5/t1_hp_b&h_c_makeup_378_250822.jpg"
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
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d0206b0-a6e1-4c4e-9a2a-c8426acbeea5/t1_hp_b&h_c_min-30_184_250822.jpg"
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
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d0206b0-a6e1-4c4e-9a2a-c8426acbeea5/t1_hp_b&h_c_under-199_184_250822.jpg"
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
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d0206b0-a6e1-4c4e-9a2a-c8426acbeea5/t1_hp_b&h_c_scent_184_250822.jpg"
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
                src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d0206b0-a6e1-4c4e-9a2a-c8426acbeea5/t1_hp_b&h_c_shaving_184_250822.jpg"
                objectFit="contain"
              />
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Makeup;
