import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Grid, GridItem, Heading, Image, Input, Menu, MenuButton, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import VideoPer from './VideoPer'
import { useNavigate } from 'react-router-dom'
import Ads from '../Componects/Ads'
import Footer from '../Componects/Footer'
import MenuSort from "./MenuSort";
import { AppContext } from '../ContextApp/AppContextProvider'



const Video = () => {

  const { Data, setObj } = useContext(AppContext);

  console.log(useContext(AppContext))

  const navigate = useNavigate();
  const handleVideo = (ele) => {
    navigate(`/videoShow`);
    setObj(ele);
  }
  const [Inp, setInp] = useState('');

  return (
    <>
      <Ads display={"none"} />
      <Box>
        <Text textAlign={'center'} fontSize={'30px'} fontWeight={800} m={10}> Indian Wedding Invitation Videos</Text>
        <Box w={'38vh'} m={'auto'}>
          <Box m={'auto'} w={'fit-content'}><MenuSort setInp={setInp} /></Box>
        </Box>
        <Grid outline={'1px solid pink'} overflow={'auto'} h={'70vh'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} bgGradient={'linear(to top right, white, red, black)'} w={'fit-content'} m={'auto'} mb={10} p={10}>
          {
            Data.filter((item) => {
              return Inp.toLowerCase() === '' ? item : item.snippet.title.toLowerCase().includes(Inp.toLowerCase());
            }).map((ele, i) => {
              return <GridItem key={i} cursor={'pointer'} onClick={() => handleVideo(ele)} >
                <VideoPer ele={ele} />
              </GridItem>
            })
          }
        </Grid>
      </Box>
      <Footer display={"none"} />
    </>
  )
}

export default Video
