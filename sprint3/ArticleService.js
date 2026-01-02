const BASE_URL = 'https://panda-market-api-crud.vercel.app/articles';

// 목록 조회 (GET)
export const getArticleList = (page = 1, pageSize = 10, keyword = '') => {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${encodeURIComponent(
    keyword
  )}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.error(`에러 발생! 상태 코드: ${response.status}`);
        throw new Error('데이터를 불러오는데 실패했습니다.');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('네트워크 에러:', error);
      throw error;
    });
};

// 상세 조회 (GET)
export const getArticle = (id) => {
  return fetch(`${BASE_URL}/${id}`).then((response) => {
    if (!response.ok) throw new Error(`에러: ${response.status}`);
    return response.json();
  });
};

// 생성 (POST)
export const createArticle = (title, content, image) => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  }).then((response) => {
    if (!response.ok) throw new Error('생성 실패');
    return response.json();
  });
};

// 수정 (PATCH)
export const patchArticle = (id, data) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

// 삭제 (DELETE)
export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/${id}`, { method: 'DELETE' }).then((response) => {
    if (!response.ok) throw new Error('삭제 실패');
    return true;
  });
};
