import { Avatar, Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../ContextApp/AppContextProvider';

const Navbar = () => {
    const links = [
        { path: '/', title: "Home" },
        { path: '/video', title: "Video" },
        { path: '/order', title: "Order" },
        { path: '/contact', title: "Contact Us" },
        { path: '/faq', title: "FAQ" },
        { path: '/login', title: "Login" },
    ]
    // =================== hamberger =====================
    const [hamber, setHamber] = useState(true);
    const handleHamber = () => {
        if (hamber == true) {
            setHamber(false);
        }
        else {
            setHamber(false);
        }
    }

    const navigate = useNavigate();
    const handleAdmin = () => {
        navigate('/admin');
    }

    const handleRefresh = () => {
        navigate('/');
    }


    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Box >
            <Flex
                position={'fixed'} top={0}
                w={'100%'} p={3} bg={'black'} color={'white'} justifyContent={'space-around'}>
                <Flex cursor={'pointer'} fontSize={'20px'} fontWeight={800} >
                    <Avatar onClick={handleAdmin} mr={5} src='https://yt3.googleusercontent.com/ytc/AOPolaTeV1m4luShjHRCrzmEgy-6guc_rK1sUPn4TU5SHg=s176-c-k-c0x00ffffff-no-rj-mo' />
                    <Text m='auto' onClick={handleRefresh}>Global Creations</Text>
                </Flex>
                <Spacer />
                <Flex fontSize={'20px'} cursor={'pointer'} display={['none', 'none', 'flex']}>
                    {
                        links.map((e, i) => {
                            return (
                                <Box m={'auto'} justifyContent={'center'} key={i}>
                                    <Text m={2} mx={5}><Link key={e.path} to={e.path}  >{e.title}</Link></Text>
                                </Box>
                            )
                        })
                    }
                    <Box my={'auto'}><ColorModeSwitcher /></Box>
                </Flex>
                <Box m={'auto'} display={['flex', 'flex', 'none']} color={'white'} fontSize={40} onClick={handleHamber}>
                    <Box onClick={onOpen}><GiHamburgerMenu /></Box>
                </Box>
            </Flex>

            {hamber ? "" : (
                <Flex color={'white'} fontWeight={700} position={'fixed'} bg={'black'} top={'7.5vh'} w={'100%'} textAlign={'center'} fontSize={'20px'} cursor={'pointer'} display={['block', 'block', 'none']}>
                    <>
                        <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader fontSize={30} borderBottomWidth='1px' textAlign={'center'} fontWeight={700}>Global Creations</DrawerHeader>
                                <DrawerBody textAlign={'center'}fontWeight={600}fontSize={20} >
                                    {
                                        links.map((e, i) => {
                                            return (
                                                <Box m={'auto'} justifyContent={'center'} key={i}>
                                                    <Text m={2} mx={5}><Link key={e.path} to={e.path} >{e.title}</Link></Text>
                                                </Box>
                                            )
                                        })
                                    }
                                    <Box my={'auto'} onClick={onOpen}><ColorModeSwitcher /></Box>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </>
                </Flex>
            )}

        </Box>
    )
}

export default Navbar
