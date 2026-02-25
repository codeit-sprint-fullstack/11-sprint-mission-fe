import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const cardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '24px',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '20px',
});
