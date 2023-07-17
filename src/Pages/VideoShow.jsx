import { AspectRatio, Box, Button, Divider, Flex, Heading, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const VideoShow = () => {
    return (
        <Flex w={'fit-content'}  h={['fit-content']} display={['block', 'block', 'flex']} m={'auto'} justifyContent={'space-around'} mt={[20,20,20]}>
            <AspectRatio  w={['100%','100%','70%']}>
                <Box p={[3,5,20]}  >
                    <iframe width={"100%"} height={'100%'}
                    src="https://www.youtube.com/embed/TIebItopm5s" allowfullscreen/>
                </Box>
            </AspectRatio>
            <Stack px={10} py={[5, 5, 20]} w={['100%','100%','30%']}  spacing={{ base: 6, md: 10 }}>
                <Box as={"header"}>
                    <Heading fontWeight={600} fontSize={["2xl", "4xl", "5xl"]}>
                        A Digital Indian Wedding Invitations Card
                    </Heading>
                    <Divider />
                    <Text color="gray.900" fontWeight={300} fontSize={"2xl"}>GC003</Text>
                    <Divider />
                    <Text textDecoration={'line-through'} color="gray.900" fontWeight={300} > ₹ 2000 /-</Text>
                    <Text color="gray.900" fontWeight={600} fontSize={"2xl"}>₹ 1500 /-</Text>
                </Box>
                <Stack>
                    <Text>
                        Hello everyone, Welcome to our Channel Global Creations....This is a invitaion video for inviting our friends & relatives in whatsapp.It's very semple to use, firstly you create a video like this and send your all friends & relatives..
                    </Text>
                    <Divider />
                    <Button color={"primary"}>Order Form</Button>
                </Stack>
            </Stack>
        </Flex>
    )
}

export default VideoShow
