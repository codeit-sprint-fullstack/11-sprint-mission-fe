import { vars } from '@/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const cardBase = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.0rem',
  cursor: 'pointer',
});

export const cardType = styleVariants({
  best: {
    flex: '0 0 auto',
    width: '28.2rem',
  },
  list: {
    width: '100%',
  },
});

export const imageContainer = style({
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  borderRadius: vars.radius.md,
  position: 'relative',
});

export const productImg = style({
  objectFit: 'cover',
});

export const productInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const productName = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray800,
});

export const productPrice = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray800,
});

export const like = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: vars.fontSize.xxs,
  color: vars.color.gray600,
});

export const heartIcon = style({
  fontSize: vars.fontSize.xs,
});
