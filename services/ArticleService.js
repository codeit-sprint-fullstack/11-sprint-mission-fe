const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

/**
 * 게시글 목록 조회
 */
export async function getArticleList({ page = 1, pageSize = 10, keyword = "" }) {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Article list error:", res.status);
      throw new Error("게시글 목록 조회 실패");
    }
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

/**
 * 게시글 단건 조회
 */
export async function getArticle(articleId) {
  try {
    const res = await fetch(`${ BASE_URL }/${ articleId }`);
    if (!res.ok) {
      console.error("Get article error:", res.status);
      throw new Error("게시글 조회 실패");
    }
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
}

/**
 * 게시글 생성
 */
export async function createArticle({ title, content, image }) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, image }),
    });
    if (!res.ok) {
      console.error("Create article error:", res.status);
      throw new Error("게시글 생성 실패");
    }
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
}

/**
 * 게시글 수정
 */
export async function patchArticle(articleId, data) {
  try {
    const res = await fetch(`${ BASE_URL }/${ articleId }`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      console.error("Patch article error:", res.status);
      throw new Error("게시글 수정 실패");
    }
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
}

/**
 * 게시글 삭제
 */
export async function deleteArticle(articleId) {
  try {
    const res = await fetch(`${ BASE_URL }/${ articleId }`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error("Delete article error:", res.status);
      throw new Error("게시글 삭제 실패");
    }
    console.log("게시글 삭제 성공");
  } catch (err) {
    return console.error(err);
  }
}