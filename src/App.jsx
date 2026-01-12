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

import './styles/App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="main-container">
          <Routes>
            <Route path="/items" element={<MarketPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<ProductRegistrationPage />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
