const articleApi = 'https://panda-market-api-crud.vercel.app/articles';

//error validation
const isThereError = (result) => {
  if (!result.ok) {
    throw new Error(`HTTP error code: ${result.status}`);
  }
};

//return result.json()
const thisIsResult = (result) => {
  isThereError(result);
  return result.json();
};

//print error message
const printError = (error) => {
  console.error(`오류 발생! ${error}`);
  return null;
};

//fetch articles list test(GET)
export const getArticleList = function (
  page = 1,
  pageSize = 10,
  order = 'recent',
  keyword = ''
) {
  const fetchArticleList = fetch(
    `${articleApi}?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`,
    { method: 'GET' }
  )
    .then(thisIsResult)
    .catch(printError);
  return fetchArticleList;
};

//GET one article
export const getArticle = function (articleId) {
  const fetchArticle = fetch(`${articleApi}/${articleId}`)
    .then(thisIsResult)
    .catch(printError);
  return fetchArticle;
};

//create article(POST)
export const createArticle = function (articleData) {
  if (!articleData) {
    console.error('게시할 내용이 없습니다.');
    return;
  }
  const postArticle = fetch(`${articleApi}`, {
    method: 'POST',
    body: JSON.stringify(articleData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(thisIsResult)
    .catch(printError);
  return postArticle;
};

//patch article
export const patchArticle = function (articleId, articleData = {}) {
  const patchData = fetch(`${articleApi}/${articleId}`, {
    method: 'PATCH',
    body: JSON.stringify(articleData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(thisIsResult)
    .catch(printError);
  return patchData;
};

//delete article
export const deleteArticle = function (articleId) {
  const deletedArticle = fetch(`${articleApi}/${articleId}`, {
    method: 'DELETE',
  })
    .then(thisIsResult)
    .catch(printError);
  return deletedArticle;
};
