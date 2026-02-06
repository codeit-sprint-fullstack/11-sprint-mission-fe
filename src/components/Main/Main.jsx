import SalesProduct from './SalesProduct.jsx';
import BestProductList from './BestProductList.jsx';
import styles from './Main.module.css';

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.bestSection}>
        {/* <BestProductList /> */}
      </section>
      <section className={styles.salesSection}>
        <SalesProduct />
      </section>
    </div>
  );
}
