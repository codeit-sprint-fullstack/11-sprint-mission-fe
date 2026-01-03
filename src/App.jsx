/*main.js의 내용을 옮겨 옴
import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from './ArticleService.js';

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductList,
  patchProduct,
} from './ProductService.js';


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
getArticleList().then((x) => console.log(x));
getArticle(5516).then((x) => console.log(x));
createArticle( newArticle).then((x) => console.log(x));
patchArticle( 5523,fixArticle).then((x) => console.log(x));;
deleteArticle( 5522);
getArticle( 5522).then((x) => console.log(x));

//products test
const newProduct = {
  images: ['https://example.com/...'],
  tags: ['학용품'],
  price: 30000,
  description: 'string',
  name: '고급 샤프',
};
const fixProduct = {
  images: ['https://example.com/...'],
  tags: ['학용품'],
  price: 3000,
  description: 'string',
  name: '샤프',
};

getProductList().then((r) => console.log(r)); //test
getProduct(1800).then((r) => console.log(r)); //test
createProduct(newProduct).then((r) => console.log(r)); //test
patchProduct( 2940, fixProduct).then((r) => console.log(r)); //test
// delete 확인
deleteProduct(2940).then((r) => console.log(r));//test
getProduct( 2938).then((r) => console.log(r)); //test
*/