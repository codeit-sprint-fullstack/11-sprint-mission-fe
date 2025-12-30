const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

// 게시글 목록 조회
const getArticleList = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  try {
    const response = await fetch(
      `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 단일 게시글 조회
const getArticle = async (articleId) => {
  try {
    const response = await fetch(`${BASE_URL}/${articleId}`);

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 게시글 생성
const createArticle = async (data) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 게시글 수정
const patchArticle = async (articleId, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${articleId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 게시글 삭제
const deleteArticle = async (articleId) => {
  try {
    const response = await fetch(`${BASE_URL}/${articleId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
      );
    }
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const articleService = {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
