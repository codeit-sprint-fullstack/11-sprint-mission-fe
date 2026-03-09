import { api, publicApi } from '@/lib/axios';

export const productsAPI = {
  // 베스트 상풍
  getBestProducts: async () => {
    const params = {
      orderBy: 'favorite',
      pageSize: '4',
    };
    const { data } = await publicApi.get('/products', { params });
    return data.list;
  },

  // 상품 목록
  getProductList: async ({
    page = 1,
    keyword = '',
    orderBy = 'recent',
    pageSize = 10,
  }) => {
    const params = {
      page,
      pageSize,
      keyword,
      orderBy,
    };
    const { data } = await publicApi.get('/products', { params });
    return data;
  },

  // 상품 상세
  getProductById: async (id) => {
    const { data } = await publicApi.get(`/products/${id}`);
    return data;
  },

  // 상품 등록
  createProduct: async (payload) => {
    const { data } = await api.post('/products', payload);
    return data;
  },

  // 상품 수정
  updateProduct: async ({ id, payload }) => {
    const { data } = await api.patch(`/products/${id}`, payload);
    return data;
  },

  // 상품 삭제
  deleteProduct: async (id) => {
    await api.delete(`/products/${id}`);
    return true;
  },
};
