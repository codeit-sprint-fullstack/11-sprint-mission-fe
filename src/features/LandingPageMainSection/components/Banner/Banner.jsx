import { Link } from 'react-router';
import styles from '../Banner/Banner.module.css';

function Banner({ title, image, imageAlt, buttonText, buttonLink }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      {buttonText && buttonLink && (
        <Link to={buttonLink} className={styles.button}>
          {buttonText}
        </Link>
      )}
      <img src={image} alt={imageAlt} className={styles.image} />
    </section>
  );
}

export default Banner;
