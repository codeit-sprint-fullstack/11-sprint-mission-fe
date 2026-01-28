import Footer from '@/components/Footer/Footer';
import MarketHeader from '../../components/MarketHeader/MarketHeader';
import ProductListSection from './components/ProductListSection/ProductListSection';
// import ProductList from './components/ProductList/ProductList';

// import styles from './MarketPage.module.css'

function MarketPage() {
  return (
    <>
      <MarketHeader />
      <ProductListSection />
      {/* <ProductList/> */}
      <Footer />
    </>
  );
}

export default MarketPage;
