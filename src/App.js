import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Componects/Navbar';
import AllRoutes from './Componects/AllRoutes';
import Ads from './Componects/Ads';

function App() {
  return (
    <Box>
      <Navbar />
      <Ads />
      <AllRoutes />
    </Box>
  );
}

export default App;
