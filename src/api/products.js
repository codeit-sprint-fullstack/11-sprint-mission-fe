import axios from 'axios';

export const getProducts = async (params = {}) => {
  try {
    const { data } = await axios.get(
      'https://panda-market-api.vercel.app/products',
      { params }
    );
    return data;
  } catch (error) {
    console.error('API 에러:', error);
    return { list: [], totalCount: 0 };
  }
};
