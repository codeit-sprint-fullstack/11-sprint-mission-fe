export async function getProducts(params = {}) {
  // URLSearchParams을 이용하면 파라미터 값을 자동으로 쉽게 인코딩할 수 있어요.
  const query = new URLSearchParams(params).toString();
     const API_URL = 'http://localhost:5001/products';  //환경변수에 나중에 담을것
     const url = new URL(API_URL);
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
