const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

// 상품 목록 조회
const getProductList = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  try {
    const response = await fetch(
      `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 단일 상품 조회
const getProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`);

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품 생성
const createProduct = async (data) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품 수정
const patchProduct = async (productId, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품 삭제
const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const productService = {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
