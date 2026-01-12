import BestProductList from './components/BestProductList/BestProductList';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import ProductListSection from './components/ProductListSection/ProductListSection';

export default function ProductListPage() {
  return (
    <>
      <Header />
      <BestProductList />
      <ProductListSection />
      <Footer />
    </>
  );
}
