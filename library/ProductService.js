const baseUrl = 'https://panda-market-api-crud.vercel.app';

//list get
export const getProductList = async({
  page = 1,
  pageSize = 10,
  keyword = '',
})=> {
  try{
    const response = await fetch(
      `${baseUrl}/products?page=${page}&pageSize=${pageSize}&orderBy=recent&keyword=${keyword}`
    );

  if(!response.ok){
    throw new Error(
      `HTTP ERROR!, status:${response.status}, text:${response.statusText}`
    );
  }  
  
  const data = await response.json();
  return data;
  }catch(error){
    console.error(error);
    return error;
  }
};

//id get
export const getProductId = async(id) =>{
  try{
    const response = await fetch(`${baseUrl}/products/${id}`);

    if(!response.ok){
      throw new Error(
        `HTTP ERROR!, status:${response.status}, text:${response.statusText}`
      )}

    const data = await response.json();
    return data;
  }catch(error){
    console.error(error);
    return error;
  }
};

//post
export const createProduct = async(productData)=>{
  try{
    const response = await fetch(`${baseUrl}/products`,{
      method:'POST',
      body: JSON.stringify(productData),
      headers:{
        'Content-Type': 'application/json'
      }
    });

    if(!response.ok){
      throw new Error(
        `HTTP ERROR!, status:${response.status}, text${response.statusText}`
      )};

    const data = await response.json();
    return data;
  }catch(error){
    console.error(error);
    return error;
  };
};

//patch
export const patchProduct = async(id,patchData)=>{
  try{
    const response = await fetch(`${baseUrl}/products/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(patchData),
      headers:{
        'Content-Type':'application/json'
      }
    });

    if(!response.ok){
      throw new Error(
        `HTTP ERROR!, status:${response.status}, text:${response.statusText}`
      )};

    const data = await response.json();
    return data;
  }catch(error){
    console.error(error);
    return error;
  }
};

//delete
export const deleteProduct = async(id)=>{
  try{
    const response = await fetch(`${baseUrl}/products/${id}`,{
      method: 'DELETE'
    });

    if(!response.ok){
      throw new Error(
        `HTTP ERROR!, status:${response.status}, text:${response.statusText}`
      )};

    const data = await response.json();
    return data;
  }catch(error){
    console.error(error);
    return error;
  }
};


