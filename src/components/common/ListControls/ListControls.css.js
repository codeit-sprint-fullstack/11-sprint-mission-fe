import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.6rem',
  width: '100%',
});

export const sortToggle = style({
  backgroundColor: 'white',
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.gray200}`,
  color: vars.color.gray800,

  width: '4.2rem',
  height: '4.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  '@media': {
    'screen and (min-width: 744px)': {
      width: '13rem',
      padding: '0 1.8rem',
      justifyContent: 'space-between',
    },
  },
});

export const mobileSort = style({
  display: 'flex',
  fontSize: vars.fontSize.md,

  '@media': {
    'screen and (min-width: 744px)': {
      display: 'none',
    },
  },
});

export const desktopSort = style({
  display: 'none',

  '@media': {
    'screen and (min-width: 744px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      fontSize: vars.fontSize.xs,
      fontWeight: vars.fontWeight.medium,
    },
  },
});

export const sortOption = style({
  width: '13rem',
  height: '4.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: vars.fontSize.xs,
  color: vars.color.gray800,
  cursor: 'pointer',
  backgroundColor: 'white',

  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray100,
    },
    '&:not(:last-child)': {
      borderBottom: `1px solid ${vars.color.gray150}`,
    },
  },
});
