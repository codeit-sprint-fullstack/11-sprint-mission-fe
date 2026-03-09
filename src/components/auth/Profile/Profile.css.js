import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';

export const profileTrigger = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  cursor: 'pointer',
});

export const avatar = style({
  borderRadius: vars.radius.round,
  objectFit: 'cover',
  border: vars.color.gray200,
});

export const nickname = style({
  display: 'none',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray600,

  '@media': {
    'screen and (min-width: 744px)': {
      display: 'block',
    },
  },
});

export const logout = style({
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
  },
});
