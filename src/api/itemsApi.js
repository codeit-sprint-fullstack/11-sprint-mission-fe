import axios from 'axios';

const API_BASE_URL = 'http://localhost:5005';

//axios로 API 연동하기
export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await axios.get(`${API_BASE_URL}/items?${query}`);
    const items = response.data.list;
    const total = response.data.totalCount;
    return { items, total };
  } catch (error) {
    if (error.response) {
      const errorMessage = `[StatusCode ${error.response.status}] ${error.response.data.message}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    throw error;
  }
}

// error.response이면 서버에서 응답을 준 경우(4xx, 5xx 에러)
// 표준화된 메시지 제공, 불필요한 정보 제거, 스택 트레이스 시작위치 변경

//fetch로 API 연동하기
// export async function fetchProducts(params = {}) {
//   const query = new URLSearchParams(params).toString();

//   try {
//     const response = await fetch(`${API_BASE_URL}/products?${query}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Failed to fetch products:', error);
//     throw error;
//   }
// }

export async function createProducts(name, description, price, tags) {
  try {
    const response = await axios.post(`${API_BASE_URL}/items`, {
      name,
      description,
      price,
      tags,
    });
    return response.data
  } catch (error) {
    if (error.response) {
      const errorMessage = `[StatusCode ${error.response.status}] ${error.response.data.message}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    throw error;
  }
}
