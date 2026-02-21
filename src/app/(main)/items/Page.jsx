// (구 items.html) 상품 목록 화면 ('/items')

import ProductList from '../../../components/ProductList';
import styles from '../App.module.css';

const ItemsPage = () => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <ProductList />
    </main>
  );
};

export default ItemsPage;
