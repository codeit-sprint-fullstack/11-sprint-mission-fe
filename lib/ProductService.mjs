import { BASE_URL } from './ArticleService.mjs';

export const getProductList = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
} = {}) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text:${response.statusText}`
      );
    }

    const data = await response.json();
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
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text:${response.statusText}`
      );
    }

    const data = await response.json();
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
}) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, price, tags, images }),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text:${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchProduct = async (productId, body) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text:${response.statusText}`
      );
    }

    const data = await response.json();
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
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text:${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
