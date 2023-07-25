import React, { useState } from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Skeleton, Stack, Text } from '@chakra-ui/react'

const VideoPer = ({ele}) => {
    const {id,snippet,title} = ele ;
    const [isLoaded, setIsLoaded] = useState(true)
    return (
        <Skeleton height='100%' isLoaded={isLoaded}borderRadius={10}>
        <Card maxW='40vh'>
            <CardBody>
                <Box m={'auto'} justifyContent={'center'}>
                    <Image
                        src={snippet.thumbnails.high.url}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{snippet.title}</Heading>
                    <Text w={'80%'}>
                    {snippet.description}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
        </Skeleton>
    )
}

export default VideoPer
