import { Box, Button, Flex, Input, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BsChat } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Footer = ({display}) => {
  return (
    <Box display={display} >
    <Flex p={5} display={['block','block','flex']} bg={'black'}color={'white'} justifyContent={'space-around'}w={'100%'}>
      <Box m={10}>
        <Text fontSize={'20px'}fontWeight={700}>Sign up for discounts</Text>
        <Text my={5}>Join our mailing list to get notified of sales and discounts</Text>
        <Input maxW={'60vh'} color={'black'} mb={5} bg={'white'} placeholder='Enter Your email' />
        <Button px={20} bg={'white'}color={'black'}>SignUp</Button>
      </Box>
      <Box m={10}>
        <Text fontSize={'20px'}fontWeight={700}>Contact Us</Text>
        <Text>Looking for help with an existing order?</Text>
        <Link>Click here for order assistance</Link>
        <Flex>
          <Box my={'auto'}mr={5}>
            <BsChat />
          </Box>
          <Text>Chat with Us</Text>
        </Flex>
        <Flex>
          <Box my={'auto'} mr={5}>
            <AiOutlineMail />
          </Box>
          <Text>Email Us</Text>
        </Flex>
        <Flex>
          <Box my={'auto'} mr={5}>
            <AiOutlineClockCircle />
          </Box>
          <Text>Monday to Friday , 9 Am to 5 Pm GMT,<br />Closed all major holidays</Text>
        </Flex>
      </Box>
    </Flex>
    </Box>
  )
}

export default Footer
