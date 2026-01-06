import { useState, useEffect } from 'react';
import { getProductList } from '@/api/productApi';
import { useDeviceType } from '@/hooks/useDeviceType';
import ProductCard from '@/components/ProductCard';
import './BestProduct.css';

function BestProduct() {
  const [products, setProducts] = useState([]);
  const device = useDeviceType();

  const pageSize = device === 'mobile' ? 1 : device === 'tablet' ? 2 : 4;

  useEffect(() => {
    const getBestProducts = async () => {
      try {
        const items = await getProductList({
          pageSize: pageSize,
          orderBy: 'favorite',
        });
        setProducts(items.list);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    getBestProducts();
  }, [pageSize]);

  return (
    <section className="best-section">
      <h2 className="section-title">베스트 상품</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} type='best' />
        ))}
      </div>
    </section>
  );
}

export default BestProduct;
