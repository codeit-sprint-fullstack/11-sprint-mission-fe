import ProductCard from '../ProductCard';
import styles from './ProductGrid.module.css';

function ProductGrid({ products = [], columns = 4, variant = 'bestProduct' }) {
  return (
    <div
      className={styles.productGrid}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          columns={columns}
          variant={variant}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
