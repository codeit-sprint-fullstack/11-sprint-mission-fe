const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

export function getProductList({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  return fetch(
    `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  )
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        console.log("실행");
        throw new Error(
          `HTTP ERROR status: ${response.status} message: ${response.statusText}`
        );
      }
      console.log(response.body);
      return response.json();
    })
    .catch((error) => console.error(error));
}

export function getProduct(productId) {
  return fetch(`${BASE_URL}/${productId}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `HTTP ERROR status : ${response.staus} message: ${response.statusText}`
        );
      return response.json();
    })
    .catch((err) => console.error(err.message));
}

export function creatProduct(productData) {
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `HTTP ERROR status: ${response.status} message: ${response.statusText}`
        );
      return response.json();
    })
    .catch((err) => console.error(err.message));
}

export function patchProduct(productId, productData) {
  return fetch(`${BASE_URL}/${productId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `HTTP ERROR status: ${response.status} message:${response.statusText}`
        );
      return response.json();
    })
    .catch((err) => console.error(err.message));
}

export function deleteProduct(productId) {
  return fetch(`${BASE_URL}/${productId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `HTTP ERROR status: ${res.status} message: ${res.statusText}`
        );
      return res.json();
    })
    .catch((err) => console.error(err.message));
}
