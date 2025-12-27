import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './ArticleService.mjs';

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './ProductService.mjs';

//**함수 테스트** -> 터미널에 node.js 입력

//article 테스트 함수
const testArticle = async () => {
  try {
    console.log('--- 1. 목록 조회 테스트 ---');
    await getArticleList({
      page: 1,
      pageSize: 5,
      keyword: '',
    });

    console.log('--- 2. 글 생성 테스트 ---');
    const newArticle = await createArticle({
      title: '테스트용 글 제목 /김민성',
      content: '테스트용 글의 내용입니다. /김민성',
    });
    const testId = newArticle.id; //새로 생성한 글의 id

    console.log('--- 3. 상세 조회 테스트 ---');
    await getArticle(testId);

    console.log('--- 4. 상품 수정 테스트 ---');
    await patchArticle(testId, {
      title: '수정된 글 제목 /김민성',
      content: '수정된 글의 내용입니다. /김민성',
    });

    console.log('--- 5. 글 삭제 테스트 ---');
    await deleteArticle(testId);
    console.log('테스트 완료!');
  } catch (error) {
    console.error('테스트 중 오류 발생:', error.message);
  }
};

// 실행!
testArticle();

// product 테스트 함수
const testProduct = async () => {
  try {
    console.log('--- 1. 목록 조회 테스트 ---');
    await getProductList({ page: 1, pageSize: 5, keyword: '' });

    console.log('--- 2. 상품 생성 테스트 ---');
    const newProduct = await createProduct({
      name: '테스트용 상품 이름 /김민성',
      description: '테스트용 상품 설명입니다. /김민성',
      price: 12345,
      tags: [],
      images: [],
    });
    const testId = newProduct.id; //새로 생성한 상품의 id

    console.log('--- 3. 상세 조회 테스트 ---');
    await getProduct(testId);

    console.log('--- 4. 상품 수정 테스트 ---');
    await patchProduct(testId, {
      name: '수정된 상품 이름 /김민성',
      description: '수정한 상품 설명입니다. /김민성',
      price: 54321,
    });

    console.log('--- 5. 상품 삭제 테스트 ---');
    await deleteProduct(testId);
    console.log('테스트 완료!');
  } catch (error) {
    console.error('테스트 중 오류 발생:', error.message);
  }
};

// 실행!
testProduct();
