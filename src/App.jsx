import Header from './components/Header';
import Footer from './components/Footer';
import BestProduct from './features/BestProduct';
import ProductList from './features/ProductList';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <BestProduct />
        <ProductList />
      </main>

      <Footer />
    </>
  )
}

export default App
