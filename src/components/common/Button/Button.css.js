import { vars } from '@/styles';
import { styleVariants, style } from '@vanilla-extract/css';

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
  transition: 'all 0.2s',
});

export const shapeVariants = styleVariants({
  round: { borderRadius: vars.radius.round },
  square: { borderRadius: vars.radius.sm },
});

export const sizeVariants = styleVariants({
  xl: { width: '64.0rem', height: '5.6rem', fontSize: vars.fontSize.sm },
  lg: { width: '24.0rem', height: '4.8rem', fontSize: vars.fontSize.sm },
  md: { width: '13.3rem', height: '4.2rem', fontSize: vars.fontSize.xs },
  sm: { width: '8.8rem', height: '4.2rem', fontSize: vars.fontSize.xs },
  xs: { width: '7.9rem', height: '3.2rem', fontSize: vars.fontSize.xs },
});

export const colorVariants = styleVariants({
  primary: {
    backgroundColor: vars.color.main,
    color: vars.color.gray200,
    selectors: {
      '&:hover': { backgroundColor: vars.color.blue300 },
      '&:active': { backgroundColor: vars.color.blue400 },
    },
  },
  inactive: {
    backgroundColor: vars.color.gray300,
    color: vars.color.gray200,
    cursor: 'not-allowed',
  },
  cancel: {
    color: vars.color.gray600,
  },
  heart: {
    backgroundColor: 'white',
    color: vars.color.gray500,
    border: `1px solid ${vars.color.gray200}`,
    selectors: {
      '&:hover': { border: `1px solid ${vars.color.main}` },
    },
  },
});
