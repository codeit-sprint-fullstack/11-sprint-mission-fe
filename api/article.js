const getArticleList = async () => {
  const response = await fetch(
    'https://panda-market-api-crud.vercel.app/articles?page=1&pageSize=10&keyword=""'
  );
  const data = await response.json();
  console.log(data);
  //return data;
};

export const getArticle = async () => {
  const response = await fetch(
    'https://panda-market-api-crud.vercel.app/articles'
  );
  const data = await response.json();
  console.log(data);
};

const createArticle = async ({ title, content, image }) => {
  const response = await fetch(
    'https://panda-market-api-crud.vercel.app/articles',
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        image,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

createArticle(req);