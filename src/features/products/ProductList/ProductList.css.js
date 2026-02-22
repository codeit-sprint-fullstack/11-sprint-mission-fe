import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const productList = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  marginBottom: '6rem',
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const sectionTitle = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray900,
});

export const productContainer = style({
  display: 'grid',
  gap: '1.2rem',
  gridTemplateColumns: 'repeat(2, 1fr)',
  marginBottom: '4rem',

  '@media': {
    'screen and (min-width: 744px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.6rem',
    },

    'screen and (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '2.0rem',
    },
  },
});
