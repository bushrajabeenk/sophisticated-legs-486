import React from 'react'
import {HStack,Box,Image, Center} from '@chakra-ui/react'
const Deals = () => {
  return (
    <Box w={'80%'} m='auto' mt='2rem'>
      <Center fontWeight={'bold'} fontSize={'20px'}>Top Offers</Center>
      <hr/>
    <HStack spacing={'1rem'} mt='1rem'>
    <Box w={{md:'18rem'}}  _hover={{
           boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/4270bf1c-89f8-4fd4-9ac9-28fb1ba828ee/hp_deal-of-the-week-topoffersStorefront_m_480_250722_01.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
             boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/4270bf1c-89f8-4fd4-9ac9-28fb1ba828ee/hp_big-pack-topoffersStorefront_m_480_250722_02.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
            boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/4270bf1c-89f8-4fd4-9ac9-28fb1ba828ee/hp_combos-topoffersStorefront_m_480_250722_03.jpg' objectFit='contain' />
    </Box>
    <Box w={{md:'18rem'}}  _hover={{
             boxShadow:'dark-lg',
            cursor: 'pointer'
          }}   >
      <Image  src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/00100e4e-7dc9-4ad0-888a-b630f0e6597b/4270bf1c-89f8-4fd4-9ac9-28fb1ba828ee/hp_the-30-cor-topoffersStorefront_m_480_250722_04.jpg' objectFit='contain' />
    </Box>
 </HStack> 
 </Box> 
  )
}

export default Deals