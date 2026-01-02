import { BestProducts } from './BestProducts';
import styles from './Main.module.css';

export function Main() {
  return (
    <main>
      <div className={styles.container}>
        <BestProducts />
      </div>
    </main>
  );
}
