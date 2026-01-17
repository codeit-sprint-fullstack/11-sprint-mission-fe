const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getProductList({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) {
  const response = await fetch(
    `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`HTTP Error! Status: ${response.status} ${errText}`);
  }

  const data = await response.json();
  return data;
}

export async function createProduct({
  name,
  description,
  price = 0,
  tags = [],
  images = [],
}) {
  const newProduct = {
    name,
    description,
    price,
    tags,
    images,
  };

  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`HTTP Error! Status: ${response.status} ${errText}`);
  }

  const data = await response.json();
  return data;
}
