// 구축한 백엔드 서버(sprint5)
const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * 상품 목록을 조회하는 API 함수 (GET)
 * @param {Object} params - page, pageSize, orderBy, keyword
 * @returns {Promise} 상품 리스트 및 전체 개수 반환
 */

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) {
  const query = new URLSearchParams({
    page,
    pageSize,
    orderBy,
    keyword,
  }).toString();

  const response = await fetch(`${BASE_URL}?${query}`);

  if (!response.ok) {
    throw new Error(`데이터 로딩 실패: ${response.status}`);
  }

  return await response.json();
}

/**
 * [NEW] 상품을 등록하는 API 함수 (POST)
 * @param {Object} productData - { name, description, price, tags, images }
 * @returns {Promise} 등록된 상품 데이터 반환
 */

export async function createProduct(productData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error('상품 등록에 실패했습니다.');
  }

  return await response.json();
}
