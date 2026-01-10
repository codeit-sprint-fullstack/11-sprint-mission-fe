import styles from './ItemCard.module.css';
import { formatNumberKorean } from '@/utils/numberFormatter';

export function ItemCard({ item }) {
  return(<div className={styles.itemCard}>
      <img src={item.images[0]} alt={item.name} className={styles.itemCardThumbnail} />
      <div className={styles.itemSummary}>
        <h2 className={styles.itemName}>{item.name}</h2>
        <p className={styles.itemPrice}>{formatNumberKorean(item.price)}원</p>
        <div className={styles.favoriteCount}>
          {item.favoriteCount}
        </div>
      </div>
    </div>

  )
}