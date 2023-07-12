import { Avatar, Box, Flex, Image, Img, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiSkullCrossedBones } from 'react-icons/gi';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = [
        { path: '/', title: "Home" },
        { path: '/video', title: "Video" },
        { path: '/card', title: "Card" },
        { path: '/about', title: "About Us" },
        { path: '/contact', title: "Contact Us" },
        { path: '/faq', title: "FAQ" },
    ]
    // =================== hamberger =====================
    const [hamber, setHamber] = useState(true);
    const handleHamber = () => {
        if (hamber == true) {
            setHamber(false);
        }
        else {
            setHamber(true);
        }
    }

    return (
        <>
            <Flex
                position={'fixed'} top={0}
                w={'100%'} p={3} bg={'black'} color={'white'} justifyContent={'space-around'}>
                <Flex cursor={'pointer'} fontSize={'20px'} fontWeight={800}>
                    <Avatar mr={5} src='https://yt3.googleusercontent.com/ytc/AOPolaTeV1m4luShjHRCrzmEgy-6guc_rK1sUPn4TU5SHg=s176-c-k-c0x00ffffff-no-rj-mo' />
                    <Text m='auto'>Global Creations</Text>
                </Flex>
                <Spacer />
                <Flex fontSize={'20px'} cursor={'pointer'} display={['none', 'none', 'flex']}>
                    {
                        links.map((e, i) => {
                            return (
                                <Box m={'auto'} justifyContent={'center'} key={i}>
                                    <Text m={2} mx={5}><Link key={e.path} to={e.path} >{e.title}</Link></Text>
                                </Box>
                            )
                        })
                    }
                    <Box my={'auto'}><ColorModeSwitcher /></Box>
                </Flex>
                <Box m={'auto'} display={['flex', 'flex', 'none']} color={'white'} fontSize={40} onClick={handleHamber}>{hamber ? <GiHamburgerMenu /> : <GiSkullCrossedBones />}</Box>
            </Flex>
            {hamber ? "" : (
                <Flex color={'white'} fontWeight={700} position={'fixed'}bg={'black'}top={'6vh'} w={'100%'}textAlign={'center'} fontSize={'20px'} cursor={'pointer'} display={['block', 'block', 'none']}>
                    {
                        links.map((e, i) => {
                            return (
                                <Box m={'auto'} justifyContent={'center'} key={i}>
                                    <Text m={2} mx={5}><Link key={e.path} to={e.path} >{e.title}</Link></Text>
                                </Box>
                            )
                        })
                    }
                    <Box my={'auto'}><ColorModeSwitcher /></Box>
                </Flex>
            )}
        </>
    )
}

export default Navbar
