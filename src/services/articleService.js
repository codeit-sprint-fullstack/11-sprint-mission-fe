import { ARTICLE_PAGESIZE } from '@/utils/constants';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 베스트 게시글
export async function getBestArticles() {
  const response = await fetch(`${BASE_URL}/api/articles/best`);

  if (!response.ok) {
    throw new Error('베스트 게시글 불러오기 실패');
  }

  return response.json();
}

// 게시글 목록
export async function getArticleList({
  page = 1,
  keyword = '',
  sort = 'recent',
}) {
  const limit = ARTICLE_PAGESIZE;
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    keyword,
    sort,
  });

  const response = await fetch(`${BASE_URL}/api/articles?${params.toString()}`);

  if (!response.ok) {
    throw new Error('게시글 목록 불러오기 실패');
  }

  return response.json();
}

// 게시글 상세
export async function getArticleById(id) {
  const response = await fetch(`${BASE_URL}/api/articles/${id}`);

  if (!response.ok) {
    throw new Error('게시글 불러오기 실패');
  }

  return await response.json();
}

// 게시글 등록
export async function createArticle(data) {
  const response = await fetch(`${BASE_URL}/api/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('게시글 등록 실패');
  }

  return response.json();
}

// 게시글 수정
export async function updateArticle(id, data) {
  const response = await fetch(`${BASE_URL}/api/articles/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('게시글 수정 실패');
  }

  return response.json();
}

// 게시글 삭제
export async function deleteArticle(id) {
  const response = await fetch(`${BASE_URL}/api/articles/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('게시글 삭제 실패');
  }

  return true;
}
