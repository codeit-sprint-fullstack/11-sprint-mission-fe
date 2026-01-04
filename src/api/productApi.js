import { request } from './request';

/**
 * 상품 목록 조회
 */
export const getProductList = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
} = {}) => {
  const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
  return request(`/products?${params.toString()}`);
};
