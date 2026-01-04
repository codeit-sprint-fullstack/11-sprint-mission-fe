
import { useEffect, useState } from 'react';
import styles from './BestItemLIst.module.css';
import { FaRegHeart } from "react-icons/fa";


function BestItemList(){
  const BASE_URL= 'https://panda-market-api.vercel.app'
  const [products, setProducts] = useState([]);

  //한국 원화로 포맷팅
  const priceFormat = new Intl.NumberFormat('ko-KR', { maximumSignificantDigits: 3 });

  useEffect(()=>{
    const params = new URLSearchParams ({
      page : 1,
      pageSize : 4,
      orderBy: 'favorite',
    });
    
    const getProductList = async()=>{
        const response = await fetch(
          `${BASE_URL}/products?${params.toString()}`
        );
        const data = await response.json();
        setProducts(data.list);
      };
      getProductList();
    },[]);
  
    return(
      <>
        <h2>베스트 상품</h2>
        <ul className={styles.bestItemGrid}>
          {products.map((prev)=>{
            return(
              <li key={prev.id} className={styles.bestItembox}>        
                <img className={styles.bestItemImg} src={prev.images} alt="상품이미지"/>
    
                <div className={styles.postInfo}>
                  <h2>{prev.name}</h2>
                  <span className={styles.price}>{priceFormat.format(prev.price)}원</span>
              
                  <div className={styles.likePart}>
                    <FaRegHeart />{prev.favoriteCount}
                  </div>
                </div>
              </li>          
            );
          })}
        </ul>
      </>
    );
  }
  
  export default BestItemList;

  
  
      



