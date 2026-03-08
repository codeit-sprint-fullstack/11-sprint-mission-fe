const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 베스트 상풍
export async function getBestProducts() {
  const response = await fetch(`${BASE_URL}/products/best`);

  if (!response.ok) {
    throw new Error('베스트 상품 불러오기 실패');
  }

  return response.json();
}

// 상품 목록
export async function getProductList({
  page = 1,
  keyword = '',
  orderBy = 'recent',
  pageSize = 10,
}) {
  // const limit = PRODUCT_PAGESIZE ;
  const params = new URLSearchParams({
    page: page.toString(),
    // limit: limit.toString(),
    pageSize: pageSize.toString(),
    keyword,
    orderBy,
  });

  // const response = await fetch(`${BASE_URL}/products?${params.toString()}`);
  const url = `${BASE_URL}/products?${params.toString()}`;

  const response = await fetch(url, { 
    cache: 'no-store',
    next: { revalidate: 0 } 
  });

  if (!response.ok) {
    throw new Error('상품 목록 불러오기 실패');
  }

  return response.json();
}

// 상품 상세
export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error('상품 불러오기 실패');
  }

  return response.json();
}

// 상품 등록
export async function createProduct(data) {
  const response = await fetch(`${BASE_URL}/products`, {
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
  const response = await fetch(`${BASE_URL}/products/${id}`, {
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
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('상품 삭제 실패');
  }

  return true;
}