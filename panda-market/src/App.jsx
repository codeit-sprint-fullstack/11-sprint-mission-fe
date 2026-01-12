import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ItemsPage from './pages/ItemsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function Layout({ children }) {
  const location = useLocation(); // 지금 주소 위치 확인

  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup';
  return (
    <>
      {/* 로그인 페이지가 아닐 떄만 헤더가 보이게 */}
      {!isAuthPage && <Header />}

      {/* 실제 페이지 내용 */}
      {children}

      {/* 로그인 페이지가 아닐 때만 푸터가 보이게 */}
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
