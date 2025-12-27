const BASE_URL = 'https://panda-market-api-crud.vercel.app';

export const getProductList = async ({
  page = 1,
  pageSize = 10,
  keyword = '',
} = {}) => {
  try {
    const url = `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`목록 조회 실패! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log('ProductList:', data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);

    if (!response.ok) {
      throw new Error(`ID 조회 실패! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(`the Product:`, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createProduct = async ({
  name,
  description,
  price,
  tags,
  images,
} = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      body: JSON.stringify({ name, description, price, tags, images }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`생성 실패! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(`posted Product:`, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchProduct = async (
  productId,
  { name, description, price, tags, images } = {}
) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      body: JSON.stringify({ name, description, price, tags, images }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`수정 실패! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(`patched Product:`, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`삭제 실패! Status: ${response.status}`);
    }

    console.log(`deleted Product ID: ${productId}`);
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
