import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ADS from "../Photos/1.jpg"

const Ads = () => {
  return (
    <Box m={'auto'}w={'100%'}mt={20}>
      <Image src={ADS}/>
    </Box>
  )
}

export default Ads
