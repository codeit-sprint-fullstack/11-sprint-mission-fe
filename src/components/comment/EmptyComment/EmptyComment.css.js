import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css.js';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const infoImage = style({
  marginBottom: '1.6rem',
});

export const infoMessage = style({
  textAlign: 'center',
  whiteSpace: 'pre-line',
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray400,
});
