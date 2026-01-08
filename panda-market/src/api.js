const BASE_URL = 'https://panda-market-api.vercel.app/products';

/**
 * 상품 목록을 조회하는 API 함수
 * @param {Object} params - page, pageSize, orderBy, keyword
 * @returns {Promise} 상품 리스트 및 전체 개수 반환
 */
export default async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) {
  // 쿼리 스트링 변환 (예: ?page=1&pageSize=10...)
  const query = new URLSearchParams({
    page,
    pageSize,
    orderBy,
    keyword,
  }).toString();

  const response = await fetch(`${BASE_URL}?${query}`);

  if (!response.ok) {
    throw new Error('데이터 로딩 실패');
  }

  return await response.json();
}
