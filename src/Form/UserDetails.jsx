import React, { useContext } from 'react'
import { AppContext } from '../ContextApp/AppContextProvider'
import { Box} from '@chakra-ui/react'

const UserDetails = () => {
    const { AllUsers } = useContext(AppContext)
    return (
        <Box>
            {AllUsers.map((ele, i) => {
                const jsonString = JSON.stringify(ele, null, 2);
                return (
                    <Box>
                       {jsonString}
                    </Box>
                )
            })}
        </Box>
    )
}

export default UserDetails
