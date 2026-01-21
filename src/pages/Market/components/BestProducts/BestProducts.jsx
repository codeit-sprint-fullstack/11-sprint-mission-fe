import { useEffect, useState } from 'react';
import { getProducts } from '../../../../api/productsApi.js';
import { Spinner } from '../../../../components/UI/Spinner';
import '../../../../features/ProductSectionTitle.css';
import useDevice from '../../../../hooks/useDevice.js';
import ProductGrid from '../../../../components/ProductGrid';

function BestProducts() {
  const device = useDevice();

  const COLUMNS_BY_DEVICE = {
    desktop: 4,
    tablet: 2,
    mobile: 1,
  };

  const columns = COLUMNS_BY_DEVICE[device];
  const pageSize = columns;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        setLoading(true);

        const products = await getProducts({
          page: 1,
          pageSize,
          orderBy: 'favorite',
        });

        setProducts(products.list);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBestProducts();
  }, [pageSize]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>상품을 불러오지 못했습니다</p>;
  }

  return (
    <section>
      <h2 className="productSectionTitle">베스트 상품</h2>
      <ProductGrid
        products={products}
        columns={columns}
        variant="bestProduct"
      />
    </section>
  );
}

export default BestProducts;
