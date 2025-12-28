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

// Article 테스트
getArticleList({ page: 1, pageSize: 5 })
  .then(data => {
    console.log('Article List:', data);
    const firstId = data.list[0].id;
    return getArticle(firstId);
  })
  .then(detail => console.log('Article Detail:', detail));

// getArticleList({ page: 1, pageSize: 5 })
//   .then(data => console.log('Article List:', data));

// getArticle(1)
//   .then(data => console.log('Article Detail:', data));

// Product 테스트
(async () => {
  const products = await getProductList({ page: 1, pageSize: 5 });
  console.log('Product List:', products);

  const firstProductId = products.list[0].id;
  const product = await getProduct(firstProductId);
  console.log('Product Detail:', product);
})();


// (async () => {
//   const products = await getProductList({ page: 1, pageSize: 5 });
//   console.log('Product List:', products);

//   const product = await getProduct(1);
//   console.log('Product Detail:', product);
// })();
