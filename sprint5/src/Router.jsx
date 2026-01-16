import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/Home/Home';
import { Registration } from './components/Registration/Registration';
import ReecommercePage from './components/RecommercePage/RecommercePage';
export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ReecommercePage />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
