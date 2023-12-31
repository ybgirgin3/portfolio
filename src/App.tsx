import React from 'react';
import Header from './Components/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen';
import ContactScreen from './Screens/ContactScreen';
import ProjectsScreen from './Screens/ProjectsScreen';
import ExperiencesScreen from './Screens/ExperiencesScreen';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/aboutme" Component={ExperiencesScreen} />
          <Route path="/projects" Component={ProjectsScreen} />
          <Route path="/contact" Component={ContactScreen} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
