import styles from './BestItem.module.css';
import { FaRegHeart } from "react-icons/fa";


function BestItem(){
  return(
    <div className={styles.bestItemGrid}>
      <li className={styles.bestItemContainer}>
        <img className={styles.bestItemImg}src={''} alt="상품이미지"/>

        <div className={styles.postInfo}>
          <a>판매글 제목</a>
          <a className={styles.price}>가격</a>
      
          <div>
          <FaRegHeart /> 340
          </div>
        </div>
      </li>

            <li className={styles.bestItemContainer}>
        <img className={styles.bestItemImg}src={''} alt="상품이미지"/>

        <div className={styles.postInfo}>
          <a>판매글 제목</a>
          <a className={styles.price}>가격</a>
      
          <div>
          <FaRegHeart /> 340
          </div>
        </div>
      </li>

            <li className={styles.bestItemContainer}>
        <img className={styles.bestItemImg}src={''} alt="상품이미지"/>

        <div className={styles.postInfo}>
          <a>판매글 제목</a>
          <a className={styles.price}>가격</a>
      
          <div>
          <FaRegHeart /> 340
          </div>
        </div>
      </li>

            <li className={styles.bestItemContainer}>
        <img className={styles.bestItemImg}src={''} alt="상품이미지"/>

        <div className={styles.postInfo}>
          <a>판매글 제목</a>
          <a className={styles.price}>가격</a>
      
          <div>
          <FaRegHeart /> 340
          </div>
        </div>
      </li>
    </div>
  )
}

export default BestItem;