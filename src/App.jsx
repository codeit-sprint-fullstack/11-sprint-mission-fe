import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ItemsPage from './pages/ItemsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RegistrationPage from './pages/RegistrationPage';
import ProductDetailPage from './pages/ProductDetailPage.jsx';


// 레이아웃 컴포넌트: 로그인/회원가입 페이지에서만 헤더/푸터 숨김
function Layout({ children }) {
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}

const App = () => {
  return (
    // 라우터 시작
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/items/:itemId" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
