import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

async function main() {
  console.log("--- 테스트를 시작합니다 ---");

  console.log("1. 아티클 목록 가져오는 중...");
  await getArticleList({ page: 1, pageSize: 5, keyword: "" });

  console.log("2. 새 글 작성 중...");
  const newArt = await createArticle({
    title: "테스트 글 제목 /박가연",
    content: "테스트 내용입니다.",
    image: "https://panda.com/image.jpg",
  });

  if (newArt) {
    console.log("새로 만든 글 ID: " + newArt.id);
    await getArticle(newArt.id);
    await patchArticle(newArt.id, { title: "수정한 제목" });
    await deleteArticle(newArt.id);
    console.log("아티클 테스트 끝!");
  }

  console.log("\n3. 상품 목록 가져오는 중...");
  await getProductList({ page: 1, pageSize: 5, keyword: "" });

  console.log("4. 새 상품 등록 중...");
  const newProd = await createProduct({
    name: "테스트 상품 /박가연",
    description: "설명입니다",
    price: 5000,
    tags: ["공부"],
    images: ["test.jpg"],
  });

  if (newProd) {
    console.log("새로 만든 상품 ID: " + newProd.id);
    await getProduct(newProd.id);
    await patchProduct(newProd.id, { price: 7000 });
    await deleteProduct(newProd.id);
    console.log("상품 테스트 끝!");
  }

  console.log("\n--- 모든 테스트가 종료되었습니다 ---");
}

main();
