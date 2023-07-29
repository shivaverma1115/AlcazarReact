import { Menu, Button, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const MenuSort = ({ setInp }) => {
    return (
        <select onChange={(e) => setInp(e.target.value)}>
            <option value={'Wedding'} >Wedding Invitaion Videos</option>
            <option value={'Engagement'}>Engagement Invitation Videos</option>
            <option value={'Birthday'}>Birthday Videos</option>
        </select>
    )
}

export default MenuSort
