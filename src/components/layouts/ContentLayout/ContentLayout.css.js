import { style } from '@vanilla-extract/css';

export const contentWrapper = style({
  width: '100%',
  margin: '0 auto',
  padding: '1.6rem 1.6rem 0',

  '@media': {
    'screen and (min-width: 768px)': {
      padding: '2.4rem 2.4rem 0',
    },
    'screen and (min-width: 1200px)': {
      maxWidth: '120rem',
      padding: '2.4rem 0 0',
    },
  },
});
