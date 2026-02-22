import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0 auto',
  padding: '8rem 2.4rem',

  '@media': {
    'screen and (min-width: 744px)': {
      maxWidth: '64rem',
    },
  },
});

export const logoLink = style({
  width: '100%',
  marginBottom: '3rem',
  display: 'flex',
  justifyContent: 'center',
});

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '2.4rem',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const loginButton = style({
  width: '100%',
});

export const footerLink = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: vars.fontSize.xxs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray800,
  gap: '0.4rem',
});

export const link = style({
  textDecoration: 'underline',
  color: vars.color.main,

  selectors: {
    '&:hover': {
      color: vars.color.blue300,
    },
  },
});
