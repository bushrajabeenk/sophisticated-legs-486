import React from 'react'
import {HStack,Box,Image, Center} from '@chakra-ui/react'
const Cleaning = () => {
  return (
    <Box w={'80%'} m='auto' mt='2rem'>
      <Center fontWeight={'bold'} fontSize={'20px'}>Cleaning and Household</Center>
      <hr/>
    <HStack spacing={'1rem'} mt='1rem'>
    <Box w={{md:'18rem'}}  _hover={{
           boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/1877fefa-2666-45cd-94ae-124092c0ef28/hp_cleaner-disfectants-cleaningStorefront_m_480_250822_01.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
             boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/1877fefa-2666-45cd-94ae-124092c0ef28/hp_detergents-favric-cleaningStorefront_m_480_250822_02.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
            boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/1877fefa-2666-45cd-94ae-124092c0ef28/hp_kitchen-wipes-cleaningStorefront_m_480_250822_03.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
             boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/1877fefa-2666-45cd-94ae-124092c0ef28/hp_fresheners-repellents-cleaningStorefront_m_480_250822_04.jpg' objectFit='contain' />
    </Box>
 </HStack> 
 </Box> 
  )
}

export default Cleaning