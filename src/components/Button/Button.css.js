import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

export const button = style({
  textDecoration: 'none',
  color: vars.color.white,
  backgroundColor: vars.color.highlight,
  padding: '12px 32px',
  borderRadius: '8px',
  fontSize: vars.font.footerSize,
});

export const buttonDisabled = style({
  backgroundColor: vars.color.darkgrey,
});

export const content = style({
  width: '100px',
});
