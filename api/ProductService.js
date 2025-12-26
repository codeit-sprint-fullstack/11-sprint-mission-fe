export const getProductList = async ({ page, pageSize, keyword }) => {
  try {
    const params = new URLSearchParams({
      page,
      pageSize,
      ...(keyword && { keyword: keyword }),
    });
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error(
        `[product getList] - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product getList] - 에러발생${error.message}`);
    throw error;
  }
};

export const getProduct = async ({ id }) => {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${id}`
    );
    if (!response.ok) {
      throw new Error(
        `[product get] - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product get] - 에러발생${error.message}`);
    throw error;
  }
};

export const createProduct = async ({
  name,
  description,
  price,
  tag,
  images,
}) => {
  try {
    const response = await fetch(
      'https://panda-market-api-crud.vercel.app/products',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          price,
          tag,
          images,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(
        `[product create] - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product create] - 에러발생 ${error.message}`);
    throw error;
  }
};

export const patchProducts = async (productId, patchData) => {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patchData),
      }
    );
    if (!response.ok) {
      throw new Error(
        `[product patch] - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product patch] - 에러발생${error.message}`);
    throw error;
  }
};

export const deleteProduct = async ({ productId }) => {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error(
        `[product delete] - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
    } else {
      return response.status;
    }
  } catch (error) {
    console.log(`[product delete] - 에러발생${error.message}`);
    throw error;
  }
};
