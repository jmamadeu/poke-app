import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Pokemon } from './pages/pokemon';
import React from 'react';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Home />} />
        Red
      </Routes>
    </BrowserRouter>
  );
};
