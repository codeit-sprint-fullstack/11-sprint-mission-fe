import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const commentCard = style({
  width: '100%',
  height: '12.0rem',
  backgroundColor: vars.color.gray50,
  borderBottom: `1px solid ${vars.color.gray200}`,
  padding: '1.6rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const commentContent = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const commentText = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray800,
  wordBreak: 'break-all',
});

export const commentInfo = style({
  display: 'flex',
  gap: '0.8rem',
});

export const profile = style({
  borderRadius: vars.radius.round,
  objectFit: 'cover',
});

export const infoText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const nickname = style({
  fontSize: vars.fontSize.xxs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray600,
});

export const time = style({
  fontSize: vars.fontSize.xxs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray400,
});

export const editForm = style({
  backgroundColor: vars.color.gray50,
  padding: '0.8rem 0.8rem 1.6rem',
  borderRadius: vars.radius.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const editTextarea = style({
  width: '100%',
  minHeight: '8rem',
  padding: '0.8rem',
  fontSize: vars.fontSize.xs,
  color: vars.color.gray800,
  backgroundColor: vars.color.gray150,
  border: 'none',
  borderRadius: vars.radius.sm,
});

export const editControls = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const actionButtons = style({
  display: 'flex',
  gap: '0.8rem',
});

export const sortToggle = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: vars.fontSize.md,
  color: vars.color.gray400,

  ':hover': {
    color: vars.color.gray600,
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
