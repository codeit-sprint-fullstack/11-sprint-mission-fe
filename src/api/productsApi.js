const API_BASE_URL = 'https://panda-market-api.vercel.app';

export const getProducts = async (params = {}) => {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${API_BASE_URL}/products?${query}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

export const createProduct = async ({ name, description, price, tags }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, price, tags }),
    });
    if (!response.ok) {
      throw new Error(`HTTP ERROR, status ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Failed to create product:', error);
    throw error;
  }
};
