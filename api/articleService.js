import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://panda-market-api-crud.vercel.app',
});

const getArticleList = async ({ page, pageSize, keyword }) => {
  const params = {
    page,
    pageSize,
    ...(keyword && { keyword: keyword }),
  };
  return instance
    .get('/articles', { params })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(` article getList - 에러발생${error.message}`);

      throw error;
    });
};

// const articleQuery = {
//   page: 1,
//   pageSize: 10,
//   keyword: "", // 검색 안 할 땐 undefined
// };
// getArticleList(articleQuery);//잘나옴

const getArticle = async ({ id }) => {
  return instance
    .get(`/articles/${id}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(`articel 에러발생${error.message}`);
      throw error;
    });
};
// getArticle({id:5494}); //잘나옴!

const createArticle = async ({ title, content, image }) => {
  return instance
    .post('/articles', {
      title,
      content,
      image,
    })

    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(` article create - 에러발생${error.message}`);
      throw error;
    });
};

const patchArticle = async (articleId, patchData) => {
  return instance
    .patch(
      `/articles/${articleId}`,
      patchData
    )

    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(` article patch - 에러발생${error.message}`);
      throw error;
    });
};

const deleteArticle = async ({ articleId }) => {
  return instance
    .delete(`/articles/${articleId}`)
    .then((response) => {
      console.log(response.status);
      return response.status;
    })
    .catch((error) => {
      console.log(`article delete - 에러발생${error.message}`);
      throw error;
    });
};

const ArticleService = {
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
};
export default ArticleService;
