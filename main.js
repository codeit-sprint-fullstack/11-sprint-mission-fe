import { productService } from "./ProductService.js";
import { articleService } from "./ArticleService.js";

// prodictService 테스트
// 상품 목록 조회
/* productService
  .getProductList({ page: 1, pageSize: 12 })
  .then((data) => {
    console.log("상품 목록", data);
  })
  .catch((error) => {
    console.error("상품 목록 조회 실패", error);
  }); */

// 상품 조회
productService
  .getProduct(2936)
  .then((data) => {
    console.log("상품 조회", data);
  })
  .catch((error) => {
    console.error("상품 조회 실패", error);
  });

// 상품 생성
/* productService
  .createProduct({
    image: "https://example.com/...",
    tags: "전자제품",
    price: 0,
    description: "string",
    name: "상품 이름",
  })
  .then((data) => {
    console.log("상품 생성 완료", data);
  })
  .catch((error) => {
    console.error("상품 생성 실패", error);
  }); */

// 상품 수정
/* productService
  .patchProduct(2936, {price: 10, name: '수정된 이름'})
  .then((data) => {
    console.log("상품 수정 완료", data);
  })
  .catch((error) => {
    console.error("상품 수정 실패", error);
  }); */

// 상품 삭제
/* productService
  .deleteProduct(2936)
  .then((data) => {
    console.log("상품 삭제 완료", data);
  })
  .catch((error) => {
    console.error("상품 삭제 실패", error);
  }); */

// ==========
// articleService 테스트
// 게시글 목록 조회
/* articleService
  .getArticleList({ page: 1, pageSize: 10 })
  .then((data) => {
    console.log("게시글 목록", data);
  })
  .catch((error) => {
    console.error("게시글 목록 조회 실패", error);
  }); */

// 게시글 조회
articleService
  .getArticle(5537)
  .then((data) => {
    console.log("게시글 조회", data);
  })
  .catch((error) => {
    console.error("게시글 조회 실패", error);
  });

// 게시글 생성
/* articleService
  .createArticle({
    image: "https://example.com/...",
    content: "게시글 내용입니다.",
    title: "게시글 제목입니다.",
  })
  .then((data) => {
    console.log("게시글 생성 완료", data);
  })
  .catch((error) => {
    console.error("게시글 생성 실패", error);
  }); */

// 게시글 수정
/* articleService
  .patchArticle(5537, {
    content: "수정된 내용입니다.",
    title: "수정된 제목입니다.",
  })
  .then((data) => {
    console.log("게시글 수정 완료", data);
  })
  .catch((error) => {
    console.error("게시글 수정 실패", error);
  }); */

// 게시글 삭제
/* articleService
  .deleteArticle(5537)
  .then((data) => {
    console.log("게시글 삭제 완료", data);
  })
  .catch((error) => {
    console.error("게시글 삭제 실패", error);
  }); */
