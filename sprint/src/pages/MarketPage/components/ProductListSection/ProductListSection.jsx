import styles from './ProductListSection.module.css';
import { IoSearch } from "react-icons/io5";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";


function ProductListSection (){
  return(
    <div className={styles.ProductListContainer}>
      <div className={styles.ListNav}>
        <p className={styles.navTitle}>판매 중인 상품</p>

        <div className={styles.searchContent}>
          <IoSearch className={styles.searchIcon}/>
          <input 
            className={styles.searchInput} 
            type="text" 
            placeholder="검색할 상품을 입력해주세요"/>

          <button className={styles.addBtn}>상품 등록하기</button>
          
          <div className={styles.dropDownContainer}>
            <div className={styles.dropDown}>
              <button className={styles.dropDownBtn}>
                최신순
                <BsCaretDownFill />
                {/* <BsCaretUpFill /> */}
              </button>
            </div>

            <ul className={styles.dropDownList}>
              <li >
                <button className={styles.dropDownNew}>
                  최신순
                </button>
              </li>
              <li>
                <button className={styles.dropDownLike}>
                  좋아요순
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>




{/*  */}
      {/* <ProductList />
      
      <pagination /> */}
    </div>
    
  )
}

export default ProductListSection;