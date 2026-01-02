import * as ArticleService from './ArticleService.js';
import * as ProductService from './ProductService.js';

// 1. Article 목록 가져오기 테스트 (.then 사용)
ArticleService.getArticleList(1, 5)
  .then(data => console.log('Article 목록:', data));

// 2. Product 생성 테스트 (async/await 사용)
async function testProduct() {
  const newProduct = {
    name: "맛있는 사과",
    description: "진짜 맛나요",
    price: 5000,
    tags: ["과일", "신선"],
    images: ["https://example.com/apple.jpg"]
  };
  
  const result = await ProductService.createProduct(newProduct);
  console.log('생성된 상품:', result);
}

testProduct();