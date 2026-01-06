import axios from 'axios';

export const getProducts = async () => {
  try {
    const { data } = await axios.get('https://panda-market-api.vercel.app/api/products');
    return data;
  } catch (error) {
    console.error('API 에러:', error);
    return [];
  }
};
