import React from 'react'
import {HStack,Box,Image, Center} from '@chakra-ui/react'

const HomeKitchen = () => {
  return (
    <Box w={'80%'} m='auto' mt='2rem'>
    <Center fontWeight={'bold'} fontSize={'20px'}>Home & Kitchen Essential</Center>
    <hr/>
  <HStack spacing={'1rem'} mt='1rem'>
  <Box w={{md:'18rem'}}  _hover={{
          boxShadow: 'lg',
          cursor: 'pointer'
        }} 
        border='1px'
            borderColor='gray.200'  >
    <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d1ac41b-cf55-4460-9552-40fcceb1cc38/hp_under-990GMStorefront(Till10th)_m_250822_01.jpg' objectFit='contain' />
  </Box>
  <Box w={{md:'18rem'}}  _hover={{
          boxShadow: 'base',
          cursor: 'pointer'
        }} 
        border='1px'
            borderColor='gray.200'  >
    <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d1ac41b-cf55-4460-9552-40fcceb1cc38/hp_100-199-GMStorefront(Till10th)_m_250822_02.jpg' objectFit='contain' />
  </Box>
  <Box w={{md:'18rem'}}  _hover={{
          boxShadow: 'base',
          cursor: 'pointer'
        }} 
        border='1px'
            borderColor='gray.200'  >
    <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d1ac41b-cf55-4460-9552-40fcceb1cc38/hp_steel-utensils-GMStorefront(Till10th)_m_250822_03.jpg' objectFit='contain' />
  </Box>
  <Box w={{md:'18rem'}}  _hover={{
          boxShadow: 'base',
          cursor: 'pointer'
        }} 
        border='1px'
            borderColor='gray.200'  >
    <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d1ac41b-cf55-4460-9552-40fcceb1cc38/hp_gas-stove-GMStorefront(Till10th)_m_250822_04.jpg' objectFit='contain' />
  </Box>
  <Box w={{md:'18rem'}}  _hover={{
          boxShadow: 'base',
          cursor: 'pointer'
        }}
        border='1px'
            borderColor='gray.200'   >
    <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d1ac41b-cf55-4460-9552-40fcceb1cc38/hp_bathware-GMStorefront(Till10th)_m_250822_05.jpg' objectFit='contain' />
  </Box>
  <Box w={{md:'18rem'}}  _hover={{
          boxShadow: 'base',
          cursor: 'pointer'
        }} 
        border='1px'
            borderColor='gray.200'  >
    <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/0c1dea6d-a98b-470b-9df5-9991a2f1356c/6d1ac41b-cf55-4460-9552-40fcceb1cc38/hp_gardening-GMStorefront(Till10th)_m_250822_06.jpg' objectFit='contain' />
  </Box>
</HStack> 
</Box> 
  )
}

export default HomeKitchen