import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import VideoPer from './VideoPer'
import Footer from '../Componects/Footer'

const Video = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1]
  return (
    <Box>
      <Text textAlign={'center'}fontSize={'30px'}fontWeight={800}m={10}> Indian Wedding Invitation Videos</Text>
      <Grid overflow={'auto'} h={'100vh'} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6} bg={'#f3d1e2'}w={'fit-content'}m={'auto'}mb={10}p={10}>
        {
          arr.map((ele, i) => {
            return <GridItem key={i}><VideoPer  /></GridItem>
          })
        }
      </Grid>
        <Footer/>
    </Box>
  )
}

export default Video
