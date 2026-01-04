import styles from './ProductListSection.module.css'
import { FiSearch } from "react-icons/fi";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import ProductList from './ProductList';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const DELAY = 500;

function ProductListSection (){
  const [orderBy, setOrderBy]= useState('recent');
  const [isOpen, setIsOpen]= useState(false);
  const [keyword, setKeyword] = useState('');

  const handleOrderBy = (orderBy)=>{
    setOrderBy(orderBy);
    setIsOpen(false);
  }
  const handleIsOpen=()=>{
    setIsOpen(!isOpen);
  }
  const handleChange= useDebouncedCallback((e)=>{
    const value = e.target.value;
    setKeyword(value); 
  },DELAY);


  return(
    <>
      <div className={styles.searchContainer}>
        <p>판매중인 상품</p>

        <div className={styles.searchSection}>
          {/* 검색창 */}
          <div>
            <FiSearch className={styles.searchIcon}/>
            <input 
              name="search"
              type='text' 
              placeholder='상품을 입력해주세요'
              defaultValue={keyword}
              onChange={handleChange}
              />
          </div>
  


          {/* 상품등록 */}
          <a className={styles.addItemBtn}>상품 등록하기</a>

          {/* drop down menu */}
          <div className={styles.dropDownMenu}>
            <button 
              onClick={handleIsOpen}
              type="button" 
              className={styles.toggleBtn}>
              {orderBy === 'recent' ? "최신순" : "좋아요순"}
              {isOpen ? <BsCaretUpFill /> : <BsCaretDownFill />}
          </button>

          {isOpen ? (
            <ul className={styles.dropDownList}>
              <li>
                <button
                  onClick={()=>{handleOrderBy('recent')}} 
                  className={styles.dropDownNew}
                  >
                    최신순
                  </button>
                </li>
              <li>
                <button 
                  onClick={()=>{handleOrderBy('favorite')}}
                  className={styles.dropDownLike}
                >
                좋아요순</button>
              </li>
            </ul>
          ) : null}
            </div>
          </div>
      </div>

    <ProductList orderBy={orderBy} keyword={keyword}/>
    </>
  )
}

export default ProductListSection

//리스트 섹션