import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const bestContainer = style({
  width: '100%',
  marginBottom: '2.4rem',
});

export const sectionTitle = style({
  color: vars.color.gray900,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  marginBottom: '1.6rem',
});

export const scrollArea = style({
  display: 'flex',
  gap: '1.6rem',

  overflowX: 'auto',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none', 
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

