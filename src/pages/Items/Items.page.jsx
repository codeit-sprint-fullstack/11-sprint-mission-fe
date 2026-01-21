import MarketFooter from '../../components/Layout/MarketFooter';
import MarketHeader from '../../components/Layout/MarketHeader';
import SellingProducts from '../Market/components/SellingProducts';
import styles from './items.page.module.css';

function Items() {
  return (
    <div>
      <MarketHeader />
      <main className={styles.main}>
        <SellingProducts />
      </main>
      <MarketFooter />
    </div>
  );
}

export default Items;
