const getArticleList = async ({ page, pageSize, keyword }) => {
  const params = new URLSearchParams({
    page,
    pageSize,
    ...(keyword && { keyword: keyword }),
  });
  fetch(
    `https://panda-market-api-crud.vercel.app/articles?${params.toString()}`
  )
    .then((response) => {
      if (!response.ok) {
        console.log(
          `article getList - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
        );
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) =>
      console.log(` article getList - 에러발생${error.message}`)
    );
};

// const articleQuery = {
//   page: 1,
//   pageSize: 10,
//   keyword: "", // 검색 안 할 땐 undefined
// };
// getArticleList(articleQuery);//잘나옴

const getArticle = async ({ id }) => {
  fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        console.log(
          `article get - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
        );
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(`articel 에러발생${error.message}`);
    });
};
// getArticle({id:5494}); //잘나옴!

const createArticle = async ({ title, content, image }) => {
  fetch('https://panda-market-api-crud.vercel.app/articles', {
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
        console.log(
          `create - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
        );
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) =>
      console.log(` article create - 에러발생${error.message}`)
    );
};

const patchArticle = async (articleId, patchData) => {
  fetch(`https://panda-market-api-crud.vercel.app/articles/${articleId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log(
          `patch - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
        );
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log(` article patch - 에러발생${error.message}`));
};

const deleteArticle = async ({ articleId }) => {
  fetch(`https://panda-market-api-crud.vercel.app/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log(
          `delete - 정보를 불러올 수 없음. 상태코드 : ${response.status}`
        );
        return;
      } else {
        console.log(response.status);
        return response.status;
      }
    })
    .catch((error) => console.log(`article delete - 에러발생${error.message}`));
};

const ArticleService = {
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
};
export default ArticleService;
