import styles from './ProductList.module.css'
import { FiSearch } from "react-icons/fi";

function ProductList (){



  return(
    <>
      <div className={styles.searchContainer}>
        <h2>판매중인 상품</h2>

        <div className={styles.searchSection}>
          <div>
            <FiSearch className={styles.searchIcon}/>
            <input type='text' placeholder='상품을 입력해주세요'/>
          </div>

          <button className={styles.addItemBtn}>상품 등록하기</button>
          <button className={styles.toggleBtn}>최신순▼</button>

        </div>

      </div>
    </>
  )
}

export default ProductList