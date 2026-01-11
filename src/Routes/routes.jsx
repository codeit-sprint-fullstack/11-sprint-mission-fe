import React from 'react';
import { Route, Routes } from 'react-router';
import { NewForm } from '../components/newForm';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/form" element={<NewForm />} />
    </Routes>
  );
};
