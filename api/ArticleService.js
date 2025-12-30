
//게시글 목록조회 (GET)
const BASE_URL = 'https://panda-market-api-crud.vercel.app';

export const getArticleList = ({
page = 1,
pageSize = 10,
orderBy = 'recent',
keyword = '',
} = {}) => {
return fetch(
  `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
)
.then((response) => {
if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}
return response.json()
})
.then((data) => console.log(data))
.catch((error)=> {
  console.error(error);
throw error;
})
}

//게시글 상세 조회 (GET)
export const getArticle = (articleId) => {
return fetch(
  `${BASE_URL}/articles/${articleId}`
)
.then((response) => {
if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}
return response.json()
})
.then((data) => console.log(data))
.catch((error)=> {
  console.error(error);
throw error;
})
}

// 게시글 등록 (POST)
export const createArticle = (articleData) => {
return fetch(
  `${BASE_URL}/articles`, 
  {
method: 'POST',
body: JSON.stringify(articleData),
headers: {
'content-type': 'application/json',
},
}
)
.then((response) => {
if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}
return response.json()
})
.then((data) => console.log(data))
.catch((error)=> {
  console.error(error);
throw error;
})
}

//게시글 수정 (PATCH)
export const patchArticle = (articleId,articleData) => {
return fetch(
  `${BASE_URL}/articles/${articleId}`, 
  {
method: 'PATCH',
body: JSON.stringify(articleData),
headers: {
'content-type': 'application/json',
},
}
)
.then((response) => {
if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}
return response.json()
})
.then((data) => console.log(data))
.catch((error)=> {
  console.error(error);
throw error;
})
}

//게시글 삭제 (DELETE)
export const deleteArticle = (articleId) => {
return fetch(
  `${BASE_URL}/articles/${articleId}`, 
  {
method: 'DELETE',
}
)
.then((response) => {
if (!response.ok) {
  throw new Error(
    `HTTP ERROR, status: ${response.status}, text: ${response.statusText}`
  );
}
return response.json()
})
.then((data) => console.log('삭제 완료',data))
.catch((error)=> {
  console.error(error);
throw error;
})
}



