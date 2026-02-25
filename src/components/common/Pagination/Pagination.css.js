import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css.js';
import { styleVariants } from '@vanilla-extract/css';

export const pagination = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',
});

export const pageNumbers = style({
  display: 'flex',
  gap: '0.4rem',
});

const baseButton = style({
  width: '4rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'white',
  borderRadius: vars.radius.round,
  border: `1px solid ${vars.color.gray200}`,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray500,
  cursor: 'pointer',
});

export const buttonVariants = styleVariants({
  default: [baseButton],
  active: [
    baseButton,
    {
      borderColor: vars.color.main,
      backgroundColor: vars.color.main,
      color: vars.color.gray100,
    },
  ],
});

export const arrowIcon = style([
  baseButton,
  {
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
]);
