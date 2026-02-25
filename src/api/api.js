// 백엔드 서버
/* eslint-disable no-undef */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// [상품(Product) 관련 API]
// GET 상품 조회
export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) {
  const query = new URLSearchParams({
    page,
    limit: pageSize,
    orderBy,
    keyword,
  }).toString();

  const response = await fetch(`${BASE_URL}/products?${query}`);

  if (!response.ok) {
    throw new Error(`데이터 로딩 실패: ${response.status}`);
  }

  return await response.json();
}

// GET 상품 상세조회
export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('상품 상세 조회 실패');
  }
  return await response.json();
}

// POST 새 상품 등록
export async function createProduct(productData) {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || '상품 등록 실패');
  }

  return await response.json();
}

// [게시글(Article) 관련 API]
// GET 게시글 조회
export async function getArticles({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) {
  const query = new URLSearchParams({
    page,
    limit: pageSize,
    orderBy,
    keyword,
  }).toString();

  const response = await fetch(`${BASE_URL}/articles?${query}`);

  if (!response.ok) {
    throw new Error('게시글 목록 로딩 실패');
  }
  return await response.json();
}

// GET 게시글 상세 조회
export async function getArticleById(id) {
  const response = await fetch(`${BASE_URL}/articles/${id}`);
  if (!response.ok) {
    throw new Error('게시글 상세 정보를 불러오는데 실패했습니다.');
  }
  return await response.json();
}

// POST 새 게시글 등록
export async function createArticle({ title, content }) {
  const response = await fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });
  if (!response.ok) {
    throw new Error('게시글 등록에 실패했습니다.');
  }
  return await response.json();
}

// PATCH 게시글 수정
export async function updateArticle(articleId, { title, content }) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });
  if (!response.ok) {
    throw new Error('게시글 수정에 실패했습니다.');
  }
  return await response.json();
}

// DELETE 게시글 삭제
export async function deleteArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('게시글 삭제에 실패했습니다.');
  }
}

// [댓글 (Comment) 관련 API]
// GET 댓글 조회
export async function getComments({ articleId, limit = 10, cursor }) {
  const query = new URLSearchParams({
    limit,
    ...(cursor && { cursor }),
  }).toString();

  const response = await fetch(
    `${BASE_URL}/comments/articles/${articleId}?${query}`,
  );

  if (!response.ok) {
    throw new Error('댓글 목록 로딩 실패');
  }

  return await response.json();
}

// POST 댓글 생성
export async function createComment({ articleId, content }) {
  const response = await fetch(`${BASE_URL}/comments/articles/${articleId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error('댓글 생성에 실패했습니다.');
  }

  return await response.json();
}

// PATCH 댓글 수정
export async function updateComment({ commentId, content }) {
  const response = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error('댓글 수정에 실패했습니다.');
  }
  return await response.json();
}

// DELETE 댓글 삭제
export async function deleteComment(commentId) {
  const response = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('댓글 삭제에 실패했습니다.');
  }
}
