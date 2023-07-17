import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Img, Radio, RadioGroup, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}mt={'20vh'}>
        Open
      </Button>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader fontSize={30} borderBottomWidth='1px'textAlign={'center'}fontWeight={700}>Global Creations</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default About
