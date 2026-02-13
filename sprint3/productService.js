const BASE_URL = 'https://panda-market-api-crud.vercel.app/products';

// 목록 조회 (GET)
export const getProductList = async ({ page = 1, pageSize = 10, keyword = '' } = {}) => {
  try {
    const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${encodeURIComponent(keyword)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`상태 코드: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('상품 목록 로딩 에러:', error);
    throw error;
  }
};

// 상세 조회 (GET)
export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('상품 조회 실패');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// 생성 (POST)
export const createProduct = async (productData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData), // name, description, price, tags, images 포함
    });
    if (!response.ok) throw new Error('상품 등록 실패');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// 수정 (PATCH) / 삭제 (DELETE) 도 동일한 try/catch 패턴으로 구현합니다.
export const patchProduct = async (id, data) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return response.ok;
};