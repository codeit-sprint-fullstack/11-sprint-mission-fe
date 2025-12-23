export const BASE_URL = 'https://panda-market-api-crud.vercel.app';

export const getArticleList = ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword ='',
} = {}) => {
  return fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ERROR, status: ${response.status}, text:${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export const getArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error (`HTTP ERROR, status: ${response.status}, text:${response.statusText}`)
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export const createArticle = ({ title, content, image }) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error (`HTTP ERROR, status: ${response.status}, text:${response.statusText}`)
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export const patchArticle = (articleId, body) => {
  return fetch(`${BASE_URL}/articles/${articleId}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error (`HTTP ERROR, status: ${response.status}, text:${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export const deleteArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`,{
    method: 'DELETE',
  })
    .then(response => {
      if(!response.ok) {
        throw new Error(`HTTP ERROR, status: ${response.status}, text:${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}