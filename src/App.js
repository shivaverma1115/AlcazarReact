import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Componects/Navbar';
import AllRoutes from './Componects/AllRoutes';
import Ads from './Componects/Ads';
import Footer from './Componects/Footer';

function App() {
  return (
    <Box>
      {/* <Ads /> */}
      <AllRoutes />
      <Navbar />
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
