const BASE_URL = 'https://panda-market-api-crud.vercel.app';

const getProductList = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
} = {}) => {
  try {
    const res = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );

    if (!res.ok) {
      throw new Error(
        `HTTP ERROR, status:${res.status}, text: ${res.statusText}`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProduct = async ({ id } = {}) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      throw new Error(
        `HTTP ERROR, status:${res.status}, text: ${res.statusText}`
      );
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const createProduct = async ({ productData } = {}) => {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(
        `HTTP ERROR, status:${res.status}, text:${res.statusText}`
      );
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateProduct = async ({ id, productData } = {}) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(
        `HTTP ERROR, status:${res.status}, text:${res.statusText}`
      );
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteProduct = async ({ id } = {}) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(
        `HTTP ERROR, status:${res.status}, text:${res.statusText}`
      );
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const productService = {
  getProductList,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

//getProductList({ page: 1, pageSize: 10, orderBy: 'recent' });
