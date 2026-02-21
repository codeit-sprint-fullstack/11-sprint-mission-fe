import { getProductById } from '../../../../api/api';
import InquirySection from './InquirySection';
import styles from './itemDetail.module.css';

export default async function ItemDetailPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <main className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={
            product.images && product.images[0]
              ? product.images[0]
              : '/img/img_default.png'
          }
          alt={product.name}
          className={styles.mainImage}
        />
      </div>

      <section className={styles.infoSection}>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.price}>{product.price?.toLocaleString()}원</div>
        <div className={styles.divider} />
        <h2 className={styles.subTitle}>상품 소개</h2>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.tags}>
          {product.tags?.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </section>

      <InquirySection productId={id} />
    </main>
  );
}
