import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/Home/Home';
import { ProductList } from './components/ProductList/ProductList';
import { Registration } from './components/Registration/Registration';
export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ProductList />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
