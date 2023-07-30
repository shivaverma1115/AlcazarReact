import { AspectRatio, Box, Button, Divider, Flex, Heading, Input, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import GoggleForm from './GoggleForm'
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Componects/Footer';
import { AppContext } from '../ContextApp/AppContextProvider';

const VideoShow = () => {
    console.log(useContext(AppContext));

    const { obj, setObj, Data, setData, state,setState } = useContext(AppContext);
    const { mrp, price, snippet, code } = obj

    // ============= Toggle Goggle Form ================
    const { isOpen, onOpen, onClose } = useDisclosure()
    //   ===============================================================

    const handleInput = (e) => {
        var mergeObj = { ...obj, [e.target.name]: e.target.value }
        setObj(mergeObj)
    }
    const handleSubmit = () => {
        console.log(obj);
        const newArray = Data.map((ele, i) => {
            if (obj.index === ele.index) {
                ele = obj;
            }
            return ele;
        })
        setData(newArray);
    }

    return (
        <Box mt={20} h={'90vh'} overflow={'auto'} >
            <Flex
                bgGradient={'linear(to-tr, gray.400, white)'}
                display={['block', 'block', 'flex']} justifyContent={'space-around'} >
                <AspectRatio w={['100%', '100%', '70%']} h={'90%'} maxH={'90vh'}>
                    <Box p={5} >
                        <iframe width="100%" height="90%"
                            src={`https://www.youtube.com/embed/${snippet.resourceId.videoId}`}
                            allowFullScreen />
                    </Box>
                </AspectRatio>
                <Stack px={10} py={[5, 5, 20]} w={['100%', '100%', '30%']} spacing={{ base: 6, md: 10 }}>
                    <Box as={"header"}>
                        <Heading fontWeight={600} fontSize={["2xl", "4xl", "5xl"]}>
                            {snippet.title}
                        </Heading>
                        <Divider />
                        <Flex display={['block', 'flex', 'flex']}>
                            <Box>
                                <Text color="gray.900" fontWeight={300} fontSize={"2xl"}>{code}</Text>
                                <Text textDecoration={'line-through'} color="gray.900" fontWeight={300} > ₹ {mrp} /-</Text>
                                <Text color="gray.900" fontWeight={600} fontSize={"2xl"}>₹ {price} /-</Text>
                            </Box><Spacer />
                            <Box display={state.isAuth ? "block" : "none"} bgGradient={'linear(to-tr, gray.400, white)'} w={'50%'} m={'auto'}>
                                <Input type='number' name='mrp' onChange={(e) => handleInput(e)} />
                                <Input type='number' name='price' onChange={(e) => handleInput(e)} />
                                <Box bg={'gray'}textAlign={'center'}>
                                    <Button m={1} textAlign={'center'} onClick={handleSubmit}p={1}>Done</Button>
                                    <Button m={1} p={1} onClick={()=>setState({ ...state, isAuth: false })}>LogOut</Button>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Stack>
                        <Text maxH={'25vh'} overflow={'auto'}>
                            {snippet.description}
                        </Text>
                        <Divider />
                        <Button color={"primary"} onClick={onOpen} >Order Form</Button>
                    </Stack>
                </Stack>
                <GoggleForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            </Flex>
            <Footer />
        </Box>
    )
}

export default VideoShow
