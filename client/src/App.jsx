import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import ItemsPage from './pages/MarketPage/ItemsPage';
import ItemDetailPage from './pages/MarketPage/ItemDetailPage';
import RegisterationPage from './pages/RegisterationPage/RegisterationPage';

function App() {
  return (
    <>
      <Header />

      <main className="withHeader">
        <Routes>
          {/* 초기 진입 시 /items로 이동 */}
          <Route path="/" element={<Navigate to="/items" />} />

          {/* 중고마켓 페이지 */}
          <Route path="/items" element={<ItemsPage />} />

          {/* 상품 등록 페이지 */}
          <Route path="/Registeration" element={<RegisterationPage />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
