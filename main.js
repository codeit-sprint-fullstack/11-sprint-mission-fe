// [ ]  이외의 코드들은 모두 main.js 파일에 작성해 주세요.

// [ ] import를 활용해 주세요.
// [ ] 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.

import * as ArticleService from './ArticleService.js';
import * as ProductService from './ProductService.js';

// ArticleService 테스트
console.log('=== Article 테스트 시작 ===');
ArticleService.getArticleList(1, 5, '');

// ProductService 테스트
async function testProductApp() {
  console.log('\n=== Product 테스트 시작 (잠시 대기 후 실행됨) ===');

  // 1. 상품 등록
  console.log('1. 상품 등록 중...');
  await ProductService.createProduct(
    '게이밍 마우스',
    '감도가 좋은 마우스입니다.',
    55000,
    ['전자제품', '컴퓨터'],
    [
      'https://i.namu.wiki/i/Zm3lVHLtxu0aU3GIe1yQNKuckMxF_5ROQz9RE0Rv9kQcPY_r7j0a7xCD5dV08dyxSFoMfqC82tqYLLfh5cyABbdAzH-mFYPp9BG0PnMapc9L7gLCwbyG4kcCLs12mT_Wz8J9PT60nUmIj1Y14u1xpA.webp',
    ] // 마우스 예시이미지(위키 이미지 주소복사)
  );

  // 2. 상품 목록 조회
  console.log('2. 상품 목록 조회 중...');
  await ProductService.getProductList(1, 10, '');

  // 3. 상품 상세 조회
  const myId = '2864';
  await ProductService.getProduct(myId);

  // 4. 상품 수정
  await ProductService.patchProduct(myId, { price: 49000 });

  // 5. 상품 삭제
  await ProductService.deleteProduct(myId);
}

// 2초 뒤에 Product 테스트 실행 (Article 로그랑 섞임 방지)
setTimeout(testProductApp, 2000);
