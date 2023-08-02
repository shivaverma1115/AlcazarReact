import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../ContextApp/AppContextProvider'
import { Box, Flex } from '@chakra-ui/react'
import AccordionFloder from './AccordionFloder'

const UserDetails = () => {
    const [Users,setUsers] = useState([]) ;
    const fetchData = async()=>{
        var res = await fetch(`https://carver-data-base.onrender.com/AllUsers`) ;
        var ans = await res.json() ;
        setUsers(ans) ;
        console.log(ans) ;
    }
    useEffect(()=>{
        fetchData() ;
    },[])

    const handleDLT = (id)=>{
        fetch(`https://carver-data-base.onrender.com/AllUsers/${id}`,{
            method:"DELETE",
        }).then(()=>{
            console.log("DELETE")
        })
    }

    return (
        <Box>
            {
                Users.map((ele, i) => {
                    return <AccordionFloder key={i} ele={ele}handleDLT={handleDLT} />
                })
            }
        </Box>
    )
}

export default UserDetails
