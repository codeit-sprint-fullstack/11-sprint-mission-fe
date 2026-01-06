//스프린트3의 파일을 침고

const productApi = 'https://panda-market-api-crud.vercel.app/products';

//error validation
const isThereError = (result) => {
  if (!result.ok) {
    throw new Error(`HTTP error code: ${result.status}`);
  }
};

//return result.json()
const thisIsResult = (result) => {
  isThereError(result);
  return result.json();
};

//print error message
const printError = (error) => {
  console.error(`오류 발생! ${error}`);
  return null;
};

//fetch products list test
export const getProductList = async function (
  page = 1,
  pageSize = 10,
  order = 'recent',
  keyword = ''
) {
  try {
    const fetchProductList = await fetch(
      `${productApi}?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`,
      { method: 'GET' }
    );

    const result = await thisIsResult(fetchProductList);
    return result;
  } catch (error) {
    return printError(error);
  }
};

//get one product
export const getProduct = async function (productId) {
  try {
    const fetchProduct = await fetch(`${productApi}/${productId}`, {
      method: 'GET',
    });

    const result = await thisIsResult(fetchProduct);
    return result;
  } catch (error) {
    return printError(error);
  }
};

//create product(POST)
export const createProduct = async function (productData) {
  try {
    const postProduct = await fetch(`${productApi}`, {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await thisIsResult(postProduct);
    return result;
  } catch (error) {
    return printError(error);
  }
};

//patch article
export const patchProduct = async function (productId, productData) {
  try {
    const patchData = await fetch(`${productApi}/${productId}`, {
      method: 'PATCH',
      body: JSON.stringify(productData),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await thisIsResult(patchData);
    return result;
  } catch (error) {
    return printError(error);
  }
};

//delete article
export const deleteProduct = async function (productId) {
  try {
    const deletedProduct = await fetch(`${productApi}/${productId}`, {
      method: 'DELETE',
    });
    const result = await thisIsResult(deletedProduct);
    return result;
  } catch (error) {
    return printError(error);
  }
};
