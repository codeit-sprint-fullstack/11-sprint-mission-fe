import { createProduct, deleteProduct, getProduct, getProductList, patchProduct } from "./api/ProductService.mjs"

//getProductList (GET) 실행
const productList = await getProductList(1)
console.log(productList)

//GetProduct (GET) 실행
const product = await getProduct(55)
console.log(product)

//createProduct (POST) 실행
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

//patchProduct (PATCH) 실행
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

//deleteProduct (DELETE) 실행
const deletedProduct = await deleteProduct(2898);
  console.log('삭제 완료', deletedProduct);


