import { Footer } from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import HomePage from './pages/HomePage/HomePage';
import MarketPage from './pages/MarketPage/components/MarketPage';

function App() {
  return (
    <>
      <Header />
      <div className="withHeader">
        <MarketPage />
        <HomePage />
      </div>
      <Footer />
    </>
  );
}
export default App;
