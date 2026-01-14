export async function getProducts(params = {}) {
  // URLSearchParams을 이용하면 파라미터 값을 자동으로 쉽게 인코딩할 수 있어요.
  const query = new URLSearchParams(params).toString();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const url = new URL('/products', BASE_URL);
    url.search = query;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}
