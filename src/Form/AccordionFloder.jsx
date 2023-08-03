import React, { useContext } from 'react'
import { Thead, Tfoot, Tr, Td, TableContainer, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Spacer, Table, Th, Tbody, Button, WrapItem, Flex, } from '@chakra-ui/react'
import { AppContext } from '../ContextApp/AppContextProvider';

const AccordionFloder = ({ ele, handleDLT }) => {

    const { userImg } = useContext(AppContext);

    const { id, Email, Form_Filling_Date, Your_Name, Whatsapp_No, GC00, Song_link, onbehalf, Family_Surname, Groom_Name, Grooms_Father_Name, Grooms_Mother_Name, Bride_Name, Brides_Father_Name, Brides_Mother_Name, first_Program_Name, first_Program_Date, first_Program_Venue, second_Program_Name, second_Program_Date, second_Program_Venue, third_Program_Name, third_Program_Date, third_Program_Venue, Other_details } = ele;
    return (
        <Accordion allowToggle bg={'white'}>
            <AccordionItem>
                <Flex>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Box>{Your_Name}</Box>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionButton>
                        {userImg.map((ele, i) => {
                            return <img src={ele.secure_url} key={i} />
                        })}
                    </AccordionButton>
                </Flex>
                <AccordionPanel>
                    <TableContainer >
                        <Table size='sm' bg={'pink'}>
                            <Tbody>
                                {/* isNumeric */}
                                <Tr>
                                    <Td>Email </Td>
                                    <Td >{Email}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Form Filling Date</Td>
                                    <Td >{Form_Filling_Date}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Your Name</Td>
                                    <Td>{Your_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Whatsapp No</Td>
                                    <Td>{Whatsapp_No}</Td>
                                </Tr>
                                <Tr>
                                    <Td>GC00</Td>
                                    <Td>{GC00}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Song link</Td>
                                    <Td>{Song_link}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Onbehalf</Td>
                                    <Td >{onbehalf}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Family Surname</Td>
                                    <Td>{Family_Surname}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Groom Name</Td>
                                    <Td>{Groom_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Grooms Father Name</Td>
                                    <Td>{Grooms_Father_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Groom's Mother Name</Td>
                                    <Td>{Grooms_Mother_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Bride Name</Td>
                                    <Td>{Bride_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Bride's Father Name</Td>
                                    <Td>{Brides_Father_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Bride's Mother Name</Td>
                                    <Td>{Brides_Mother_Name}</Td>
                                </Tr>

                                <Tr>
                                    <Td>first Program Name</Td>
                                    <Td>{first_Program_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>first_Program_Date</Td>
                                    <Td>{first_Program_Date}</Td>
                                </Tr>
                                <Tr>
                                    <Td>first_Program_Venue</Td>
                                    <Td>{first_Program_Venue}</Td>
                                </Tr>

                                <Tr>
                                    <Td> Second Program Name</Td>
                                    <Td>{second_Program_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>second_Program_Date</Td>
                                    <Td>{second_Program_Date}</Td>
                                </Tr>
                                <Tr>
                                    <Td>second_Program_Venue</Td>
                                    <Td>{second_Program_Venue}</Td>
                                </Tr>
                                <Tr>
                                    <Td>third_Program_Name</Td>
                                    <Td>{third_Program_Name}</Td>
                                </Tr>
                                <Tr>
                                    <Td>third_Program_Date</Td>
                                    <Td>{third_Program_Date}</Td>
                                </Tr>
                                <Tr>
                                    <Td>third_Program_Venue</Td>
                                    <Td>{third_Program_Venue}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Other_details</Td>
                                    <Td>{Other_details}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <WrapItem w={'fit-content'} m={'auto'} mt={5}>
                            <Button onClick={() => handleDLT(id)} colorScheme='red'>Delete</Button>
                        </WrapItem>
                    </TableContainer>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionFloder
