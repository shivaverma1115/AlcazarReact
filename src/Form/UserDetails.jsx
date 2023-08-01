import React, { useContext } from 'react'
import { AppContext } from '../ContextApp/AppContextProvider'
import { Box, Flex} from '@chakra-ui/react'
import AccordionFloder from './AccordionFloder'

const UserDetails = () => {
    const { AllUsers } = useContext(AppContext)
    console.log(AllUsers) ;
    return (
        <Box>
            {
                AllUsers.map((ele,i)=>{
                   return <AccordionFloder key={i} ele={ele} />
                })
            }
        </Box>
    )
}

export default UserDetails
