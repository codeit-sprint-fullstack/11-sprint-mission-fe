const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 상품 목록 조회
export async function getProductList({ page = 1, pageSize = 10, keyword = '' } = {}) {
  try {
    const url = new URL(`${BASE_URL}/products`);
    url.searchParams.set('page', page);
    url.searchParams.set('pageSize', pageSize);
    if (keyword) url.searchParams.set('keyword', keyword);

    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Product API Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error('getProductList Error:', err);
  }
}

// 상품 단일 조회
export async function getProduct(productId) {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`);
    if (!res.ok) {
      console.error(`Product API Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error('getProduct Error:', err);
  }
}

// 상품 생성
export async function createProduct({ name, description, price, tags, images }) {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!res.ok) {
      console.error(`Product API Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error('createProduct Error:', err);
  }
}

// 상품 수정
export async function patchProduct(productId, payload) {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error(`Product API Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error('patchProduct Error:', err);
  }
}

// 상품 삭제
export async function deleteProduct(productId) {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      console.error(`Product API Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error('deleteProduct Error:', err);
  }
}
