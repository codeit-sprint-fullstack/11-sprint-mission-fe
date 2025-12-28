import axios from 'axios';

const articleApi = axios.create({
  baseURL: 'https://panda-market-api-crud.vercel.app',
});

export const getArticleList = ({
  page = 1,
  pageSize = 10,
  keyword = '',
} = {}) =>
  articleApi
    .get('/articles', { params: { page, pageSize, keyword } })
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log(
          '게시글 목록 조회 실패:',
          e.response.status,
          e.response.data
        );
      } else {
        console.log('게시글 목록 조회 실패');
      }
      throw e;
    });

export const getArticle = (id) =>
  articleApi
    .get(`/articles/${id}`)
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log(
          '게시글 상세 조회 실패:',e.response.status,e.response.data);
      } else {
        console.log('게시글 상세 조회 실패');
      }
      throw e;
    });

export const createArticle = ({ title, content, image }) =>
  articleApi
    .post('/articles', { title, content, image })
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log('게시글 등록 실패:', e.response.status, e.response.data);
      } else {
        console.log('게시글 등록 실패');
      }
      throw e;
    });

export const patchArticle = (id, update) =>
  articleApi
    .patch(`/articles/${id}`, update)
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log('게시글 수정 실패:', e.response.status, e.response.data);
      } else {
        console.log('게시글 수정 실패');
      }
      throw e;
    });

export const deleteArticle = (id) =>
  articleApi
    .delete(`/articles/${id}`)
    .then((res) => res.data ?? null)
    .catch((e) => {
      if (e.response) {
        console.log('게시글 삭제 실패:', e.response.status, e.response.data);
      } else {
        console.log('게시글 삭제 실패');
      }
      throw e;
    });

// getArticleList() : GET 메서드를 사용해 주세요.
// page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
// getArticle() : GET 메서드를 사용해 주세요.
// createArticle() : POST 메서드를 사용해 주세요.
// request body에 title, content, image 를 포함해 주세요.
// patchArticle() : PATCH 메서드를 사용해 주세요.
// deleteArticle() : DELETE 메서드를 사용해 주세요.
// .then() 메서드를 이용하여 비동기 처리를 해주세요.게시글 목록 조회
// fetch 혹은 axios 를 이용해 주세요.
// 응답의 상태 코드가 2XX가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
// .catch() 를 이용하여 오류 처리를 해주세요.
