import React from 'react'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import Admin from './Admin'

const AdminCard = () => {
  return (
    <Flex  m={'auto'}display={['block','block','flex']}mt={'20vh'}>
            <Box w={['100%','100%','20%']} ><Admin /></Box>
            <Box  w={['fit-content','fit-content','60%']} m={'auto'} p={10} >
                <Text fontSize={30} fontWeight={700} mb={5}>Card Details</Text>
                <Box m={5}>
                    <Text mb='8px'>Title (required)</Text>
                    <Input border={'1px solid gray'} placeholder='Add a title that describes your video' />
                </Box>
                <Box m={5}>
                    <Text mb='8px'>Description</Text>
                    <Input border={'1px solid gray'}  placeholder='Tell viewers about your video' />
                </Box>
                <Box m={5}>
                    <Text mb='8px'>Card (src)</Text>
                    <Input border={'1px solid gray'}  placeholder='Paste here your youtube video src link' />
                </Box>
                <Box m={5}>
                    <Text mb='8px'> Video Price</Text>
                    <Input border={'1px solid gray'}  placeholder='Your Video Price' />
                </Box>
                <Box m={'auto'}w={'fit-content'}><Button>Submit</Button></Box>
            </Box>
        </Flex>
  )
}

export default AdminCard
