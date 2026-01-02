import axios from 'axios';

const API_BASE_URL = 'https://panda-market-api.vercel.app';

export async function fetchProductList(
  page = 1,
  pageSize = 10,
  orderBy = 'favorite',
  keyword = '',
) {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: { page, pageSize, orderBy, keyword },
    });
    const data = response.data.list
    const totalCount = response.data.totalCount
    return { data, totalCount };
  } catch (error) {
    if (error.response) {
      const errorMessage = `[StatusCode ${error.response.status}] ${error.response.data.message}`;
      console.error(errorMessage);
      throw new Error(
        `[StatusCode ${error.response.status}] ${error.response.data.message}`,
      );
    }
    throw error;
  }
}
