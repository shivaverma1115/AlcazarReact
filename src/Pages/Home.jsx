import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import Footer from "../Componects/Footer"

const Home = () => {
  return (
    <Box position={'sticky'} top={'50vh'}>
      <Box bg={'#f3d1e2'} p={2}mt={5}>
        <Box w={'fit-content'} m={'auto'}>
          <Button fontSize={12} borderRadius={0} mx={[0, 3, 3]} border={'1px solid green'} bg={'white'}>Invitation Video</Button>
          <Button fontSize={12} borderRadius={0} mx={[0, 3, 3]} border={'1px solid green'} bg={'white'}>Invitation Card</Button>
          <Button fontSize={12} borderRadius={0} mx={[0, 3, 3]} border={'1px solid green'} bg={'white'}>Order Form</Button>
        </Box>
      </Box>
      <Box w={'fit-content'} m={'auto'} p={5} maxW={'100vh'} mt={5} mb={5}>
        <Image src='https://lh5.googleusercontent.com/QCCTdgLqnjHKq6fE3dTz5NgVmvGQnSd4O7nmKFaN98lHb58ZjsEwjvHqIag-MXd2xv4J6KZIWNy62IsxzWgRqLWprXiY8tWVZCyQRcX-pMh-5PjuHXoLO4nXgb9LkP6e8w=w1280' />
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
