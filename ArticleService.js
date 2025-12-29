import axios from "axios";

const API_URL = "https://panda-market-api-crud.vercel.app/articles";

export function getArticleList(params) {
  return axios
    .get(API_URL, {
      params: params,
    })
    .then(function (response) {
      console.log("게시글 목록을 성공적으로 불러왔습니다.");
      return response.data;
    })
    .catch(function (error) {
      console.log("목록 조회 중 에러 발생: " + error.message);
    });
}

export function getArticle(id) {
  return axios
    .get(API_URL + "/" + id)
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      console.log("상세 조회 실패!");
    });
}

export function createArticle(data) {
  return axios
    .post(API_URL, {
      title: data.title,
      content: data.content,
      image: data.image,
    })
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      console.log("글 생성 실패");
    });
}

export function patchArticle(id, updateData) {
  return axios
    .patch(API_URL + "/" + id, updateData)
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      console.log("글 수정 실패");
    });
}

export function deleteArticle(id) {
  return axios
    .delete(API_URL + "/" + id)
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      console.log("글 삭제 실패");
    });
}
