const BASE_URL= 'https://panda-market-api.vercel.app'

export const getProductList = async({
  page = 1,
  pageSize= 4,
  orderBy= 'favorite'
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



  // const [products, setProducts] = useState([]);

  // useEffect(()=>{
  //   const getProductList = async()=>{
  //     const params = new URLSearchParams ({
  //       page : 1,
  //       pageSize : 4,
  //       orderBy: 'favorite',
  //   });

  //     try{
  //       const response = await fetch(
  //         `${BASE_URL}/products?${params.toString()}`
  //       );
  
  //       if(!response.ok){
  //         throw new Error(
  //           `HTTP ERROR!, status:${response.status}, text:${response.statusText}`
  //         );
  //       }
  
  //       const data = await response.json();
  //       setProducts(data);
  
  //     }catch(error){
  //       console.error(error);
  //       return error;
  //     }
  //   }
  //   getProductList();
  // })

