import clsx from 'clsx';
import * as styles from './Button.css.js';

export default function Button({
  children,
  shape,
  size,
  color,
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        styles.buttonBase,
        styles.shapeVariants[shape],
        styles.sizeVariants[size],
        styles.colorVariants[color],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
