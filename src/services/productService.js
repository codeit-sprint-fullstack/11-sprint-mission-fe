import { PRODUCT_PAGESIZE } from '@/utils/constants';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 베스트 상풍
export async function getBestProducts() {
  const response = await fetch(`${BASE_URL}/api/products/best`);

  if (!response.ok) {
    throw new Error('베스트 상품 불러오기 실패');
  }

  return response.json();
}

// 상품 목록
export async function getProductList({
  page = 1,
  keyword = '',
  sort = 'recent',
}) {
  const limit = PRODUCT_PAGESIZE ;
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    keyword,
    sort,
  });

  const response = await fetch(`${BASE_URL}/api/products?${params.toString()}`);

  if (!response.ok) {
    throw new Error('상품 목록 불러오기 실패');
  }

  return response.json();
}

// 상품 상세
export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/api/products/${id}`);

  if (!response.ok) {
    throw new Error('상품 불러오기 실패');
  }

  return response.json();
}

// 상품 등록
export async function createProduct(data) {
  const response = await fetch(`${BASE_URL}/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('상품 등록 실패');
  }

  return response.json();
}

// 상품 수정
export async function updateProduct(id, data) {
  const response = await fetch(`${BASE_URL}/api/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('상품 수정 실패');
  }

  return response.json();
}

// 상품 삭제
export async function deleteProduct(id) {
  const response = await fetch(`${BASE_URL}/api/products/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('상품 삭제 실패');
  }

  return true;
}