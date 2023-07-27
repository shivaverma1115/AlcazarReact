import React, { useState } from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Skeleton, Stack, Text } from '@chakra-ui/react'
import {GiSplitCross} from "react-icons/gi"
const VideoPer = ({ele,isAuth}) => {
    const {id,snippet,title} = ele ;
    // const url = snippet.thumbnails.high.url;
    return (
        <>
        <Card maxW='40vh'>
        <Flex mt={'-10px'} display={isAuth?"block":"none"} w={'fit-content'}m={'auto'}fontSize={35}top={5}position={'relative'}><GiSplitCross/></Flex>
            <CardBody>
                <Box m={'auto'} justifyContent={'center'}>
                    <Image
                        src={`https://i.ytimg.com/vi/YZ0abR0Z0dw/hqdefault.jpg`}
                        alt='Video image'
                        borderRadius='lg'
                    />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{snippet.title}</Heading>
                    {/* <Text w={'80%'}>
                    {snippet.description}
                    </Text> */}
                </Stack>
            </CardBody>
        </Card>
        </>
    )
}

export default VideoPer
