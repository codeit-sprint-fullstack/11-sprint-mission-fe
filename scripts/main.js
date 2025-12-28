import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from './ArticleService.js';

const baseApi = 'https://panda-market-api-crud.vercel.app/';

//articles
getArticleList(baseApi).then((x) => console.log(x));
getArticle(baseApi, articleId).then((x) => console.log(x));
createArticle(baseApi, newArticle).then((x) => console.log(x));
patchArticle(baseApi, articleId, fixArticle).then((x) => console.log(x));
deleteArticle(baseApi, articleId);

/*
//articles test
const newArticle = {
  image: 'https://example.com/...',
  content: '게시글 내용입니까?',
  title: '게시글 제목입니까?',
};
const fixArticle = {
  image: 'https://example.com/...',
  content: '게시글 내용입니다!!!',
  title: '게시글 제목입니다!!!!!',
};
getArticleList(baseApi).then((x) => console.log(x));
getArticle(baseApi, 5516).then((x) => console.log(x));
createArticle(baseApi, newArticle).then((x) => console.log(x));
patchArticle(baseApi, 5523,fixArticle).then((x) => console.log(x));;
deleteArticle(baseApi, 5522);
getArticle(baseApi, 5522).then((x) => console.log(x));
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

//delete article
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
