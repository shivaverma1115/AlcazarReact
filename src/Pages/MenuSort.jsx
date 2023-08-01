
import { Button, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../ContextApp/AppContextProvider';
import { useNavigate } from 'react-router-dom';

const MenuSort = ({ setInp }) => {
    const navigate = useNavigate();
    const { handleSortAcc, handleSortDes } = useContext(AppContext);
    const sortbyAccesnding = () => {
        handleSortAcc();
        navigate('/');
    }
    const sortBydecending = () => {
        handleSortDes();
        navigate('/');
    }
    return (
        <Flex w={'100%'}border={'1px solid gray'}mb={10}>
            <InputGroup size='sm'>
                <InputLeftAddon onClick={sortbyAccesnding} children='Sort GC code' cursor={'pointer'}/>
                <Input placeholder='Search Videos' onChange={(e) => setInp(e.target.value)} />
            </InputGroup>
            <select onChange={(e) => setInp(e.target.value)} style={{width:"30%"}}>
                <option value={''} >Select</option>
                <option value={'Wedding'} >Wedding Invitaion Videos</option>
                <option value={'Engagement'}>Engagement Invitation Videos</option>
                <option value={'Birthday'}>Birthday Videos</option>
            </select>
        </Flex>
    )
}

export default MenuSort
