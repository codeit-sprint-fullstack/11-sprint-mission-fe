import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BestProductList } from './components/BestProductList';
import { ProductList } from './components/ProductList';
import { ProductListSection } from './components/ProductListSection';

function App() {
  return (
    <>
      <Header />

      <main className="grow max-w-300 mx-auto mt-6.5">
        <h1 className="sr-only">중고마켓 - 판다마켓</h1>
        <section>
          <h2 className="text[#111827] font-bold text-[20px] leading-8">
            베스트 상품
          </h2>
          <BestProductList />
        </section>

        <ProductListSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
