import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';

export const cardContainer = style({
  width: '100%',
  height: '14.8rem',

  backgroundColor: vars.color.gray50,
  borderBottom: `1px solid ${vars.color.gray200}`,
  padding: '1.6rem 1.2rem',
  display: 'flex',
  flexDirection: 'column',
});

export const articleContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export const mainContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.6rem',
});

export const articleTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray800,
});

export const imageWrapper = style({
  width: '7.2rem',
  height: '7.2rem',
  flexShrink: 0,

  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.gray200}`,
});

export const articleImage = style({
  width: '100%',
  height: '100%',
  borderRadius: vars.radius.md,
  objectFit: 'cover',
  overflow: 'hidden',
});

export const subContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: vars.fontSize.xxs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray500,
});

export const articleInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const profileWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',
});

export const profileImage = style({
  borderRadius: vars.radius.round,
  objectFit: 'cover',
});

export const writer = style({
  color: vars.color.gray600,
});

export const date = style({
  color: vars.color.gray400,
});

export const like = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: vars.fontSize.xs,
});
