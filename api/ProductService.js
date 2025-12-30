
 const BASE_URL = 'https://panda-market-api-crud.vercel.app';

//상품 목록 조회 (GET)
export const getProductList = async ({
page = 1,
pageSize = 10,
orderBy = 'recent',
keyword = '',
} = {}) => {
try {
const response = await fetch(
`${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
);

if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}

const data = await response.json();
return data;

} catch (error) {
console.error(error);
throw error;
}
};

//상품 상세 조회 (GET)
export const getProduct = async (productId) => {
try {
const response = await fetch(
`${BASE_URL}/products/${productId}`
);

if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}

const data = await response.json();
return data;

} catch (error) {
console.error(error);
throw error;
}
};

//상품 등록 (POST)
export const createProduct = async (productData) => {
try {
const response = await fetch(
`${BASE_URL}/products`,
{
method: 'POST',
body: JSON.stringify(productData),
headers: {
'content-type': 'application/json',
},
}
);
if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}
const data = await response.json();
return data;
} catch (error) {
console.error(error);
throw error;
}
};


//상품 수정 (PATCH)
export const patchProduct = async (productId,productData) => {
try {
const response = await fetch(
`${BASE_URL}/products/${productId}`,
{
method: 'PATCH',
body: JSON.stringify(productData),
headers: {
'content-type': 'application/json',
},
}
);
if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}
const data = await response.json();
return data;
} catch (error) {
console.error(error);
throw error;
}
};

//상품 삭제 (DELETE)
export const deleteProduct = async (productId) => {
try {
const response = await fetch(
`${BASE_URL}/products/${productId}`, 
{
  method: 'DELETE',
}
);

if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}
const data = await response.json();
return data;

} catch (error) {
console.error(error);
throw error;
}
};


