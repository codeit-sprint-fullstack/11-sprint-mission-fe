const BASE_URL= 'https://panda-market-api.vercel.app'

export const getProductList = async({
  page = 1,
  pageSize= 10,
  orderBy= 'recent'
})=>{
  try{
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
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
}



