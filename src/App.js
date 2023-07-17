import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Componects/Navbar';
import AllRoutes from './Componects/AllRoutes';

function App() {
  return (
    <Box>
      <AllRoutes />
      <Navbar />
    </Box>
  );
}

export default App;
