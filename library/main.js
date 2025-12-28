import {
  getArticleList, 
  getArticleId, 
  createArticle, 
  patchArticle, 
  deleteArticle 
} from './ArticleService.js';

import {
  getProductList,
  getProductId,
  createProduct,
  patchProduct,
  deleteProduct
} from './ProductService.js'

//article 호출s
//list
const articles = await getArticleList({});
console.log(articles);

//id
// const articlesId = await getArticleId(5416);
// console.log(articlesId);  

//post
// const articleData = {
//   "image": "https://example.com/...",
//   "content": "게시글 내용",
//   "title": "게시글 제목"
// };
// const data = await createArticle(articleData);
// console.log(data);

//patch
// const patchData = {
//   "image": "https://example.com/...",
//   "content": "안녕하세요",
//   "title": "hello world."
// };
// const data = await patchArticle(5416, patchData);
// console.log(data); 

//delete
// const deleteArticleId = await deleteArticle(5416);
// console.log(deleteArticleId); 

console.log('------------------');

//product 호출s
//list
const product = await getProductList({});
console.log(product);

//id
// const productId = await getProductId (2875);
// console.log(productId);

//post
// const productData = await createProduct({
//   "images": ["https://example.com/..."],
//   "tags": ["전자제품"],
//   "price": 0,
//   "description": "string",
//   "name": "상품 이름"
// });
// console.log(productData);

//patch
// const patchData = await patchProduct(2891,{
//   "images": ["https://example.com/..."],
//   "tags": ["human"],
//   "price": 100000000,
//   "description": "string",
//   "name": "zoe"  
// });
// console.log(patchData);

//delete
// const deleteData = await deleteProduct(2891);
// console.log(deleteData);