
import React, { useState } from 'react'
import CardShow from './CardShow'
import { Box } from '@chakra-ui/react'
import VideoShow from './VideoShow';
const ItemDetails = () => {
    const [toggle,setToggle] = useState(false) ;
    return (
        <Box >
            {toggle?<CardShow/>:<VideoShow/>}
        </Box>
    )
}

export default ItemDetails
