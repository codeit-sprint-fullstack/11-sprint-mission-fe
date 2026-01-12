import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../api';
import styles from '../App.module.css';

const BestProductList = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const loadBest = async () => {
      try {
        const { list } = await getProducts({
          orderBy: 'favorite',
          pageSize: 4,
        });
        setBestProducts(list);
      } catch (error) {
        console.error('베스트 상품 로딩 중 오류 발생:', error);
      }
    };

    loadBest();
  }, []);

  return (
    <section>
      <h2 className={styles.sectionTitle}>베스트 상품</h2>
      <div className={`${styles.grid} ${styles.bestGrid}`}>
        {bestProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestProductList;
