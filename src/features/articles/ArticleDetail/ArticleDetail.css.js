import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const articleContainer = style({
  marginBottom: '3.2rem',
  padding: '0.8rem 0',
});

export const articleHeader = style({
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `1px solid ${vars.color.gray200}`,
  marginBottom: '2.4rem',
});

export const articleTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1.6rem',
});

export const titleText = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray800,
  wordBreak: 'break-all',
});

export const articleInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.8rem',
  marginBottom: '1.6rem',
});

export const authorInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const profileImg = style({
  borderRadius: vars.radius.round,
  objectFit: 'cover',
});

export const nickname = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray800,
});

export const date = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray400,
});

export const divider = style({
  color: vars.color.gray200,
  fontSize: vars.fontSize.lg,
});

export const likeCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

export const articleContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.0rem',
});

export const contentText = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray800,
  lineHeight: '2.6rem',
  whiteSpace: 'pre-wrap',
});

export const imageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
  width: '100%',
});

export const contentImage = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
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
