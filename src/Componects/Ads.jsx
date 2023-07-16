import { Box, Image, Skeleton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ADS from "../Photos/1.jpg"

const Ads = ({display}) => {
  const [isLoaded, setIsLoaded] = useState(true)
  return (
    // <Skeleton height='40vh' isLoaded={isLoaded}>
      <Box m={'auto'} w={'100%'} mt={20}display={display}>
        <Image src={ADS} />
        {/* </Skeleton> */}
      </Box>
  )
}

export default Ads
