import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image } from '@chakra-ui/react'
const SlideFloder = ({first,second ,font,left}) => {
    return (
        <Accordion allowToggle m={'auto'} >
            <AccordionItem textAlign={left} >
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1'fontSize={font}textAlign={left} >
                            {first}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel textAlign={left} pb={4} maxW={'100vh'}>
                    {second}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default SlideFloder
