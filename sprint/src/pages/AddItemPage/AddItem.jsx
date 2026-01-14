import Footer from '@/components/Footer/Footer';
import ItmesHeader from '@/components/ItmesHeader/MarketHeader';
import styles from './AddItem.module.css';

function AddItem (){
  return(
    <>
      <ItmesHeader/>

      <div className={styles.inputContainer}>
        <div className={styles.AddNev}>
          <h2>상품 등록하기</h2>
          <button className={styles.addBtn}>등록</button>
        </div>

        <div className={styles.inputBox}>
          <h2>상품명</h2>
          <input className={styles.itemName} type='text' placeholder='상품명을 입력해주세요'/>

          <h2>상품 소개</h2>
          <input className={styles.itemContent} type='text' placeholder='상품 소개를 입력해주세요'/>

          <h2>판매가격</h2>
          <input className={styles.price} type='text' placeholder='판매 가격을 입력해주세요'/>

          <h2>태그</h2>
          <input className={styles.tags}type='text' placeholder='태그를 입력해주세요 '/>

          <button/>



        </div>

      </div>

      <Footer />
    </>
  )
}

export default AddItem;