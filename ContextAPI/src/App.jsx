import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserContextProvider from './Contexts/UserContextProvider';
import {ThemeProvider} from './Contexts/ThemeContext';
import Login from './Components/Login';
import Profile from './Components/Profile';
import ThemeBtn from './Components/ThemeButton';
import Card from './Components/Card';

function App() {
  return (
    <UserContextProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
              <Card />
            </div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
