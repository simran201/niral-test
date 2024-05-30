import React from 'react';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import '@chakra-ui/css-reset';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Portfolio from './Portfolio';
const PrivateRoute = ({ children }) => {
  return localStorage.getItem('authenticated') ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <ChakraProvider >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/portfolio"
            element={
              <PrivateRoute>
                <Portfolio />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
