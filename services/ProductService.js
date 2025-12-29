const BASE_URL = 'https://panda-market-api-crud.vercel.app';

export async function getProductList(page = 1, pageSize = 10, keyword = '') {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );

    if (!response.ok) {
      console.error('상품 목록 조회 실패:', response.status);
      throw new Error('Failed to fetch product list');
    }

    return await response.json();
  } catch (error) {
    console.error('getProductList 에러:', error);
  }
}

export async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);

    if (!response.ok) {
      console.error('상품 조회 실패:', response.status);
      throw new Error('Failed to fetch product');
    }

    return await response.json();
  } catch (error) {
    console.error('getProduct 에러:', error);
  }
}

export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images }),
    });

    if (!response.ok) {
      console.error('상품 생성 실패:', response.status);
      throw new Error('Failed to create product');
    }

    return await response.json();
  } catch (error) {
    console.error('createProduct 에러:', error);
  }
}

export async function patchProduct(productId, data) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error('상품 수정 실패:', response.status);
      throw new Error('Failed to patch product');
    }

    return await response.json();
  } catch (error) {
    console.error('patchProduct 에러:', error);
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('상품 삭제 실패:', response.status);
      throw new Error('Failed to delete product');
    }

    console.log('상품 삭제 성공');
  } catch (error) {
    console.error('deleteProduct 에러:', error);
  }
}
