import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './services/ArticleService.js';

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './services/ProductService.js';


getArticleList(1, 5, '').then((data) => console.log('Article List:', data));

getArticle(1).then((data) => console.log('Article Detail:', data));

createArticle({
  title: '테스트 게시글',
  content: '게시글 내용입니다.',
  image: 'https://via.placeholder.com/150',
}).then((data) => console.log('Created Article:', data));


(async () => {
  const products = await getProductList(1, 5, '');
  console.log('Product List:', products);

  const product = await getProduct(1);
  console.log('Product Detail:', product);

  const newProduct = await createProduct({
    name: '테스트 상품',
    description: '상품 설명',
    price: 10000,
    tags: ['test'],
    images: ['https://via.placeholder.com/150'],
  });
  console.log('Created Product:', newProduct);
})();

// terminal에서 ID 조회 부분과 상품 조회 부분에서 404 에러 나는 것 확인됨. 다음 미션에서 알려주지 않을까 싶습니당..