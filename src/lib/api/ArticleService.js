import { notFound } from 'next/navigation';
const BASE_URL = 'http://localhost:5001';

//게시글 목록조회 (GET)
export async function getArticleList({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
} = {}) {
  const response = await fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
    { cache: 'no-store' },
  );
  if (!response.ok) {
    throw new Error(
      `목록 조회 실패: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
}
//베스트 게시글 목록조회
export async function getBestArticleList({
  page = 1,
  pageSize = 3,
  orderBy = 'recent',
  keyword = '',
} = {}) {
  const response = await fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
    { cache: 'no-store' },
  );
  if (!response.ok) {
    throw new Error(
      `목록 조회 실패: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
}



//게시글 상세 조회 (GET)
export async function getArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    cache: 'no-store',
  });
  if (!response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error(
      `상세 조회 실패: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
}

// 게시글 등록 (POST)
export async function createArticle(articleData) {
  const response = await fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify(articleData),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`등록 실패: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

//게시글 수정 (PATCH)

export async function patchArticle(articleId, articleData) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    body: JSON.stringify(articleData),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error(`수정 실패: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

//게시글 삭제 (DELETE)
export async function deleteArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
  });

  if (response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error(`삭제 실패: ${response.status} ${response.statusText}`);
  }
  if (response.status === 204) {
    return { success: true };
  }
  return response.json();
}
