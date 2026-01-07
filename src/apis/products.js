const BASE_URL = 'https://panda-market-api.vercel.app';

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) => {
  try {
    const url = `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`목록 조회 실패! status: ${response.status}`);
    }
    const data = await response.json();

    console.log(`베스트 상품 목록:`, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getBestProducts = async ({ page = 1, pageSize = 4 }) => {
  return await getProducts({ page, pageSize, orderBy: 'favorite' });
};
