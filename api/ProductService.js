import axios from 'axios';

const productApi = axios.create({
  baseURL: 'https://panda-market-api-crud.vercel.app',
});

export const getProductList = async ({
  page = 1,
  pageSize = 10,
  keyword = '',
} = {}) => {
  try {
    const res = await productApi.get('/products', {
      params: { page, pageSize, keyword },
    });
    return res.data;
  } catch (e) {
    if (e.response) {
      console.log('상품 목록 조회 실패:', e.response.status, e.response.data);
    } else {
      console.log('상품 목록 조회 실패');
    }
    throw e;
  }
};

export const getProduct = async (id) => {
  try {
    const res = await productApi.get(`/products/${id}`);
    return res.data;
  } catch (e) {
    if (e.response) {
      console.log('상품 상세 조회 실패:', e.response.status, e.response.data);
    } else {
      console.log('상품 상세 조회 실패');
    }
    throw e;
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
    const res = await productApi.post('/products', {
      name,
      description,
      price,
      tags,
      images,
    });
    return res.data;
  } catch (e) {
    if (e.response) {
      console.log('상품 등록 실패:', e.response.status, e.response.data);
    } else {
      console.log('상품 등록 실패');
    }
    throw e;
  }
};

export const patchProduct = async (id, update) => {
  try {
    const res = await productApi.patch(`/products/${id}`, update);
    return res.data;
  } catch (e) {
    if (e.response) {
      console.log('상품 수정 실패:', e.response.status, e.response.data);
    } else {
      console.log('상품 수정 실패');
    }
    throw e;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await productApi.delete(`/products/${id}`);
    return res.data ?? null;
  } catch (e) {
    if (e.response) {
      console.log('상품 삭제 실패:', e.response.status, e.response.data);
    } else {
      console.log('상품 삭제 실패');
    }
    throw e;
  }
};

// getProductList() : GET 메서드를 사용해 주세요.
// page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
// getProduct() : GET 메서드를 사용해 주세요.
// createProduct() : POST 메서드를 사용해 주세요.
// request body에 name, description, price, tags, images 를 포함해 주세요.
// patchProduct() : PATCH 메서드를 사용해 주세요.
// deleteProduct() : DELETE 메서드를 사용해 주세요.
// async/await 을 이용하여 비동기 처리를 해주세요.
// try/catch 를 이용하여 오류 처리를 해주세요.
// 구현한 함수들을 아래와 같이 파일을 분리해 주세요.
// export를 활용해 주세요.
// ProductService.js 파일 Product API 관련 함수들을 작성해 주세요.
// ArticleService.js 파일에 Article API 관련 함수들을 작성해 주세요.
