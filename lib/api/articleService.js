const BASE_URL = 'https://panda-market-api-crud.vercel.app';

function getArticleList(
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = ''
) {
  return fetch(
    `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `HTTP ERROR, status:${res.status}, text: ${res.statusText}`
        );
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

function getArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `HTTP ERROR, status:${res.status}, text: ${res.statusText}`
        );
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

function createArticle(articleData) {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify(articleData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `HTTP ERROR, status:${res.status}, text: ${res.statusText}`
        );
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

function updateArticle(id, articleData) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(articleData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `HTTP ERROR, status:${res.status}, text: ${res.statusText}`
        );
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `HTTP ERROR, status:${res.status}, text: ${res.statusText}`
        );
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

export const articleService = {
  getArticleList,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
