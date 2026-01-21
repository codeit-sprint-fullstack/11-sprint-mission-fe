import { useEffect, useState } from 'react';
import { getProducts } from '../../../../api/productsApi';
import { Spinner } from '../../../../components/UI/Spinner';
import usePagination from '../../../../hooks/usePagination';
import Pagination from '../../../../components/UI/Pagination/Pagination';
import useDevice from '../../../../hooks/useDevice';
import search from '../../../../assets/icons/search.svg'
import ProductGrid from '../../../../components/ProductGrid';
import { Link } from 'react-router';
import styles from './SellingProducts.module.css';
import '../../../../features/ProductSectionTitle.css';

function SellingProducts() {
  const device = useDevice();
  const COLUMNS_BY_DEVICE = {
    desktop: 5,
    tablet: 3,
    mobile: 2,
  };

  const columns = COLUMNS_BY_DEVICE[device];
  const ROWS = 2;
  const pageSize = columns * ROWS;

  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { currentPage, setTotalItems, totalPages, goToPage } = usePagination(1);

  useEffect(() => {
    goToPage(1);
  }, [device, goToPage]);

  useEffect(() => {
    goToPage(1);
  }, [orderBy, goToPage]);

  useEffect(() => {
    const fetchSellingProducts = async () => {
      try {
        setLoading(true);

        const products = await getProducts({
          page: currentPage,
          pageSize,
          orderBy,
        });

        setProducts(products.list);
        setTotalItems(products.totalCount);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSellingProducts();
  }, [currentPage, pageSize, orderBy, setTotalItems]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>상품을 불러오지 못했습니다</p>;
  }

  return (
    <section>
      <div className={styles.productToolbar}>
        <h2 className="productSectionTitle">판매 중인 상품</h2>
        <div className={styles.tools}>
          <div className={styles.searchWrapper}>
            <img
              src={search}
              alt="돋보기 아이콘"
              className={styles.searchIcon}
            />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>

          <Link to="/Registration" className={styles.addButton}>
            상품 등록하기
          </Link>
          <select
            className={styles.sortSelect}
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      <ProductGrid products={products} columns={columns} variant="selling" />
      <div className={styles.paginationWrapper}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
    </section>
  );
}

export default SellingProducts;
