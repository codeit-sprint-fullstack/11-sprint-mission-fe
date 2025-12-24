import { createArticle, deleteArticle, getArticle, getArticleList, patchArticle } from "./api/ArticleService.js"
import { createProduct, deleteProduct, getProduct, getProductList, patchProduct } from "./api/ProductService.js"

// //getProductList (GET) 실행
const productList = await getProductList(1)
console.log(productList)

// //GetProduct (GET) 실행
const product = await getProduct(55)
console.log(product)

// //createProduct (POST) 실행
const productData = {
  "images": [
    "https://example.com/..."
  ],
  "tags": [
    "전자제품"
  ],
  "price": 0,
  "description": "string",
  "name": "상품 이름"
}

const newProduct = await createProduct(productData)
console.log(newProduct)

// //patchProduct (PATCH) 실행
const updatedProduct = await patchProduct(2898,{
  "images": [
    "https://example.com/..."
  ],
  "tags": [
    "전자제품 수정"
  ],
  "price": 0,
  "description": "string",
  "name": "상품이름 수정"
})
console.log(updatedProduct)

// //deleteProduct (DELETE) 실행
const deletedProduct = await deleteProduct(2880);
  console.log('삭제 완료', deletedProduct);


// getArticleList (GET) 실행
getArticleList({page:2})

// getArticle (GET) 실행
getArticle(3567)

//createArticle (POST) 실행
const articleData = {
  "image": "https://example.com/...",
  "content": "게시글 내용입니다.",
  "title": "게시글 제목입니다."
}

createArticle(articleData)

//patchArticle (PATCH) 실행
const updateArticle = {
  "image": "https://example.com/...",
  "content": "게시글 내용 수정입니다.",
  "title": "게시글 제목 수정입니다."
}
patchArticle(2334,updateArticle)

//deleteArticle (DELETE) 실행
deleteArticle(2003)