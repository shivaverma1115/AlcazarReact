import { AspectRatio, Box, Button, Divider, Flex, Heading, Stack, Text, useDisclosure } from '@chakra-ui/react'
import GoggleForm from './GoggleForm'
import React, { useState } from 'react'
import ReactYoutube from 'react-youtube';
import Footer from '../Componects/Footer';

const VideoShow = () => {

    var ele = JSON.parse(localStorage.getItem("video"));
    const { id, snippet, title } = ele;


    // ============= Toggle Goggle Form ================
    const { isOpen, onOpen, onClose } = useDisclosure()
    //   ===============================================================

    const [Inp,setInp] = useState({
        code :"GC003",
        MRP :"2000",
        price :"1500"
    })
    // handleInp=()=>{
    //     setInp({...Inp ,[e.target.name]:e.target.value}) ;
    // }
    console.log(Inp)
    return (
        <Box mt={20}>
        <Flex 
        bgGradient={'linear(to-tr, gray.400, white)'}
          display={['block', 'block', 'flex']} justifyContent={'space-around'} >
            <AspectRatio w={['100%', '100%', '70%']}h={'90%'}maxH={'90vh'}>
                <Box p={5} >
                    <iframe width="100%" height="90%"
                        src={`https://www.youtube.com/embed/${id.videoId}`}
                        allowFullScreen />
                </Box>
            </AspectRatio>
            <Stack px={10} py={[5, 5, 20]} w={['100%', '100%', '30%']} spacing={{ base: 6, md: 10 }}>
                <Box as={"header"}>
                    <Heading fontWeight={600} fontSize={["2xl", "4xl", "5xl"]}>
                        {snippet.title}
                    </Heading>
                    <Divider />
                    <Text color="gray.900" fontWeight={300} fontSize={"2xl"}>{Inp.code}</Text>
                    <Divider />
                    <Text textDecoration={'line-through'} color="gray.900" fontWeight={300} > ₹ {Inp.MRP} /-</Text>
                    <Text color="gray.900" fontWeight={600} fontSize={"2xl"}>₹ {Inp.price} /-</Text>
                </Box>
                <Stack>
                    <Text>
                    {snippet.description}
                    </Text>
                    <Divider />
                    <Button color={"primary"} onClick={onOpen} >Order Form</Button>
                </Stack>
            </Stack>
            <GoggleForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Flex>
        <Footer/>
        </Box>
    )
}

export default VideoShow
