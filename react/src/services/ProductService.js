// src/services/ProductService.js

const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

/**
 * 상품 목록 조회
 */
export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
  sort = "recent", // recent | favorite
}) {
  const params = new URLSearchParams({
    page,
    pageSize,
    keyword,
    sort,
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!res.ok) {
    throw new Error("상품 목록 조회 실패");
  }

  return res.json();
}

/**
 * 상품 단건 조회
 */
export async function getProduct(productId) {
  const res = await fetch(`${BASE_URL}/${productId}`);

  if (!res.ok) {
    throw new Error("상품 조회 실패");
  }

  return res.json();
}