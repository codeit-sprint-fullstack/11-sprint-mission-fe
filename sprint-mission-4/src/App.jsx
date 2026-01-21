import ProductListPage from './pages/ProductListPage/ProductListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.css';
import MainHome from './pages/MainHome/MainHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/" element={<MainHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
