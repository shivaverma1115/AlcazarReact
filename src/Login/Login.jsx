import React, { useContext, useState } from 'react'
import {  Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { AppContext } from '../ContextApp/AppContextProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { setState ,state} = useContext(AppContext);
    const navigate = useNavigate();


    const [Inp, setInp] = useState('');
    const handleInp = (e) => {
        setInp({ ...Inp, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        if (Inp.user === 'shivaverma1115' && Inp.password === '1234') {
            setState({ ...state, isAuth: true })
            alert("Login Successful !")
            navigate(`/`);
        }
    }
    const handleLogOut = () => {
        setState({ ...state, isAuth: false })
        alert("LogOut Successful !")
    }
    return (
        <>
            <Box w={'50vh'} m={'auto'} textAlign={'center'}>
                <FormControl isRequired mt={20}>
                    <FormLabel>Admin User Name</FormLabel>
                    <Input name='user' onChange={(e) => handleInp(e)} placeholder='Admin User name' />
                </FormControl>
                <FormControl isRequired >
                    <FormLabel>Password</FormLabel>
                    <Input name='password' onChange={(e) => handleInp(e)} placeholder='Password' />
                </FormControl>
                <Button onClick={handleSubmit} m={5}>Login</Button>
                <Button onClick={handleLogOut} m={5}>LogOut</Button>
            </Box>
        </>
    )
}

export default Login
