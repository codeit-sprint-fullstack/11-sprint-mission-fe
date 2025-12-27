export async function getProductList(page = 1, pageSize = 10, keyword = '') {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProduct(productId) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createProduct({ name, description, price = 0, tags = [], images = [] }) {
  const newProduct = {
    name,
    description,
    price,
    tags,
    images,
  };

  try {
    const response = await fetch(
      'https://panda-market-api-crud.vercel.app/products',
      {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function patchProduct(productId, updateProduct) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      {
        method: 'PATCH',
        body: JSON.stringify(updateProduct),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
