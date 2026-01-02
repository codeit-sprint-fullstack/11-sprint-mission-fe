import styles from './Product.module.css';



export function Product({ src, title, price }) {

  return (
    <div className={styles.productContainer}>
      <a href="">
        <img src={src} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
      </a>
    </div>
  );
}
