import axios from "axios";

const PRODUCT_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProductList(params) {
  try {
    const response = await axios.get(PRODUCT_URL, {
      params: params,
    });
    console.log("상품 목록 조회 완료");
    return response.data;
  } catch (error) {
    console.log("상품 목록 가져오다 에러 발생함");
  }
}

export async function getProduct(id) {
  try {
    const response = await axios.get(PRODUCT_URL + "/" + id);
    return response.data;
  } catch (error) {
    console.log("상품 상세 조회 에러");
  }
}

export async function createProduct(item) {
  try {
    const response = await axios.post(PRODUCT_URL, {
      name: item.name,
      description: item.description,
      price: item.price,
      tags: item.tags,
      images: item.images,
    });
    return response.data;
  } catch (error) {
    console.log("상품 등록 에러");
  }
}

export async function patchProduct(id, data) {
  try {
    const response = await axios.patch(PRODUCT_URL + "/" + id, data);
    return response.data;
  } catch (error) {
    console.log("상품 수정 에러");
  }
}

export async function deleteProduct(id) {
  try {
    const response = await axios.delete(PRODUCT_URL + "/" + id);
    return response.data;
  } catch (error) {
    console.log("상품 삭제 에러");
  }
}
