import { Routes, Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from '@/pages/HomePage';
import MarketPage from '@/pages/MarketPage';
import ProductRegistrationPage from '@/pages/ProductRegistrationPage';
import BoardPage from '@/pages/BoardPage';
import LoginPage from '@/pages/LoginPage';
import PolicyPage from '@/pages/PolicyPage';
import FAQPage from '@/pages/FAQPage';
import ProductDetailPage from '@/pages/ProductDetailPage'

import './styles/App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/items" element={<MarketPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productregistration" element={<ProductRegistrationPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path='/product' element={<ProductDetailPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
