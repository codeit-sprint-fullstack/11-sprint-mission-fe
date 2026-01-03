import styles from './ProductListItem.module.css';
import favoriteIcon from '../../assets/icon/ic_heart.svg'
export function ProductListItem({ item, imgWidth, imgHeight }) {

  const intl = new Intl.NumberFormat('ko-KR', { maximumSignificantDigits: 3 });
  return (
    <div className={styles.productContainer}>
      <img 
        src={item.images}
        alt={item.title}
        style={{ width: imgWidth, height: imgHeight }}
      />
      <h3>{item.name}</h3>
      <p className={styles.price}>{intl.format(item.price)}원</p>
      <p className={styles.favoriteCount}>
        <img src={favoriteIcon} alt='favoriteIcon' width="16"/>
          {item.favoriteCount}</p>
    </div>
  )
}
