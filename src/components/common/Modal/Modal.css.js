import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
});

export const modalContainer = style({
  width: '32.7rem',
  height: '22.0rem',
  backgroundColor: 'white',
  borderRadius: vars.radius.sm,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',

  '@media': {
    'screen and (min-width: 744px)': {
      width: '54.0rem',
      height: '25.0rem',
    },
  },
});

export const message = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray800,
  marginBottom: '4rem',
  textAlign: 'center',
  wordBreak: 'keep-all',
});

export const confirmButton = style({
  cursor: 'pointer',
});
