import styles from './FeatureItem.module.css';

export function FeatureItem({
  image,
  alt,
  tag,
  title,
  description,
  reverse = false,
}) {
  return (
    <div
      className={styles.feature}
      style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
    >
      <img src={image} alt={alt} width="50%" />
      <div className={styles.featureContent}>
        <h2>{tag}</h2>
        <h1>
          {title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className={styles.featureDescription}>
          {description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
