import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
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
        <Box >
            <Box  onClick={handleHamber} fontSize={35} px={10} cursor={'pointer'}>
                {hamber ? <GiHamburgerMenu /> : <GiSkullCrossedBones />}
            </Box>
            {
                hamber?(
                    <Flex h={'fit-content'} w={'fit-content'} m={'auto'} mt={0}>
                <Box p={10} w={'100%'} h={'fit-content'}>
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
                </Box>
            </Flex>
                ):""
            }
        </Box>
    )
}

export default Admin
