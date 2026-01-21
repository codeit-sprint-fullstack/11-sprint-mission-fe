import styles from './FeatureItem.module.css';

function FeatureItem({ label, title, description, image, reverse }) {
  return (
    <article className={`${styles.item} ${reverse ? styles.reverse : ''}`}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.textWrapper}>
        <span className={styles.label}>{label}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

export default FeatureItem;
