import React from 'react'
import {
    Thead,
    Tfoot,
    Tr,
    Td,
    TableContainer,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Spacer, Table, Th, Tbody,
} from '@chakra-ui/react'

const AccordionFloder = ({ ele }) => {
    const { Email, Form_Filling_Date, Your_Name,Whatsapp_No,GC00,Song_link ,couple,Family_Surname ,Groom_Name,Grooms_Father_Name,Grooms_Mother_Name,Bride_Name,Brides_Father_Name,Brides_Mother_Name,first_Program_Name,first_Program_Date,first_Program_Venue, Bride } = ele;
    console.log(Whatsapp_No+"shiva") ;
    return (
        <Accordion defaultIndex={[0]} allowMultiple bg={'tomato'}>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            {Email}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                <TableContainer>
                    <Table size='sm'>
                        <Tbody>
                            <Tr>
                                <Td>Email </Td>
                                <Td isNumeric>{Email}</Td>
                            </Tr>
                            <Tr>
                                <Td>Form Filling Date</Td>
                                <Td isNumeric>{Form_Filling_Date}</Td>
                            </Tr>
                            <Tr>
                                <Td>Your Name</Td>
                                <Td isNumeric>{Your_Name}</Td>
                            </Tr>
                            <Tr>
                                <Td>Whatsapp No</Td>
                                <Td isNumeric>{Whatsapp_No}</Td>
                            </Tr>
                            <Tr>
                                <Td>GC00</Td>
                                <Td isNumeric>{GC00}</Td>
                            </Tr>
                            <Tr>
                                <Td>Song link</Td>
                                <Td isNumeric>{Song_link}</Td>
                            </Tr>
                            <Tr>
                                <Td>couple</Td>
                                <Td isNumeric>{couple}</Td>
                            </Tr>
                            <Tr>
                                <Td>Family Surname</Td>
                                <Td isNumeric>{Family_Surname}</Td>
                            </Tr>
                            <Tr>
                                <Td>Groom Name</Td>
                                <Td isNumeric>{Groom_Name}</Td>
                            </Tr>
                            <Tr>
                                <Td>Grooms Father Name</Td>
                                <Td isNumeric>{Grooms_Father_Name}</Td>
                            </Tr>
                            <Tr>
                                <Td>Groom's Mother Name</Td>
                                <Td isNumeric>{Grooms_Mother_Name}</Td>
                            </Tr>
                            <Tr>
                                <Td>Bride Name</Td>
                                <Td isNumeric>{Bride_Name}</Td>
                            </Tr>
                            <Tr>
                                <Td>Bride's Father Name</Td>
                                <Td isNumeric>{Brides_Father_Name}</Td>
                            </Tr>
                            <Tr>
                                <Td>Bride's Mother Name</Td>
                                <Td isNumeric>{Brides_Mother_Name}</Td>
                            </Tr>
                            <Tr>
                                <Td>first Program Name</Td>
                                <Td isNumeric>{first_Program_Name}</Td>
                            </Tr>
                            <Tr>
                                <Td>first_Program_Date</Td>
                                <Td isNumeric>{first_Program_Date}</Td>
                            </Tr>
                            <Tr>
                                <Td>first_Program_Venue</Td>
                                <Td isNumeric>{first_Program_Venue}</Td>
                            </Tr>
                            <Tr>
                                <Td>Bride</Td>
                                <Td isNumeric>{Bride}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                </AccordionPanel>
                {/* <AccordionPanel pb={4}>Email:{Email}</AccordionPanel>
                <AccordionPanel pb={4}>Your Name:{Your_Name}</AccordionPanel>
                <AccordionPanel pb={4}>Form Filling Date:{Form_Filling_Date}</AccordionPanel>
                <AccordionPanel pb={4}>Bride:{Bride}</AccordionPanel> */}
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionFloder
