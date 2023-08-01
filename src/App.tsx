import React from 'react';
import Header from './Components/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import SkillScreen from './Screens/SkillScreen';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <hr />
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/aboutme" Component={AboutScreen} />
          <Route path="/skills" Component={SkillScreen} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
