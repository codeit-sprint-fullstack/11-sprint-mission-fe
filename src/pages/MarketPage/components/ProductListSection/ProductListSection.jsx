import styles from './ProductListSection.module.css';
import { IoSearch } from 'react-icons/io5';
import { BsCaretDownFill } from 'react-icons/bs';
import { BsCaretUpFill } from 'react-icons/bs';
import { Link } from 'react-router';
import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useEffect } from 'react';

function ProductListSection({ orderBy, keyword }) {
  const BASE_URL = '';
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProduct] = useState([]);

  //한국 원화 설정
  const priceFormat = new Intl.NumberFormat('ko-KR', {
    maximumSignificantDigits: 3,
  });

  useEffect(() => {
    const params = new URLSearchParams({
      page: 1,
      pageSize: 10,
    });

    if (orderBy) params.append('orderBy', orderBy);
    if (keyword) params.append('keyword', keyword);

    const getProductList = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/products?${params.toString()}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.list);
      } catch (error) {
        console.error('Failed to fetch product list', error);
      }
    };
    getProductList();
  }, [orderBy, keyword]);

  return (
    <div className={styles.ProductListContainer}>
      <div className={styles.ListNav}>
        <p className={styles.navTitle}>판매 중인 상품</p>

        <div className={styles.searchContent}>
          <IoSearch className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          />

          <Link to="/registration" className={styles.addBtn}>
            상품 등록하기
          </Link>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className={styles.dropDownContainer}
          >
            <div className={styles.dropDown}>
              <button className={styles.dropDownBtn}>
                최신순
                {isOpen ? <BsCaretDownFill /> : <BsCaretUpFill />}
              </button>
            </div>
            {isOpen && (
              <ul className={styles.dropDownList}>
                <li>
                  <button className={styles.dropDownNew}>최신순</button>
                </li>
                <li>
                  <button className={styles.dropDownLike}>좋아요순</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <ul className={styles.listContainer}>
        {products.map((prev) => {
          <li key={prev.id}>
            <img
              className={styles.itemImg}
              src={prev.images}
              alt="상품이미지"
            />
            <div className={styles.itemcontent}>
              <h2>{prev.name}</h2>
              <span className={styles.price}>
                {priceFormat.format(prev.price)}
              </span>
              <div className={styles.like}>
                <FaRegHeart className={styles.likeBtn} />
                {prev.favoriteCount}
              </div>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default ProductListSection;
