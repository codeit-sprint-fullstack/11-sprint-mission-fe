import { createContext, useContext } from 'react';

const defaultContextValue = {
  products: [],
  currentPage: 1,
  totalPage: 1,
  orderBy: 'recent',
  goToPage: () => console.warn('goToPage not implemented'),
  setOrderBy: () => console.warn('setOrderBy not implemented'),
  keyword: '',
  setKeyword: () => console.warn('setKeyword not implemented'),
  changeKeyword: () => console.warn('changeKeyword not implemented'),
};

export const ProductContext = createContext(defaultContextValue);

export const useProducts = () => {
  return useContext(ProductContext);
};
