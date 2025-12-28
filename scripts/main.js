//fetch articles list test(GET)
const getArticleList = function (
  page = 1,
  pageSize = 10,
  order = 'recent',
  keyword = ''
) {
  const fetchArticleList = fetch(
    `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`,
    { method: 'GET' }
  )
    .then((articleList) => {
      if (!articleList.ok) {
        throw new Error(`HTTP error: ${articleList.status}`);
      }
      return articleList.json();
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
  return fetchArticleList;
};

getArticleList(10, 10).then((r) => console.log(r)); //test

//GET one article
const getArticle = function (articleId) {
  const fetchArticle = fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`
  )
    .then((article) => {
      if (!article.ok) {
        throw new Error(`HTTP error: ${article.status}`);
      }
      return article.json();
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
  return fetchArticle;
};
// getArticle(1583).then((r)=>console.log(r));//test

//create article(POST)
const exampleData = {
  image: 'https://example.com/...',
  content: '게시글 내용입니까?',
  title: '게시글 제목입니까?',
};

const createArticle = function (articleData = {}) {
  const postArticle = fetch(
    'https://panda-market-api-crud.vercel.app/articles',
    {
      method: 'POST',
      body: JSON.stringify(articleData),
      headers: { 'Content-Type': 'application/json' },
    }
  )
    .then((article) => {
      if (!article.ok) {
        throw new Error(`HTTP errer:${article.status}`);
      }
      return article.json();
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return postArticle;
};
// createArticle(exampleData).then((r) => console.log(r)); //test

//patch article
const patchSample = {
  image: 'https://example.com/...',
  content: '게시글 내용입니다!!!',
  title: '게시글 제목입니다!!!!!',
};

const patchArticle = function (articleId, articleData = {}) {
  const patchData = fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(articleData),
      headers: { 'Content-Type': 'application/json' },
    }
  )
    .then((patchedArticle) => {
      if (!patchedArticle.ok) {
        throw new Error(`HTTP error: ${patchedArticle.status}`);
      }
      return patchedArticle.json();
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return patchData;
};

// patchArticle(5520, patchSample).then((r) => console.log(r)); //test

//delete artiicle
const deleteArticle = function (articleId) {
  const deletedArticle = fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: 'DELETE',
    }
  )
    .then((deletedData) => {
      if (!deletedData.ok) {
        throw new Error(`HTTP error: ${deletedData.status}`);
      }
      return deletedData.json();
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
  return deletedArticle;
};
/*
//delete test
const testdelete = await fetch(
  `https://panda-market-api-crud.vercel.app/articles/5520`
);
console.log(await testdelete.json());
*/

/*
//fetch products list test
const getProductList = async function (
  page = 1,
  pageSize = 10,
  order = 'recent',
  keyword = ''
) {
  try {
    const fetchResult = await fetch(
      `https://panda-market-api-crudsdadafads.vercel.app/prddoducts?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`
    );
    if (!fetchResult.ok) {
      throw new Error(`HTTP error: ${fetchResult.status}`);
    }
    const pdResult = await fetchResult.json();
    return pdResult;
  } catch (error) {
    console.log(error);
  }
};
*/
// getProductList().then((r) => console.log(r)); //test
/*
//get one product
const getProduct = await fetch(
  'https://panda-market-api-crud.vercel.app/products/2800'
);

const getProductResult = await getProduct.json();

console.log(getProductResult);

//create product(POST)
const productPostData = {
  images: ['https://example.com/...'],
  tags: ['학용품'],
  price: 30000,
  description: 'string',
  name: '고급 샤프',
};

const createProduct = await fetch(
  'https://panda-market-api-crud.vercel.app/products',
  {
    method: 'POST',
    body: JSON.stringify(productPostData),
    headers: { 'Content-Type': 'application/json' },
  }
);

console.log(createProduct);

//patch article
const productPatchData = {
  images: ['https://example.com/...'],
  tags: ['학용품'],
  price: 3000,
  description: 'string',
  name: '샤프',
};

const patchProduct = await fetch(
  'https://panda-market-api-crud.vercel.app/products/2890',
  {
    method: 'PATCH',
    body: JSON.stringify(productPatchData),
    headers: { 'Content-Type': 'application/json' },
  }
);
console.log(patchProduct);

//delete artiicle
const deleteProduct = await fetch(
  'https://panda-market-api-crud.vercel.app/products/2890',
  {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }
);

console.log(deleteProduct);

//delete 확인
const test2 = await fetch(
  'https://panda-market-api-crud.vercel.app/products/2890'
);

const testresult2 = await test2.json();

console.log(testresult2);
*/
