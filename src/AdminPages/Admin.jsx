import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, InputGroup, InputLeftElement, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiSkullCrossedBones } from 'react-icons/gi';

const Admin = () => {
    const links = [
        { path: "/adminVideo", title: "Video" },
        { path: "/adminCard", title: "Card" },
        { path: "/admindelete", title: "Delete" },
        { path: "/adminBanner", title: "Banner" },
        { path: "/adminAds", title: "Ads" },
        { path: "/*", title: "Form" }
    ]
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box mt={'10vh'}>
            <Box onClick={onOpen} fontSize={35} px={10} cursor={'pointer'}>
                <GiHamburgerMenu />
            </Box>
            <Flex h={'fit-content'} w={'fit-content'} m={'auto'} mt={0}>
                <Box p={10} w={'100%'} h={'fit-content'}>
                    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader fontSize={30} borderBottomWidth='1px' textAlign={'center'} fontWeight={700}>Global Creations</DrawerHeader>
                            <DrawerBody>
                                {
                                    links.map((e, i) => {
                                        return (
                                            <InputGroup my={10} px={5} key={i} outline={'1px solid gray'} fontSize={20} fontWeight={500}>
                                                <InputGroup>
                                                    <Text mx={10}><Link key={e.path} to={e.path}>{e.title}</Link></Text>
                                                </InputGroup>
                                            </InputGroup>
                                        )
                                    })
                                }
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Flex>
        </Box>
    )
}

export default Admin
