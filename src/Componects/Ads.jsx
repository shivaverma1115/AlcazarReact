import { Box, Image} from '@chakra-ui/react'
import React, { useState } from 'react'
import ADS from "../Photos/1.jpg"

const Ads = ({display}) => {
  return (
      <Box m={'auto'} w={'100%'} mt={20}display={display}>
        <Image src={ADS} />
      </Box>
  )
}

export default Ads
