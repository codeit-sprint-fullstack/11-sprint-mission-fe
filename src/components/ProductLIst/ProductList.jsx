import { useProducts } from '@/contexts/ProductContext';
import { Spinner } from '../Spinner';
import { Pagination } from '@/components/Pagination';
import { ProductListItem } from '@/components/ProductListItem';
import { useState } from 'react';

export function ProductList() {

  const { 
    products, 
    // isLoading, 
    error, 
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
 


  // if (isLoading) {
  //   return <Spinner />;
  // }

  if (error) {
    return <div>에러: {error}</div>;
  }

  return (
    <div>
      <div>
        <h2>판매 중인 상품</h2>
      <input 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="검색할 상품을 입력해주세요"
      />
      <button>상품등록하기</button>
      <select value={orderBy} onChange={(e) => setOrderBy(e.target.value) }>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
      </div>
    
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductListItem item={product}/>
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
