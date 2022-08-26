import React from 'react'
import {HStack,Box,Image, Center} from '@chakra-ui/react'
const Snak = () => {
  return (
    <Box w={'80%'} m='auto' mt='2rem'>
      <Center fontWeight={'bold'} fontSize={'20px'}>Snacks Store</Center>
      <hr/>
    <HStack spacing={'1rem'} mt='1rem'>
    <Box w={{md:'18rem'}}  _hover={{
           boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/0cc0cfe7-fbc9-41c2-a1ed-8e4939fab712/hp_namkeens-chips-nachos-snacksStorefront_m_480_250822_01.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
             boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/0cc0cfe7-fbc9-41c2-a1ed-8e4939fab712/hp_monsoon-snacks-snacksStorefront_m_480_250822_02.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
            boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/0cc0cfe7-fbc9-41c2-a1ed-8e4939fab712/hp_soups-noodles-pasta-snacksStorefront_m_480_250822_03.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
             boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/0cc0cfe7-fbc9-41c2-a1ed-8e4939fab712/hp_biscuits-cookies-snacksStorefront_m_480_250822_04.jpg' objectFit='contain' />
    </Box>
 </HStack> 
 </Box> 
  )
}

export default Snak