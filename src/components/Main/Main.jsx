import { BestProducts } from './BestProducts';
import { SellingProducts } from './SellingProducts';
import styles from './Main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BestProducts />
        <SellingProducts />
      </div>
    </main>
  );
}
