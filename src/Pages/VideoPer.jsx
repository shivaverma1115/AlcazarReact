import React from 'react'
import { Box, Card, CardBody, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import { GiSplitCross } from "react-icons/gi"
const VideoPer = ({ ele }) => {
    const { id, snippet, title } = ele ;
    var url = '' ;
    if( snippet.thumbnails.high !== undefined ){
        url = snippet.thumbnails.high.url ;
    }
    else{
        url = 'https://i.ytimg.com/vi/72MwFAntIjU/hqdefault.jpg' ;
    }
    return (
        <>
            <Card maxW='40vh'>
                <CardBody>
                    <Box m={'auto'} justifyContent={'center'}>
                        <Image
                        src={url}
                        alt={snippet.title}
                        borderRadius='lg'
                    />
                    </Box>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{snippet.title}</Heading>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default VideoPer
