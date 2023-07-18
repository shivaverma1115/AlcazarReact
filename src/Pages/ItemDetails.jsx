
import React, { useEffect, useState } from 'react'
import CardShow from './CardShow'
import { Box } from '@chakra-ui/react'
import VideoShow from './VideoShow';
const ItemDetails = () => {
    const [toggle,setToggle] = useState(false) ;
    var item = JSON.parse(localStorage.getItem("Item")) ;
    useEffect(()=>{
        if( item === "card"){
            setToggle(true) ;
        }
        else{
            setToggle(false) ;
        }
    },[item])
    return (
        <Box >
            {toggle?<CardShow/>:<VideoShow/>}
        </Box>
    )
}

export default ItemDetails
