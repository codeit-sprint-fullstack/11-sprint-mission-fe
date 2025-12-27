const BASE_URL = 'https://panda-market-api-crud.vercel.app';

export const getArticleList = ({
  page = 1,
  pageSize = 10,
  keyword = '',
} = {}) => {
  const url = `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`목록 조회 실패! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('ArticleList:', data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const getArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`ID 조회 실패! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`the Article:`, data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const createArticle = ({ title, content, image } = {}) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify({ title, content, image }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`생성 실패! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`posted Article:`, data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const patchArticle = (articleId, { title, content, image } = {}) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    body: JSON.stringify({ title, content, image }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`수정 실패! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`patched Article:`, data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const deleteArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`삭제 실패! Status: ${response.status}`);
      }
      console.log(`deleted Article ID: ${articleId}`);
      return true;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
