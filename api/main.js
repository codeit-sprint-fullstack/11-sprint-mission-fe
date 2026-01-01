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

const testArticle = async () => {
  console.log('게시글 테스트');

  try {
    console.log('getArticleList');
    const articleList = await getArticleList({ page: 1, pageSize: 5 });
    console.log('글 목록:', articleList);

    console.log('getArticle');
    const article = await getArticle(5516);
    console.log('5516 글:', article);

    console.log('createArticle');
    const newArticle = await createArticle({
      title: '으아아아아아',
      content: '다섯번?..',
      image: 'https://example.com/',
    });
    console.log('새로 만든 게시글:', newArticle);

    const createdArticleId = newArticle.id;

    console.log('patchArticle');
    const update = {
      title: '크리스마스',
      content: 'ㅠㅠ',
      image: 'https://example.com/',
    };
    const updatedArticle = await patchArticle(createdArticleId, update);
    console.log('수정된 Article:', updatedArticle);

    console.log('deleteArticle');
    const deleteResult = await deleteArticle(createdArticleId);
    console.log('게시글 삭제:', deleteResult);
  } catch (error) {
    console.error('게시글 테스트 에러:', error);
  }
};
// testArticle();

const testProduct = async () => {
  console.log('제품 테스트');

  try {
    console.log('getProductList');
    const productList = await getProductList({
      page: 1,
      pageSize: 2,
      keyword: '',
    });
    console.log('상품 목록:', productList);

    console.log('getProduct');
    if (productList.length > 0) {
      const sampleProduct = await getProduct(productList[0].id);
      console.log('상품 상세 조회 결과:', sampleProduct);
    } else {
      console.log('상품 없음');
    }

    console.log('createProduct');
    const newProduct = await createProduct({
      name: '이것',
      description: '이거',
      price: 20000,
      tags: ['ㅇㅇ'],
      images: ['https://example.com/'],
    });
    console.log('상품 등록 결과:', newProduct);

    const createdProductId = newProduct.id;

    console.log('patchProduct');
    const productUpdate = {
      name: '저것',
      price: 10000,
      description: '저거',
      tags: ['ㅈㅈ'],
    };
    const updatedProduct = await patchProduct(createdProductId, productUpdate);
    console.log('상품 수정:', updatedProduct);

    console.log('deleteProduct');
    const deleteProductResult = await deleteProduct(createdProductId);
    console.log('상품 삭제 결과:', deleteProductResult);
  } catch (error) {
    console.error('제품 테스트 에러:', error);
  }
};

const allTest = async () => {
  await testArticle();
  await testProduct();

  console.log('끝');
};

allTest();

// const myphonenum = async () => {
//   try {
//     const updated = await patchArticle(2468, {
//       title: '적었다가',
//       content: '지웠습니다.',
//     });

//     console.log('nice');
//   } catch (e) {
//     if (e.response) {
//       console.log('fail:', e.response.status, e.response.data);
//     } else {
//       console.log('noLoad');
//     }
//   }
// };
// myphonenum();

// import를 활용해 주세요.
// 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.
