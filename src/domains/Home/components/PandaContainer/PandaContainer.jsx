import clsx from 'clsx';
import styles from './PandaContainer.module.css';

export function PandaContainer({ children, className, src, alt, wrapClassName }) {
  return (
    <section className={className}>
      <div class={clsx(styles.wrap, wrapClassName)}>
        <div class={styles.container}>{children}</div>
        <img className={styles.pandaImg} src={src} alt={alt} />
      </div>
    </section>
  );
}
