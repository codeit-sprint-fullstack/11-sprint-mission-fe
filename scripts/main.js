//fetch articles list test
const test = await fetch('https://panda-market-api-crud.vercel.app/articles');

const testresult = await test.json();

console.log(testresult);


//fetch products list test
const test2 = await fetch('https://panda-market-api-crud.vercel.app/products');

const testresult2 = await test2.json();

console.log(testresult2);
