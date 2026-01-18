import React from 'react';
import { AllProduct } from './AllProduct';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

function RecommercePage() {
  return (
    <div>
      <Header />
      <div>
        <AllProduct />
      </div>
      <Footer />
    </div>
  );
}

export default RecommercePage;
