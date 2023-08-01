import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from '@chakra-ui/react'
import React from 'react'

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
                    <ModalHeader ml={3} fontSize={30} fontWeight={700} >Fill the Informations</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Box bg={'pink'} overflow={'auto'} h={'80vh'} m={'auto'} >
                            <iframe width={'100%'} height={'100%'} src="https://docs.google.com/forms/d/e/1FAIpQLSeBIhDPwVekkDRwijKTE6oR-EIzserAIO5oAwBQbfkR_OyF0Q/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default GoggleForm
