import { Flex, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Switch } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../ContextApp/AppContextProvider'

const RadioOption = ({ label ,handleInp}) => {
    const {state} = useContext(AppContext)
    return (
        <FormControl 
        // isRequired 
        p={5} my={5} bg={'white'}>
            <RadioGroup defaultValue='2' bg={'white'}>
                <Flex>
                    <FormLabel >{label}</FormLabel>
                    <Switch
                    display={state.isAuth?"block":"none"}
                    />
                </Flex>
                <Stack spacing={5} direction='row'name="onbehalf" value="" onChange={(e)=>handleInp(e)}>
                    <Radio colorScheme='green'name='onbehalf' value='Groom'>Groom</Radio>
                    <Radio colorScheme='green'name='onbehalf' value='Bride'>Bride</Radio>
                </Stack>
            </RadioGroup>
        </FormControl>
    )
}

export default RadioOption
