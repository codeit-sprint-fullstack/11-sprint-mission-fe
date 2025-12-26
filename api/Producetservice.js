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
      console.log(
        `getList - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
      return;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`getList - 에러발생${error.message}`);
  }
};

export const getProduct = async ({ id }) => {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${id}`
    );
    if (!response.ok) {
      console.log(`get - 정보를 불러올 수 없음. 상태코드 : ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`get - 에러발생${error.message}`);
  }
};

export const createArticle = async ({ name, description, price, tag, images }) => {
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
      console.log(
        `create - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
      return;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`create 에러발생 ${error.message}`);
  }
};

const patchProducts = async (productId, patchData) => {
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
      console.log(
        `patch - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`patch - 에러발생${error.message}`);
  }
};
export const deleteProduct = async ({ productId }) => {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      console.log(
        `delete - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
      );
      return;
    }
  } catch (error) {
    console.log(`에러발생${error.message}`);
  }
};
