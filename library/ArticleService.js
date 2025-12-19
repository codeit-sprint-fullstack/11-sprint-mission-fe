
//list get
export const getArticleList = ({
  page = 1,
  pageSize = 10,
  keyword = '',
}) => {
  return fetch(
    `${baseUrl}/articles?page=${page}&pageSize=${pageSize}&orderBy=recent&keyword=${keyword}`
  )
  .then(response=>{
    if(!response.ok){
      throw new Error(
        `HTTP ERROR, status:${response.status}, text${response.statusText}`
      );
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(error =>{
    console.error(error);
    return error;
  })
};

//id get
export const getArticleId = (id)=>{
  return fetch(
    `${baseUrl}/articles/${id}`   
  )
  .then(response=>{
    if(!response.ok){
      `HTTP ERROR! status:${response.status}, text${response.statusText}`
    }
    
  return response.json();
  })
  .then(data =>{
    return data;
  })
  .catch(error=>{
    console.error(error);
    return error;
  });  
};

//create post
export const createArticle=(articleData)=>{
  return fetch (`${baseUrl}/articles`, {
    method: 'POST',
    body: JSON.stringify(articleData),
    headers:{
      'Content-Type': 'application/json',
    }
  })
  .then(response=>{
    if(!response.ok){
      throw new Error(`HTTP ERROR!, status:${response.status}, text:${response.statustext}`)
    }
    return response.json();
  })
  .then(data=>{
    return data;
  })
  .catch(error =>{
    console.error(error);
    return error;
  })
}

//patch 
export const patchArticle = (id,patchData) =>{
  return fetch(`${baseUrl}/articles/${id}`, {
    method:'PATCH',
    body: JSON.stringify(patchData),
    headers:{
      'Content-Type': 'application/json',
    }
  })
  .then(response=>{
    if(!response.ok){
      throw new Error(
        `HTTP ERROR!, status:${response.status}, text:${response.statusText}`
      )}
    return response.json();
  })
  .then(data=>{
    return data;
  })
  .catch(error=>{
    console.error(error);
    return error;
  })
};

//delete
export const deleteArticle =(id)=>{
  return fetch(`${baseUrl}/articles/${id}`,{
    method: 'DELETE',
  })
  .then(response=>{
    if(!response.ok){
      throw new Error(
        `HTTP ERROR!, status:${response.status}, text:${response.statusText}`
      )}
    return response.json();
  })
  .then(data=>{
    return data;
  })
  .catch(error=>{
    console.error(error);
    return error;
  })
};


