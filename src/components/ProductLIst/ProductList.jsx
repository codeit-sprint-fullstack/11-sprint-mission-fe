import { useProducts } from '@/contexts/ProductContext';
import { Pagination } from '@/components/Pagination';
import { ProductListItem } from '@/components/ProductListItem';
import { useState } from 'react'
import styles from './ProductList.module.css';
import searchIcon from '../../assets/icon/ic_search.svg'
import { Button } from '../Button';
import { OrderDropdown } from '../Dropdown';


export function ProductList() {

  const { 
    products, 
    currentPage, 
    totalPages, 
    goToPage,
    orderBy,
    setOrderBy,
    keyword,
    changeKeyword,
  } = useProducts();

  const [inputValue, setInputValue] = useState(keyword)
  
   const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    changeKeyword(value); // keyword 변경 + 페이지 1로 이동
  };


  return (
    <div>
      <div className={styles.productListNavContainer}>
        <h2>판매 중인 상품</h2>
      <div className={styles.productListNav}>
      <input 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="검색할 상품을 입력해주세요"
      />
      <img src={searchIcon} alt="검색"/>
      <Button>상품 등록하기</Button>
      <OrderDropdown orderBy={orderBy} setOrderBy={setOrderBy} />
      {/* <select value={orderBy} onChange={(e) => setOrderBy(e.target.value) }>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select> */}

      </div>
      </div>
    
      <ul className={styles.productListContainer}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductListItem item={product} imgWidth="221px" imgHeight="221px" />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage} // Pass goToPage as onPageChange
      />
    </div>
  );
}
