import React, { useContext } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Form from './Form'
import { AppContext } from '../ContextApp/AppContextProvider'
import UserDetails from './UserDetails'

const TabSection = () => {
    return (
        <Tabs isFitted variant='enclosed'>
            <TabList m={5}>
                <Tab>Form</Tab>
                <Tab 
                // display={state.isAuth?"block":"none"}
                >User Details</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Form/>
                </TabPanel>
                <TabPanel 
                // display={state.isAuth?"block":"none"}
                >
                <UserDetails/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TabSection
