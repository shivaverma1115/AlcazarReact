import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Img3 from "../Photos/3.jpeg"
const CardPer = () => {
    return (
        <Card maxW='40vh'>
            <CardBody >
                <Box m={'auto'} justifyContent={'center'}>
                    <Image
                        src={Img3}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Box>
                <Stack mt='3' spacing='3'>
                    <Heading size='md'>Godh Bharai 01</Heading>
                    {/* <Text>
                        This is an invitation video for inviting our friends & relatives to WhatsApp.
                        It's very simple to use, firstly you create a video like this and send your all friends & relatives...
                        please Like, Share & Subscribe to our channel...
                    </Text> */}
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

export default CardPer
