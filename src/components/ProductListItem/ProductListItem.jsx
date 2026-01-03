import styles from './ProductListItem.module.css';
export function ProductListItem({ item }) {

   const [imgSrc] = item.images
  // const priceFormat = new
  return (
    <div className={styles.productContainer}>
      <img className={styles.ProductImage}
        src={[imgSrc]}
        art={item.title}
      />
      <h3>{item.name}</h3>
      <h3>가격 {item.price}원</h3>
      <p>좋아요{item.favoriteCount}</p>
    </div>
  );
}
