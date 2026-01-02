import { useEffect, useState } from 'react';
import { fetchProductList } from '@/api/productList'
import { ProductContext } from '@/contexts/ProductContext';
import { usePagination } from '@/hooks/usePagination';


const POSTS_PER_PAGE = 10;
const INITIAL_PAGE = 1;

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderBy, setOrderBy] = useState('recent')
  const [keyword, setKeyword] = useState('')
  

  const { currentPage, totalPages, setTotalItems, goToPage, setCurrentPage } =
    usePagination(INITIAL_PAGE, POSTS_PER_PAGE)

  useEffect(() => {
    const getProductList = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data, totalCount } = await fetchProductList(
          currentPage, 
          POSTS_PER_PAGE,
          orderBy,
          keyword
        )
        setProducts(data);
        setTotalItems(totalCount)
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProductList();
  }, [currentPage, orderBy, keyword, setTotalItems]);
   
    const changeKeyword = (newKeyword) => {
    setKeyword(newKeyword);
    setCurrentPage(1); 
  }
  

  const contextValue = {
    products, 
    isLoading,
    error,
    currentPage,
    totalPages,
    goToPage,
    orderBy,
    setOrderBy,
    keyword,
    changeKeyword
    
  }

  

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

