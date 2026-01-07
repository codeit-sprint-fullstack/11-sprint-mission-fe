import './styles/reset.css';
import Header from './components/header/Header';
import BestProductList from './components/BestProductList/BestProductList';
import ProductListSection from './components/ProductListSection/ProductListSection';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <h1>중고마켓 - 판다마켓</h1> */}

        <section>
          <BestProductList />
        </section>

        <ProductListSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
