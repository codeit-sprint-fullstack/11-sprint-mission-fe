'use server';

import { getArticleList, createArticle, createCommnets } from './api';

export async function fetchMoreArticles({ keyword, sort, page }) {
  return getArticleList({ keyword, sort, page });
}

export async function submitArticle({ title, content }) {
  return createArticle({ title, content });
}

export async function submitCreateCommnets(content, articleId) {
  return createCommnets(content, articleId);
}
