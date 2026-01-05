const axios = axios.create({
  baseURL: 'https://panda-market-api.vercel.app/docs/',
});

const getProductList = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
}) => {
  try {
    const params = {
      //new urlSearchParams()삭제
      page,
      pageSize,
      orderBy,
      ...(keyword && { keyword: keyword }),
    };
    const response = await axios.get('/products', { params });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product getList] - 에러발생${error.message}`);
    throw error;
  }
};

const getProduct = async ({ productId }) => {
  try {
    const response = await axios.get(`/products/${productId}`);

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product get] - 에러발생${error.message}`);
    throw error;
  }
};
const createProduct = async ({ name, description, price, tags, images }) => {
  try {
    const response = await axios.post('/products', {
      name,
      description,
      price,
      tags,
      images,
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product create] - 에러발생 ${error.message}`);
    throw error;
  }
};

const patchProduct = async (productId, patchData) => {
  try {
    const response = await axios.patch(`/products/${productId}`, patchData);

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product patch] - 에러발생${error.message}`);
    throw error;
  }
};

const deleteProduct = async ({ productId }) => {
  try {
    const response = await axios.delete(`/products/${productId}`);

    return response.status;
  } catch (error) {
    console.log(`[product delete] - 에러발생${error.message}`);
    throw error;
  }
};

//favorite
const createProductFavorite = async ({
  productId,
  name,
  description,
  price,
  tags,
  images,
}) => {
  try {
    const response = await axios.post(`/products/${productId}/favorite`, {
      name,
      description,
      price,
      tags,
      images,
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[product create] - 에러발생 ${error.message}`);
    throw error;
  }
};

const deleteProductFavorite = async ({ productId }) => {
  try {
    const response = await axios.delete(`/products/${productId}/favorite`);

    return response.status;
  } catch (error) {
    console.log(`[product delete] - 에러발생${error.message}`);
    throw error;
  }
};

const ProductServece = {
  getProduct,
  getProductList,
  createProduct,
  patchProduct,
  deleteProduct,
  createProductFavorite,
  deleteProductFavorite,
};
