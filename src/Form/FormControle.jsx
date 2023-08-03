import { Flex, FormControl, FormLabel, Input, Spacer } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../ContextApp/AppContextProvider'

const FormControle = ({ label, input, type, placeholder ,handleInp}) => {
    const {state} = useContext(AppContext)
    
    return (
        <FormControl 
        // isRequired
        p={5} mb={5} bg={'white'}>
            <Flex>
                <FormLabel>{label}</FormLabel><Spacer/>
            </Flex>
            <Input type={type} placeholder={placeholder} name={placeholder} onChange={(e)=>handleInp(e)} />
        </FormControl>

    )
}

export default FormControle
