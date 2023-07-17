import React from 'react'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import Admin from './Admin'

const AdminDelete = () => {
  return (
    <Flex m={'auto'} display={['block', 'block', 'flex']}mt={'10vh'}>
      <Box w={['100%', '100%', '20%']} ><Admin /></Box>
      <Box  w={['fit-content','fit-content','60%']} m={'auto'} p={10} >
        <Text fontSize={30} fontWeight={700} mb={5}>Delete Details</Text>
        <Box m={5}>
          <Text mb='8px'>Title (required)</Text>
          <Input border={'1px solid gray'} placeholder='Add a title that describes your video' />
        </Box>
        <Box m={'auto'} w={'fit-content'}><Button>Submit</Button></Box>
      </Box>
    </Flex>
  )
}

export default AdminDelete
