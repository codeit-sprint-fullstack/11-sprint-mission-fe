import { useEffect, useState } from 'react';
import { fetchProductList } from '@/api/productList';
import { ProductContext } from '@/contexts/ProductContext';
import { usePagination } from '@/hooks/usePagination';

const PAGE_SIZE = 10;
const INITIAL_PAGE = 1;

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');

  const { currentPage, totalPages, setTotalItems, goToPage, setCurrentPage } =
    usePagination(INITIAL_PAGE, PAGE_SIZE);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const { data, totalCount } = await fetchProductList(
          currentPage,
          PAGE_SIZE,
          orderBy,
          keyword,
        );
        setProducts(data);
        setTotalItems(totalCount);
      } catch (error) {
        if (error.response) {
          const errorMessage = `상품 목록을 불러오는 중 오류가 발생했습니다. (코드: ${error.response.status})`;
          console.error(errorMessage, error.response.data);
          throw new Error(errorMessage);
        }
        const networkErrorMessage =
          '서버와 통신할 수 없습니다. 네트워크 상태를 확인해주세요.';
        console.error(networkErrorMessage, error);
        throw new Error(networkErrorMessage);
      }
    };
    getProductList();
  }, [currentPage, orderBy, keyword, setTotalItems]);

  const changeKeyword = (newKeyword) => {
    setKeyword(newKeyword);
    setCurrentPage(1);
  };

  const contextValue = {
    products,
    currentPage,
    totalPages,
    goToPage,
    orderBy,
    setOrderBy,
    keyword,
    changeKeyword,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
