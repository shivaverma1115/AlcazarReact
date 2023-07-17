import React, { useState } from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Skeleton, Stack, Text } from '@chakra-ui/react'

const VideoPer = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    return (
        <Skeleton height='100%' isLoaded={isLoaded}borderRadius={10}>
        <Card maxW='40vh'>
            <CardBody>
                <Box m={'auto'} justifyContent={'center'}>
                    <Image
                        src='https://i.ytimg.com/vi/uV762SHeUdI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXnWTHfrGN29fcLIuIF29jbrT1Ag'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>A Digital Indian Wedding Invitations Card|| GC003</Heading>
                    <Text>
                    Hello everyone, Welcome to our Channel Global Creations....This is a invitaion video for inviting our friends & relatives in whatsapp.It's very semple to use, firstly you create a video like this and send your all friends & relatives...
                    </Text>
                    {/* <Text color='blue.600' fontSize='2xl'>
                        2000 ₹
                    </Text> */}
                </Stack>
            </CardBody>
            {/* <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter> */}
        </Card>
        </Skeleton>
    )
}

export default VideoPer
