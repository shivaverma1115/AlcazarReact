import { Box} from '@chakra-ui/react'
import React from 'react'
import Ads from '../Componects/Ads'
import TabSection from './TabSection'

const Order = () => {
    return (
        <Box bg={'#f8e6eb'} pb={20} minH={'90vh'}>
            <Box w={['90%', '80%', '40%']} m={'auto'}>
                <Ads />
                <TabSection />
            </Box>
        </Box>
    )
}

export default Order
