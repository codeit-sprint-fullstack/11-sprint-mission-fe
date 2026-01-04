import { useState, useEffect } from 'react';
import { getProductList } from '@/api/productApi';
import { useDeviceType } from '@/hooks/useDeviceType';
import { usePagination } from '@/hooks/usePagination';
import ProductCard from '@/components/ProductCard';
import SortDropdown from '@/components/SortDropdown';
import Pagination from '@/components/Pagination';
import { FiSearch } from 'react-icons/fi'; // 돋보기
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const device = useDeviceType();

  const pageSize = device === 'mobile' ? 4 : device === 'tablet' ? 6 : 10;

  const { currentPage, totalPages, pageNumbers, setTotalItems, goToPage, setCurrentPage } =
    usePagination(1, pageSize);

  const sortOptions = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];

  useEffect(() => {
    setCurrentPage(1);
  }, [orderBy, keyword, setCurrentPage]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const items = await getProductList({
          page: currentPage,
          pageSize: pageSize,
          orderBy: orderBy,
          keyword: keyword,
        });
        setProducts(items.list);
        setTotalItems(items.totalCount);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    getProducts();
  }, [pageSize, orderBy, keyword, currentPage, setTotalItems]);

  return (
    <section className="list-section">
      <div className="section-header">
        <h2 className="section-title">판매 중인 상품</h2>
        <div className="section-nav">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className="item-search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
          </div>

          <button className="button registration-button">상품 등록하기</button>
          
          <SortDropdown
            options={sortOptions}
            defaultValue={orderBy}
            onSelect={(value) => setOrderBy(value)}
          />
        </div>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} type="list" />
        ))}
      </div>

      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageNumbers={pageNumbers}
          onPageChange={goToPage}
        />
      </div>
    </section>
  );
}

export default ProductList;
