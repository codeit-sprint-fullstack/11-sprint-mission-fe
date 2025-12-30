// [ ]  'https://panda-market-api-crud.vercel.app/docs/#/Article'
// API를 이용하여 아래 함수들을 구현해 주세요.

// [ ]  fetch 혹은 axios 를 이용해 주세요.
// [ ] 응답의 상태 코드가 2XX가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
// [ ]  .then() 메서드를 이용하여 비동기 처리를 해주세요.
// [ ]  .catch() 를 이용하여 오류 처리를 해주세요.

const articleUrl = 'https://panda-market-api-crud.vercel.app/articles';

// [ ] getArticleList() : GET 메서드를 사용해 주세요.
// [ ] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export function getArticleList(page = 1, pageSize = 10, keyword = '') {
  // 쿼리 생성
  const listQuery = new URLSearchParams({
    page,
    pageSize,
    keyword,
  }).toString();

  fetch(`${articleUrl}?${listQuery}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `조회 실패, status: ${response.status}, text: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log('게시글 목록:', data);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

// [ ] getArticle() : GET 메서드를 사용해 주세요.
export function getArticle(id) {
  fetch(`${articleUrl}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `데이터 조회 실패, , status: ${response.status}, text: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(`게시글(${id}) 조회 성공:`, data);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

// [ ] createArticle() : POST 메서드를 사용해 주세요.
// [ ] request body에 title, content, image 를 포함해 주세요.
export function createArticle(title, content, image) {
  fetch(articleUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `게시글 등록 실패, status: ${response.status}, text: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log('게시물 등록 성공:', data);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

// [ ] patchArticle() : PATCH 메서드를 사용해 주세요.
export function patchArticle(id, data) {
  fetch(`${articleUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `게시글 수정 실패, status: ${response.status}, text: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(`게시글(${id}) 수정 성공:`, data);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

// [ ] deleteArticle() : DELETE 메서드를 사용해 주세요.
export function deleteArticle(id) {
  fetch(`${articleUrl}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `게시글 삭제 실패, status: ${response.status}, text: ${response.statusText}`
        );
      }
      return response.json().catch(() => ({ message: '삭제 성공(내용 없음)' }));
    })
    .then((data) => {
      console.log(`게시글(${id}) 삭제 성공:`, data);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
