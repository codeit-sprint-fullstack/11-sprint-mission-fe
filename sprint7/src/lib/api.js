const BASE_URL = process.env.API_BASE_URL;

export async function getArticles() {
  const res = await fetch(`${BASE_URL}/article`);
  if (!res.ok) throw new Error('게시글을 불러오지 못했습니다.');
  const { items } = await res.json();
  return items.slice(0, 3);
}

export async function createArticle({ title, content }) {
  const res = await fetch(`${BASE_URL}/article/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content }),
  });
  if (!res.ok) throw new Error('게시글 등록에 실패했습니다.');
  return res.json();
}

export async function getArticleList({
  keyword = '',
  sort = 'recent',
  page = 1,
  limit = 5,
} = {}) {
  const params = new URLSearchParams({
    keyword,
    sort,
    page: String(page),
    limit: String(limit),
  });
  const res = await fetch(`${BASE_URL}/article?${params}`);
  if (!res.ok) throw new Error('게시글을 불러오지 못했습니다.');
  const { items, totalCount } = await res.json();
  return { items, totalCount };
}

export async function getArticleDetail(id) {
  const res = await fetch(`${BASE_URL}/article/${id}`);
  if (!res.ok) throw new Error('게시글 상세를 불러오지 못했습니다.');
  return res.json();
}

export async function createCommnets(content, articleId) {
  const res = await fetch(`${BASE_URL}/comment/${articleId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) throw new Error('게시글 등록에 실패했습니다.');
  return res.json();
}

export async function getComments(articleId) {
  const res = await fetch(`${BASE_URL}/comment/${articleId}`);
  if (!res.ok) throw new Error('댓글을 불러오지 못했습니다.');
  const { data } = await res.json();
  return data.items;
}
