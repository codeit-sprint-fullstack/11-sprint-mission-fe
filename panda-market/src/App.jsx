import React from 'react';
import Header from './components/Header';
import BestProductList from './components/BestProductList';
import ProductList from './components/ProductList';
import styles from './App.module.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />

      <main className={`${styles.container} ${styles.main}`}>
        <BestProductList />
        <ProductList />
      </main>

      <Footer />
    </>
  );
};

export default App;
