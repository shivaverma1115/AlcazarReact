import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'

const VideoPer = () => {
    return (
        <Card maxW='40vh'>
            <CardBody>
                <Box m={'auto'} justifyContent={'center'}>
                    <Image
                        src='https://i.ytimg.com/an_webp/q9J_J7MiJPI/mqdefault_6s.webp?du=3000&sqp=CIyCuqUG&rs=AOn4CLBi8Wz_-i6h4pXwXMBIJpwfdkFV5g'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>शादी निमंत्रण वीडियो | GC067 |</Heading>
                    <Text>
                        This is an invitation video for inviting our friends & relatives to WhatsApp.
                        It's very simple to use, firstly you create a video like this and send your all friends & relatives...
                        please Like, Share & Subscribe to our channel...
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        2000 ₹
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default VideoPer
