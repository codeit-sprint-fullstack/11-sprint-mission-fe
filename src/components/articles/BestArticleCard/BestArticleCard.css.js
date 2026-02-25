import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css.js';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '30.0rem',
  height: '19.8rem',
  flexShrink: 0,
  position: 'relative',

  backgroundColor: vars.color.gray100,
  borderRadius: vars.radius.sm,
  padding: '4.6rem 2.4rem 1.6rem',

  '@media': {
    'screen and (min-width: 768px)': {
      width: '34.0rem',
      height: '19.8rem',
    },

    'screen and (min-width: 1200px)': {
      width: '38.4rem',
      height: '16.9rem',
    },
  },
});

export const bestBadge = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '0',
  zIndex: 1,

  width: '10.2rem',
  height: '3rem',
  borderBottomLeftRadius: vars.radius.lg,
  borderBottomRightRadius: vars.radius.lg,
  backgroundColor: vars.color.main,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray50,
});

export const articleContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export const mainContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '4.0rem',
});

export const articleTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray800,
});

export const imageWrapper = style({
  width: '7.2rem',
  height: '7.2rem',
  flexShrink: 0,

  borderRadius: '0.8rem',
  border: `1px solid ${vars.color.gray200}`,
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  borderRadius: vars.radius.md,
  overflow: 'hidden',
});

export const subContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: vars.fontSize.xxs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray500,
});

export const articleInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.0rem',
});

export const writer = style({
  color: vars.color.gray600,
});

export const like = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const date = style({
  color: vars.color.gray400,
});
