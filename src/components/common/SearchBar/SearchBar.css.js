import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const searchContainer = style({
  height: '4.2rem',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
});

export const searchIcon = style({
  position: 'absolute',
  left: '1.2rem',
  fontSize: vars.fontSize.md,
  color: vars.color.gray400,
  pointerEvents: 'none',
});

export const searchInput = style({
  width: '100%',
  height: '4.2rem',
  backgroundColor: vars.color.gray150,
  borderRadius: vars.radius.md,
  border: 'none',
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray900,
  padding: '0 0.4rem 0 4.4rem',
  outline: 'none',

  '::placeholder': {
    color: vars.color.gray400,
  },
});
