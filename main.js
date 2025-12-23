import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './lib/ArticleService.mjs';

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './lib/ProductService.mjs';

// article 실행코드

// 게시글 목록 조회
/* getArticleList(1, 10, '')
   .then(data => console.log('Article List', data)); */

// 게시글 상세 조회
/* getArticle(5375)
   .then(data => console.log('Article', data)); */

// 게시글 생성
/* createArticle(
  {
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',
    image: 'https://example.com/...',
  })
  .then(data => console.log('Created Article', data)); */

// 게시글 수정
/* patchArticle(5387, {title:'게시글 제목입니다'})
  .then(data => console.log('Updated Article', data)); */

// 게시글 삭제
/* deleteArticle(5387)
  .then(data => console.log('Deleted Article', data)); */

// product 실행코드

// 상품 목록 조회
/* getProductList(1, 10, '')
.then(data => console.log('Product List', data)); */

// 상품 상세 조회
/* getProduct(2848)
.then(data => console.log('Product', data)); */

// 상품 생성
/* createProduct(
  {
  name: '상품이름',
  description: 'string',
  price: 0,
  tags: [],
  images: [],
})
  .then(data => console.log('Created Product', data)); */

// 상품 수정
/* patchProduct(2861, {name: '상품명'})
  .then(data => console.log('Updated Product', data)); */

// 상품 삭제
/* deleteProduct(2861)
  .then(data => console.log('Deleted Product', data)); */
