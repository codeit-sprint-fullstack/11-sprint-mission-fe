import { useEffect, useState } from 'react';
import { getBestProducts } from '../apis/products';
import { BestProductCard } from './ProductCard';
import styles from './BestProductList.module.css';

function BestProductList() {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const handleBestProducts = async () => {
      try {
        const data = await getBestProducts({});
        setItems(data.list);
      } catch (error) {
        console.error(`베스트 상품 로딩 실패:`, error);
      }
    };

    handleBestProducts();
  }, []);

  return (
    <div className={styles.BestProducts}>
      <h1 className={styles.BestProduct}>베스트 상품</h1>
      <div className={styles.card}>
        {Items.map((item) => (
          <BestProductCard key={item.id} BestItem={item} />
        ))}
      </div>
    </div>
  );
}

export default BestProductList;
