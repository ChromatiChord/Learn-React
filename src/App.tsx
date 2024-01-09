import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Calculator from './pages/CalculatorPage';
import MemoryGame from './pages/MemoryGamePage';
import Navbar from './Navbar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/memory-game" element={<MemoryGame />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
