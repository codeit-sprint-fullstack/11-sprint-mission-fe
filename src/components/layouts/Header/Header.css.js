import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css.js';

export const header = style({
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 5,
  height: '7.0rem',
  backgroundColor: 'white',
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  margin: '0 auto',
  padding: '0 1.6rem',

  '@media': {
    'screen and (min-width: 744px)': {
      padding: '0 2.4rem',
    },
    'screen and (min-width: 1200px)': {
      padding: '0 20rem',
    },
  },
});

export const headerNav = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  height: '100%',
  '@media': {
    'screen and (min-width: 744px)': {
      gap: '2.0rem',
    },
    'screen and (min-width: 1200px)': {
      gap: '2.4rem',
    },
  },
});

export const navMenu = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const navLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '7.4rem',
  height: '100%',
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray600,
  textDecoration: 'none',
  transition: 'color 0.2s',
  '@media': {
    'screen and (min-width: 744px)': {
      width: '10.8rem',
      fontSize: vars.fontSize.sm,
    },
  },
});

export const activeLink = style({
  color: vars.color.main,
});

export const logoLink = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const logoImg = style({
  display: 'block',
  width: 'auto',
  height: 'auto',
});

export const headerButton = style({
  display: 'flex',
  alignItems: 'center',
});
