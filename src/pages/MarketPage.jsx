import BestProduct from '@/features/BestProduct';
import ProductList from '@/features/ProductList';

function MarketPage() {
  return (
    <div className='container market-layout'>
      <BestProduct />
      <ProductList />
    </div>
  );
}

export default MarketPage;
