const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 공통 응답 처리
function handleResponse(response) {
  if (!response.ok) {
    console.error(`Article API Error: ${response.status} ${response.statusText}`);
  }
  return response;
}

// 게시글 목록 조회
export function getArticleList({ page = 1, pageSize = 10, keyword = '' } = {}) {
  const url = new URL(`${BASE_URL}/articles`);
  url.searchParams.set('page', page);
  url.searchParams.set('pageSize', pageSize);
  if (keyword) url.searchParams.set('keyword', keyword);

  return fetch(url, { method: 'GET' })
    .then(handleResponse)
    .then(res => res.json())
    .catch(err => {
      console.error('getArticleList Error:', err);
    });
}

// 게시글 단일 조회
export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, { method: 'GET' })
    .then(handleResponse)
    .then(res => res.json())
    .catch(err => {
      console.error('getArticle Error:', err);
    });
}

// 게시글 생성
export function createArticle({ title, content, image }) {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  })
    .then(handleResponse)
    .then(res => res.json())
    .catch(err => {
      console.error('createArticle Error:', err);
    });
}

// 게시글 수정
export function patchArticle(articleId, payload) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(handleResponse)
    .then(res => res.json())
    .catch(err => {
      console.error('patchArticle Error:', err);
    });
}

// 게시글 삭제
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, { method: 'DELETE' })
    .then(handleResponse)
    .then(res => res.json())
    .catch(err => {
      console.error('deleteArticle Error:', err);
    });
}
