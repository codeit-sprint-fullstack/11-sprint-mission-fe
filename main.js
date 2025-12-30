import {
  creatArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from "./lib/apis/articleService.js";
import {
  getProductList,
  getProduct,
  creatProduct,
  patchProduct,
  deleteProduct,
} from "./lib/apis/productService.js";

const data = await getArticleList({
  pageSize: 2,
  page: 1,
  orderBy: "recent",
  keyword: "",
});

console.log(data);

const getArticleData = await getArticle(5524);

console.log(getArticleData);

const creatArticleData = await creatArticle({
  image: "https://example.com/...",
  content: "a",
  title: "b",
});

console.log(creatArticleData);

const patchArticleData = await patchArticle(5532, {
  image: "https://example.com/...",
  content: "수정함!!!",
  title: "수정 222",
});

console.log(patchArticleData);

const deleteArticleData = await deleteArticle(5524);

console.log(deleteArticleData);

////////////

const getProductListData = await getProductList({
  pageSize: 2,
  page: 1,
  orderBy: "recent",
  keyword: "",
});

console.log(getProductListData);

const getproductData = await getProduct(2939);

console.log(getproductData);

const creatProductData = await creatProduct({
  images: ["https://example.com/..."],
  tags: ["tv"],
  price: 0,
  description: "string",
  name: "상품 이름",
});

console.log(creatProductData);

const patchProductData = await patchProduct(2934, {
  images: ["https://example.com/..."],
  tags: ["에어컨", "선풍기", "세탁기"],
  price: 500,
  description: "상품설명 입니다. ",
  name: "123456",
});

console.log(patchProductData);

const deleteProductData = await deleteProduct(2937);

console.log(deleteProductData);
