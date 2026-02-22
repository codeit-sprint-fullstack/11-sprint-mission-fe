import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const submitButton = style({
  display: 'flex',
  justifyContent: 'flex-end',
});
