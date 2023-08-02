import React, {JSX} from 'react';
import Header from './Components/Header';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react";

import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ContactScreen from './Screens/ContactScreen';

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/aboutme" Component={AboutScreen}/>
            <Route path="/contact" Component={ContactScreen}/>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default App;
