import { createContext, useContext } from 'react';

const defaultContextValue = {
  products: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPage: 1,
  orderBy: 'recent',
  goToPage: () => console.warn('goToPage not implemented'),
  setOrderBy: () => console.warn('goToPage not implemented'),
  keyword: '',
  setKeyword: () => console.warn('goToPage not implemented'),
  changeKeyword: () => console.warn('goToPage not implemented'),
}

export const ProductContext = createContext(defaultContextValue)

export const useProducts = () => {
  return useContext(ProductContext)
}

