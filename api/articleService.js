export const getArticleList = async ({ page, pageSize, keyword }) => {
  try {
    const params = new URLSearchParams({
      page,
      pageSize,
      ...(keyword&&{keyword:keyword}) , 
    });
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/articles?${params.toString()}`
    );
    if (!response.ok) {
      console.log(`getList - 정보를 불러올 수 없음. 상태코드 : ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`에러발생${error.message}`);
  }
};

// const articleQuery = {
//   page: 1,
//   pageSize: 10,
//   keyword: "", // 검색 안 할 땐 undefined
// };
// getArticleList(articleQuery);//잘나옴

export const getArticle = async ({ id }) => {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/articles/${id}`
    );
    if (!response.ok) {
      console.log(`get - 정보를 불러올 수 없음. 상태코드 : ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch(error) {
    console.log(`에러발생${error.message}`);
  }
};
// getArticle({id:5494}); //잘나옴!

export const createArticle = async ({ title, content, image }) => {
  try{
const response = await fetch(
    'https://panda-market-api-crud.vercel.app/articles',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        image,
      }),
    }
  );
  if (!response.ok) {
      console.log(`create - 정보를 불러올 수 없음. 상태코드 : ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log(data);
    return data;
  }catch{
    
  }
  

};

const patchArticle = async (articleId, patchData) => {
  try{
const response = await fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patchData),
    }
    
  );
  if(!response.ok){
      console.log(`patch - 정보를 불러올 수 없음. 상태코드 : ${response.status}`);
    }
  }catch{}

  const data = await response.json();
  console.log(data);
  return data;
};
export const deleteArticle = async ({articleId}) => {
  try{
const response = await fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
      },
    }
  );
  if(!response.ok){
       console.log(`delete - 정보를 불러올 수 없음. 상태코드 : ${response.status}`);
      return;
  }

  }catch(error){
    console.log(`에러발생${error.message}`);
  }
};


