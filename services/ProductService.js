const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

/**
 * 상품 목록 조회
 */
export async function getProductList({ page = 1, pageSize = 10, keyword = "" }) {
  try {
    const res = await fetch(
      `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );

    if (!res.ok) {
      console.error("Product list error:", res.status);
      throw new Error("상품 목록 조회 실패");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

/**
 * 상품 단건 조회
 */
export async function getProduct(productId) {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`);

    if (!res.ok) {
      console.error("Get product error:", res.status);
      throw new Error("상품 조회 실패");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

/**
 * 상품 생성
 */
export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, tags, images }),
    });

    if (!res.ok) {
      console.error("Create product error:", res.status);
      throw new Error("상품 생성 실패");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

/**
 * 상품 수정
 */
export async function patchProduct(productId, data) {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Patch product error:", res.status);
      throw new Error("상품 수정 실패");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

/**
 * 상품 삭제
 */
export async function deleteProduct(productId) {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.error("Delete product error:", res.status);
      throw new Error("상품 삭제 실패");
    }

    console.log("상품 삭제 성공");
  } catch (err) {
    console.error(err);
  }
}