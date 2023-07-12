import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import CardPer from './CardPer'

const Card = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1]
  return (
    <Box>
      <Text textAlign={'center'} fontSize={'30px'} fontWeight={800} m={10}>
        Indian Wedding Invitation Cards
      </Text>
      <Grid outline={'2px solid pink'} overflow={'auto'} h={'70vh'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} bgGradient={'linear(to top right, black, red, white)'} w={'fit-content'} m={'auto'} mb={10} p={10}>
        {
          arr.map((ele, i) => {
            return <GridItem key={i}><CardPer/></GridItem>
          })
        }
      </Grid>
    </Box>
  )
}

export default Card
