import React from 'react'
import Img3 from "../Photos/3.jpeg"
import GoggleForm from './GoggleForm'
import { AspectRatio, Box, Button, Divider, Flex, Heading, Image, SimpleGrid, Stack, StackDivider, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
const CardShow = () => {
    // ============= Toggle Goggle Form ================
    const { isOpen, onOpen, onClose } = useDisclosure()
//   ===============================================================
    return (
        <Box>
            <SimpleGrid m={'auto'} p={10} w={['fit-content', 'fit-content', '120vh']} columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} mt={[20,20,20]}>
                <Box as={"flex"} p={[3, 3, 5]} outline={'1px dotted gray'}>
                    <Image rounded={"md"} src={Img3} fit={"cover"} align={"center"} w={"100%"} h={"100%"} />
                </Box>
                <Stack spacing={{ base: 6, md: 10 }} p={[3, 3, 10]}>
                    <Box as={"header"}>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
                            A Digital Indian Wedding Invitations Card
                        </Heading>
                        <Divider />
                        <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} fontSize={"2xl"}>GC003</Text>
                        <Divider />
                        <Text textDecoration={'line-through'} color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} > ₹ 2000 /-</Text>
                        <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={600} fontSize={"2xl"}>₹ 1500 /-</Text>
                    </Box>
                    <Stack direction={"column"} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.700")} />}>
                        <Text>
                            Hello everyone, Welcome to our Channel Global Creations....This is a invitaion video for inviting our friends & relatives in whatsapp.It's very semple to use, firstly you create a video like this and send your all friends & relatives..
                        </Text>
                        <Button color={"primary"}onClick={onOpen}>Order Form</Button>
                    </Stack>
                </Stack>
            </SimpleGrid>
            <GoggleForm isOpen={isOpen}onClose={onClose}onOpen={onOpen} />
        </Box>
    )
}

export default CardShow
