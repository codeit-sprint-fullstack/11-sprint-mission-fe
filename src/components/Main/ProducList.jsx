import { useState, useEffect } from 'react';
import { getProducts } from '../api/products';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(); 
        setProducts(data.list || []);
      } catch (err) {
        setError('제품 목록을 불러오지 못했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className={styles.loading}>로딩 중...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.productList}>
      <h2 className={styles.title}>제품 목록 ({products.length}개)</h2>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id || product.productId} className={styles.item}>
            <img
              src={product.imageUrl || product.image || '/placeholder.jpg'}
              alt={product.name || product.title}
              className={styles.image}
            />
            <div className={styles.info}>
              <h3 className={styles.name}>{product.name || product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <p className={styles.price}>
                {product.price
                  ? `${product.price.toLocaleString()}원`
                  : '가격 미정'}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
