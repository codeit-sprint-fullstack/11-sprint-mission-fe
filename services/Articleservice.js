const BASE_URL = 'https://panda-market-api-crud.vercel.app';

export function getArticleList(page = 1, pageSize = 10, keyword = '') {
  const url = `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.error('게시글 목록 조회 실패:', response.status);
        throw new Error('Failed to fetch article list');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('getArticleList 에러:', error);
    });
}

export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then((response) => {
      if (!response.ok) {
        console.error('ID 조회 실패:', response.status);
        throw new Error('Failed to fetch article');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('getArticle 에러:', error);
    });
}

export function createArticle({ title, content, image }) {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then((response) => {
      if (!response.ok) {
        console.error('게시글 생성 실패:', response.status);
        throw new Error('Failed to create article');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('createArticle 에러:', error);
    });
}

export function patchArticle(articleId, data) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.error('게시글 수정 실패:', response.status);
        throw new Error('Failed to patch article');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('patchArticle 에러:', error);
    });
}

export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        console.error('게시글 삭제 실패:', response.status);
        throw new Error('Failed to delete article');
      }
      console.log('게시글 삭제 성공');
    })
    .catch((error) => {
      console.error('deleteArticle 에러:', error);
    });
}
