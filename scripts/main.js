//fetch articles list test(GET)
// const test = await fetch('https://panda-market-api-crud.vercel.app/articles');

// const testresult = await test.json();

// console.log(testresult);


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

//fetch products list test
/*
const test2 = await fetch('https://panda-market-api-crud.vercel.app/products');

const testresult2 = await test2.json();

console.log(testresult2);
*/
