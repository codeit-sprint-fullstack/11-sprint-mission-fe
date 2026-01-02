const URL = 'https://panda-market-api.vercel.app';

async function getProductList({ page = 1, pageSize, orderBy = 'recent' }) {
  const response = await fetch(
    `${URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );

  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}