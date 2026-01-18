import { Route, Routes } from 'react-router';
import { Footer } from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import HomePage from './pages/HomePage/HomePage';
import MarketPage from './pages/MarketPage/components/MarketPage';
import AdditemPage from './pages/AddItemPage/AdditemPage';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <>
      <Header />
      <div className="withHeader">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="item" element={<ItemPage />} />
          <Route path="registration" element={<AdditemPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
