import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme, } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import AppContextProvider from './ContextApp/AppContextProvider';



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <AppContextProvider>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
          <App />
      </ChakraProvider>
    </BrowserRouter>
  </AppContextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

