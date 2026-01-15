import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { getProductList } from '@/apis/fetchProducts';
import { usePagination } from '../../hooks/usePagination';
import { SearchProducts } from '../SearchProducts';
import { Product } from '../Products';
import { Pagination } from '../Pagination';
import { getPageButtons } from '../Pagination/getPageButtons';
import styles from './SellingProductsSection.module.css';

export function SellingProductsSection() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  const DEBOUNCE_DELAY = 300;
  const [debouncedKeyword] = useDebounce(keyword, DEBOUNCE_DELAY);

  const { currentPage, totalPages, setTotalItems, goToPage, next, prev } =
    usePagination();

  useEffect(() => {
    async function fetchProducts() {
      const result = await getProductList({
        page: currentPage,
        keyword: debouncedKeyword,
      });
      //   객체 프로퍼티 이름으로 가져오기!
      setProducts(result.list); // 프로덕트 배열 가져옴
      setTotalItems(result.totalCount); // 전체 프로덕트 개수
    }

    fetchProducts();
  }, [currentPage, debouncedKeyword, setTotalItems]);

  const pageButtons = getPageButtons(currentPage, totalPages);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bar}>
          <h2 className={styles.productsTitle}>판매 중인 상품</h2>
          <SearchProducts
          keyword={keyword}
          setKeyword={setKeyword}
          goToPage={goToPage}
          />
        </div>

        <ul className={styles.sellingProductList}>
          {products.map(({ id, name, price, favoriteCount }) => (
            <li key={id}>
              <Product
                title={name}
                price={price}
                favoriteCount={favoriteCount}
                className={styles.sellingProduct}
              />
            </li>
          ))}
        </ul>

        <Pagination
          pageButtons={pageButtons}
          goToPage={goToPage}
          next={next}
          prev={prev}
          currentPage={currentPage}
          totalPages={totalPages}
          className={styles.pagination}
        />
      </div>
    </section>
  );
}
