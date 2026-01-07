import { useEffect, useState } from 'react';
import { getProducts } from '../apis/products';
import { GeneralProductCard } from './ProductCard';
import styles from './SaleProductList.module.css';

function SaleProductList({
  keyword,
  orderBy,
  page,
  pageSize,
  totalCountChange,
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handleSaleProducts = async () => {
      try {
        const data = await getProducts({
          keyword,
          orderBy,
          page,
          pageSize,
        });
        setItems(data.list);
        totalCountChange(data.totalCount);
      } catch (error) {
        console.error(`상품 로딩 실패:`, error);
      }
    };

    handleSaleProducts();
  }, [keyword, orderBy, page, pageSize, totalCountChange]);

  return (
    <div className={styles.saleCards}>
      {items.map((item) => (
        <GeneralProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SaleProductList;
