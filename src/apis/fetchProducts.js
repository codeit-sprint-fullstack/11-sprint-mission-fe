const URL = 'https://panda-market-api.vercel.app';

export async function getProductList({ page = 1, pageSize = 10, orderBy = 'recent' }) {
  const response = await fetch(
    `${URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );

  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
