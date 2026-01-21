import BestProducts from '../../pages/Market/components/BestProducts/BestProducts';
import SellingProducts from '../../pages/Market/components/SellingProducts';
import styles from './MarketProducts.module.css';

function MarketProducts() {
  return (
    <div className={styles.productContainer}>
      <BestProducts />
      <SellingProducts />
    </div>
  );
}

export default MarketProducts;
