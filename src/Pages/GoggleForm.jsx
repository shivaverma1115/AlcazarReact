import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

const GoggleForm = ({ isOpen, onClose, onOpen }) => {
    return (
        <Box h={'fit-content'}>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                scrollBehavior={'outside'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader ml={3} fontSize={30}fontWeight={700} >Fill the Informations</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Box bg={'pink'} overflow={'auto'}h={'80vh'} m={'auto'} >
                            <iframe width={'100%'} height={'100%'} src="https://docs.google.com/forms/d/e/1FAIpQLScH10UONqA-_aQ0vis7DsukzLMuWCKIXBpDCr0mmOveIP133Q/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </Box>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default GoggleForm
