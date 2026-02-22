import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css.js';

export const bestContainer = style({
  width: '100%',
  marginBottom: '2.4rem',
});

export const sectionTitle = style({
  color: vars.color.gray900,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  marginBottom: '1.6rem',

  '@media': {
    'screen and (min-width: 768px)': {
      marginBottom: '2.4rem',
    },
  },
});

export const scrollArea = style({
  display: 'flex',
  gap: '1.6rem',

  // 스크롤
  overflowX: 'auto',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none', // 스크롤바 숨기기
    },
  },

  '@media': {
    'screen and (min-width: 1200px)': {
      overflowX: 'visible',
      justifyContent: 'center',
      padding: '0',
      gap: '2.4rem',
    },
  },
});
