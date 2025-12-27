export function getArticleList(page = 1, pageSize = 10, keyword = '') {
  return fetch(
    `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    });
}

export function getArticle(articleId) {
  return fetch(`https://panda-market-api-crud.vercel.app/articles/${articleId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    });
}

export function createArticle({ title, content, image }) {
  const newArticle = {
    title,
    content,
    image,
  };

  return fetch('https://panda-market-api-crud.vercel.app/articles', {
    method: 'POST',
    body: JSON.stringify(newArticle),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    });
}

export function patchArticle(articleId, updateArticle) {
  return fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(updateArticle),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    });
}

export function deleteArticle(articleId) {
  return fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: 'DELETE',
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    });
}
