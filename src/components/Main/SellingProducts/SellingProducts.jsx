import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { usePagination } from '@/hooks/usePagination';
import { getProductList } from '@/apis/fetchProducts';
import { getPageButtons } from '@/utils/getPageButtons';
import { SearchProducts } from './SearchProducts';
import { Product } from '@/components/common/Product';
import { Pagination } from './Pagination';
import styles from './SellingProducts.module.css';

export function SellingProducts() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [orderBy, setOrderBy] = useState('recent');

  const DELAY = 300;
  const [debouncedKeyword] = useDebounce(keyword, DELAY); // 디바운싱

  const { currentPage, totalPages, setTotalItems, goToPage, next, prev } =
    usePagination();

  useEffect(() => {
    async function fetchProducts() {
      const result = await getProductList({
        page: currentPage,
        orderBy,
        keyword: debouncedKeyword,
      });
      //   객체 프로퍼티 이름으로 가져오기!
      setProducts(result.list); // 프로덕트 배열 가져옴
      setTotalItems(result.totalCount); // 전체 프로덕트 개수
    }

    fetchProducts();
  }, [currentPage, orderBy, debouncedKeyword, setTotalItems]); // setTotalItems는 함수라서 무한루프 x

  const pageButtons = getPageButtons(currentPage, totalPages);

  return (
    <section className={styles.section}>
      <div className={styles.productsBar}>
        <h2 className={styles.productsTitle}>판매 중인 상품</h2>
        <SearchProducts
          keyword={keyword}
          setKeyword={setKeyword}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          goToPage={goToPage}
        />
      </div>

      <ul className={styles.sellingProductList}>
        {products.map(({ id, images, name, price, favoriteCount }) => (
          <li key={id}>
            <Product
              src={images[0]}
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
    </section>
  );
}
