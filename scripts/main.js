//fetch articles list test(GET)
const getArticleList = function (
  page = 1,
  pageSize = 10,
  order = 'recent',
  keyword = ''
) {
  const result = fetch(
    `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`,
    { method: 'GET' }
  )
    .then((res) => res.json())
    .catch((e) => {
      console.error(e);
    });
  return result;
};

// getArticleList(6, 10).then(r => console.log(r));//test

/*
//get one article
const article1 = await fetch("https://panda-market-api-crud.vercel.app/articles/1583")

const artclresult1 = await article1.json();

console.log(artclresult1)

//create article(POST)
const articlePostData = {
  image: 'https://example.com/...',
  content: '게시글 내용입니다?',
  title: '게시글 제목입니다?',
};

const createArticle = await fetch(
  'https://panda-market-api-crud.vercel.app/articles',
  {
    method: 'POST',
    body: JSON.stringify(articlePostData),
    headers: { 'Content-Type': 'application/json' },
  }
);

console.log(createArticle);

//patch article
const articlePatchData = {
  image: 'https://example.com/...',
  content: '게시글 내용입니다!!!',
  title: '게시글 제목입니다!!!!!',
};

const patchArticle = await fetch(
  'https://panda-market-api-crud.vercel.app/articles/5415',
  {
    method: 'PATCH',
    body: JSON.stringify(articlePostData),
    headers: { 'Content-Type': 'application/json' },
  }
);

console.log(patchArticle);


//delete artiicle
const deleteArticle = await fetch(
  'https://panda-market-api-crud.vercel.app/articles/5414',
  {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }
);

console.log(deleteArticle);

const test = await fetch(
  'https://panda-market-api-crud.vercel.app/articles/5414'
);

const testresult = await test.json();

console.log(testresult);
//오류 처리 test
try {
  deleteArticle.ok;
  console.log('삭제되었습니다.');
} catch (error) {
  console.log('삭제 실패했습니다.', error);
}

*/

//fetch products list test
const getProductList = async function (
  page = 1,
  pageSize = 10,
  order = 'recent',
  keyword = ''
) {
  try {
    const fetchResult = await fetch(
      `https://panda-market-api-crud.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`
    );
    if (!fetchResult.ok) {
      throw new Error(`HTTP error: ${fetchResult.status}`);
    }
    const pdResult = await fetchResult.json();
    return pdResult;
  } catch (e) {
    console.log(e);
  }
};
// getProductList().then(r => console.log(r));//test
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
