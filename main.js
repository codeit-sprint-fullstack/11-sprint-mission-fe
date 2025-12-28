import { articleService } from './lib/api/articleService.js';
// import { productService } from './lib/api/productService.js';

const articleData = {
  image: 'https://example.com/...',
  content: '게시글 내용입니다.',
  title: '게시글 제목입니다.',
};

const productData = {
  images: ['https://example.com/...'],
  tags: ['전자제품'],
  price: 0,
  description: 'string',
  name: '상품 이름',
};

const articles = await articleService.createArticle(articleData);
console.log(articles);

// const products = await productService.getProductList();
// console.log(products);
