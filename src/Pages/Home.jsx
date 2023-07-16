import { Box, Button, Image, Skeleton } from '@chakra-ui/react'
import React, { useState } from 'react'
import Video from './Video'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import Img2 from "../Photos/2.jpg"
import Ads from '../Componects/Ads'
import Footer from '../Componects/Footer'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const navigate = useNavigate();
  const btn = [
    { navigate: '/video', title: "Invitation Video" },
    { navigate: '/card', title: "Invitation Card" },
    { navigate: '/*', title: "Order Form" }
  ]
  return (
    <>
    <Ads display={"block"} />
      <Box >
        <Box bg={'#f3d1e2'} p={2} mt={5}>
          <Box w={'fit-content'} m={'auto'}>
            {
              btn.map((ele, i) => {
                return <Button onClick={() => navigate(ele.navigate)} key={i} fontSize={12} borderRadius={0} mx={[0, 3, 3]} border={'1px solid green'} bg={'white'} color={'green'}>{ele.title}</Button>
              })
            }
          </Box>
        </Box>
        {/* <Skeleton height='25vh' isLoaded={isLoaded}w={'35%'}m={'auto'}> */}
          <Box w={'fit-content'} m={'auto'} p={5} maxW={'100vh'} mt={5} mb={5}>
            <Image src={Img2} />
          </Box>
        {/* </Skeleton> */}
        <Video  />
        <Card />
      </Box>
      <Footer display={"block"} />
    </>
  )
}

export default Home
