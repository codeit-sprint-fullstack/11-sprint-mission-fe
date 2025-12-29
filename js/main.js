import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './ArticleService.js';
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './ProductService.js';

getArticleList()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
getArticle(5509)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const articleTestData = {
  title: '테스트 제목',
  content: '내용',
};

function testArticle(data) {
  createArticle(data)
    .then((article) => {
      console.log(article);
      return patchArticle(article.id, { image: 'https://example.com/...' });
    })
    .then((patched) => {
      console.log(patched);
      return deleteArticle(patched.id);
    })
    .then((deleted) => console.log(deleted))
    .catch((error) => console.error(error));
}

testArticle(articleTestData);

async function printProduct(func) {
  try {
    const data = await func;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

printProduct(getProductList());
printProduct(getProduct(2918));

const productTestData = {
  name: '테스트 상품',
  description: '상품 설명',
};

async function testProduct(data) {
  try {
    const product = await createProduct(data);
    console.log(product);

    const patched = await patchProduct(product.id, { price: 10000 });
    console.log(patched);

    const deleted = await deleteProduct(product.id);
    console.log(deleted);
  } catch (error) {
    console.error(error);
  }
}

testProduct(productTestData);
