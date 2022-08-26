import React from 'react'
import { Stack,Button, Image } from '@chakra-ui/react'

const ButtonsLink = () => {
  return (
    <Stack direction='row' spacing={4} w='90%' m='auto' mt='2rem' align='center'>
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/all_hp-emf_hp_topstrip_m_250722_01.png' objectFit='contain'/>
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/t1_hp_cmc_neu-pass_topstrip_m_250722_02.png' objectFit='contain'/>
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/t1_hp_cmc_ayurveda_topstrip_m_250722_03.png' objectFit='contain'/>
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/t1_hp_cmc_buy-more-save_topstrip_m_250722_04.png' objectFit='contain'/>
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/t1_hp_cmc_deal-of-the%20week_topstrip_m_250722_05.png' objectFit='contain'/>
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/t1_hp_cmc_combo_topstrip_m_250722_06.png' objectFit='contain'/>
  </Stack>
  )
}

export default ButtonsLink