const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

export function getArticleList({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  return fetch(
    `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP ERROR status: ${response.status} message: ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => console.error(error));
}
export function getArticle(articleId) {
  console.log(articleId);
  return fetch(`${BASE_URL}/${articleId}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `HTTP ERROR status : ${response.status} message: ${response.statusText}`
        );
      return response.json();
    })
    .catch((err) => console.error(err.message));
}

export function creatArticle(articleData) {
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articleData),
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

export function patchArticle(articleId, articleData) {
  return fetch(`${BASE_URL}/${articleId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articleData),
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `HTTP ERROR status: ${res.status} message:${res.statusText}`
        );
      return response.json();
    })

    .catch((err) => console.error(err.message));
}

export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/${articleId}`, {
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
