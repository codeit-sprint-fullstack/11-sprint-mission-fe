import styles from './MainSection.module.css';
import HotItemImg from '@/assets/hot-item.png'
import SearchImg from '@/assets/search.png'


function MainPage(){
  return(
    <>
{/* section 1 */}
    <section className={styles.SectionContainer}>
      <div className={styles.contentBox}>
        <img className={styles.imgs}src={HotItemImg}/>

        <div className={styles.content}>
          <p className={styles.pointWord}>
            Hot item
          </p>
          <p className={styles.bigPointWord}>
            인기상품을 <br/>확인해 보세요
          </p>
          <p>가장 HOT한 중고거래 물품을 <br/>판다마켓에서 확인해보세요</p>
        </div>
      </div>
    </section>
{/* section 2 */}
    <section className={styles.SectionContainer}>
      <div className={styles.reverseContentBox}>
        <img className={styles.imgs}src={SearchImg}/>
        <div className={styles.reverseContent}>
          <p className={styles.pointWord}>
            Search
          </p>
          <p className={styles.bigPointWord}>
            구매를 원하는 <br/>상품을 검색하세요
          </p>
          <p>구매하고 싶은 물품은 검색해서 <br/>쉽게 찾아보세요</p>
        </div>
      </div>
    </section>
{/* section 3 */}
    <section className={styles.SectionContainer}>
      <div className={styles.contentBox}>
        <img className={styles.imgs}src={HotItemImg}/>

        <div className={styles.content}>
          <p className={styles.pointWord}>
            Register
          </p>
          <p className={styles.bigPointWord}>
            판매를 원하는<br/> 상품을 등록하세요
          </p>
          <p>어떤 물건이든 판매하고 싶은 상품을<br/>쉽게 등록하세요</p>
        </div>
      </div>
    </section>
    <div className={styles.desktopMargin}/>

    </>
  )
}

export default MainPage;