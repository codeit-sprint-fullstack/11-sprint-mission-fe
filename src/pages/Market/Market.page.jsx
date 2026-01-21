import MarketFooter from '../../components/Layout/MarketFooter';
import MarketHeader from '../../components/Layout/MarketHeader';
import MarketProducts from '../../components/MarketProducts/MarketProducts';
import styles from './Market.page.module.css';

function Market() {
  return (
    <div>
      <MarketHeader />

      <main className={styles.main}>
        <MarketProducts />
      </main>

      <MarketFooter />
    </div>
  );
}

export default Market;
