import { useState, useEffect } from 'react';
import { getProductList } from '@/api/productApi';
import { useDeviceType } from '@/hooks/useDeviceType';
import ProductCard from '@/components/ProductCard';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const device = useDeviceType();

  const pageSize = device === 'mobile' ? 4 : device === 'tablet' ? 6 : 10;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const items = await getProductList({
          page: 1,
          pageSize: pageSize,
          orderBy: orderBy,
          keyword: keyword,
        });
        setProducts(items.list);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    getProducts();
  }, [pageSize, orderBy, keyword]);

  return (
    <section className="list-section">
      <div className="section-header">
        <h2 className="section-title">판매 중인 상품</h2>
        <div className="section-nav">
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            className="item-search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          ></input>
          <button className="button registration-button">상품 등록하기</button>
          <select
            className="sort-dropdown"
            value={orderBy}
            onChange={(event) => setOrderBy(event.target.value)}
          >
            <option className="recent">최신순</option>
            <option className="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} type="list" />
        ))}
      </div>

      <div className="pagination-container"></div>
    </section>
  );
}

export default ProductList;
