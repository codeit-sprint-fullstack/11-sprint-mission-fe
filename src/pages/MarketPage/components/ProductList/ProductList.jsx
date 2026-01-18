
// import { useEffect, useState } from 'react';
// import styles from './ProductList.module.css';
// import { FaRegHeart } from "react-icons/fa";
// import { getProductList } from '@/api/postList';


// function ProductList({orderBy, keyword}){
//   const BASE_URL= 'https://panda-market-api.vercel.app'
//   const [products, setProducts] = useState([]);

//   //한국 원화로 포맷팅
//   const priceFormat = new Intl.NumberFormat('ko-KR', { maximumSignificantDigits: 3 });

//   useEffect(()=>{
//     const params = new URLSearchParams ({
//       page : 1,
//       pageSize : 10,
//       orderBy,
//       keyword,
//     });
    
//     const getProductList = async()=>{
//         const response = await fetch(
//           `${BASE_URL}/products?${params.toString()}`
//         );
//         const data = await response.json();
//         setProducts(data.list);
//       };
//       getProductList();
//     },[orderBy, keyword]);
  
//     return(
//       <>
//         <ul className={styles.productGrid}>
//           {products.map((prev)=>{
//             return(
//               <li key={prev.id} className={styles.productItemContainer}>        
//                 <img className={styles.productItemImg} src={prev.images} alt="상품이미지"/>
    
//                 <div className={styles.postInfo}>
//                   <h2>{prev.name}</h2>
//                   <span className={styles.price}>{priceFormat.format(prev.price)}원</span>
              
//                   <div className={styles.likePart}>
//                     <FaRegHeart />{prev.favoriteCount}
//                   </div>
//                 </div>
//               </li>          

//             );
//           })}
    
//         </ul>
//       </>
//     );
//   }
  
//   export default ProductList;
//       //리스트



