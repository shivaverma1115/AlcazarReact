import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Componects/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <Box p={10}>
        <Flex m={'auto'} textAlign={'center'} display={['block', 'block', 'flex']}>
          <Flex justifyContent={'center'} m={'auto'} >
            <Text m={5} p={5} fontSize={20}bg={'#f3d1e2'} w={'100%'}>
              <Text  fontSize={30} fontWeight={600} mb={0}>
                Global Creations
              </Text>
              <br />
              Luxa Road, Varanasi
              <br />
              Uttar Pradesh-221010
              <br />
              Email:- <Link>contactus@gmail.com</Link>
              <br />
              Founder & CEO - Vishal Verma
              <br />
              Mo. +91 870 750 812
              <br />
              GSTIN : 09BCRPV4859A1ZZ
            </Text>
          </Flex>
          <Box w={'80%'} m={'auto'} h={'100%'}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8697090873147!2d82.99903215!3d25.3085812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e0218bf7da5%3A0xc0b41fcef2056aff!2sLuxa%2C%20Varanasi%2C%20Uttar%20Pradesh%20221001!5e0!3m2!1sen!2sin!4v1689163691439!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

export default Contact
