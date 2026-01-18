import styles from './ItemCard.module.css';
import { formatNumberKorean } from '@/utils/numberFormatter';
import itemDefault from '@/assets/images/default/item_default.svg'

export function ItemCard({ item }) {
  const imageSrc = item.images?.[0] ?? itemDefault;

  return(<div className={styles.itemCard}>
      <img src={ imageSrc } alt={item.name} className={styles.itemCardThumbnail} />
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