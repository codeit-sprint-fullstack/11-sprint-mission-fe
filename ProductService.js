// [ ]  'https://panda-market-api-crud.vercel.app/docs/#/Product'
// API를 이용하여 아래 함수들을 구현해 주세요.

// [ ]  async/await 을 이용하여 비동기 처리를 해주세요.
// [ ]  try/catch 를 이용하여 오류 처리를 해주세요.

const productUrl = 'https://panda-market-api-crud.vercel.app/products';

// [ ] getProductList() : GET 메서드를 사용해 주세요.
// [ ] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export async function getProductList(page = 1, pageSize = 10, keyword = '') {
  try {
    const listQuery = new URLSearchParams({
      page,
      pageSize,
      keyword,
    }).toString();

    const response = await fetch(`${productUrl}?${listQuery}`);

    if (!response.ok) {
      throw new Error(`상품 목록 조회 실패, status: ${response.status}, text: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('상품목록:', data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// [ ] getProduct() : GET 메서드를 사용해 주세요.
export async function getProduct(id) {
  try {
    const response = await fetch(`${productUrl}/${id}`);

    if (!response.ok) {
      throw new Error(`상품 상세 조회 실패, status: ${response.status}, text: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`상품 (${id}) 조회 성공:`, data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// [ ] createProduct() : POST 메서드를 사용해 주세요.
// [ ] request body에 name, description, price, tags, images 를 포함해 주세요.
export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await fetch(productUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    if (!response.ok) {
      throw new Error(`상품 등록 실패, status: ${response.status}, text: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('상품 등록 성공:', data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// [ ] patchProduct() : PATCH 메서드를 사용해 주세요.
export async function patchProduct(id, data) {
  try {
    const response = await fetch(`${productUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`상품 수정 실패, status: ${response.status}, text: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(`상품(${id}) 수정 성공:`, result);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// [ ] deleteProduct() : DELETE 메서드를 사용해 주세요.
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${productUrl}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`상품 삭제 실패, status: ${response.status}, text: ${response.statusText}`);
    }

    const data = await response
      .json()
      .catch(() => ({ message: '삭제 성공(내용 없음)' }));

    console.log(`상품(${id}) 삭제 성공:`, data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
