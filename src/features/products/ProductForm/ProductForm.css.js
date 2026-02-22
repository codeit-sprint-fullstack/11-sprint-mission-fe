import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css.js';

export const formContainer = style({
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  marginBottom: '7rem',
});

export const formHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const formTitle = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray800,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
});

export const inputSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray800,
});

export const imageUploadBox = style({
  width: '16rem',
  height: '16rem',
  backgroundColor: vars.color.gray150,
  borderRadius: vars.radius.md,
  border: '1px solid transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  ':hover': {
    border: `1px solid ${vars.color.main}`,
    backgroundColor: vars.color.gray50,
  },
});

export const plusIcon = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.gray400,
  marginBottom: '0.8rem',
});

export const uploadText = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.gray400,
});

export const tagList = style({
  marginTop: '1.2rem',
  display: 'flex',
  gap: '1.2rem',
});

export const tagChip = style({
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.xs,
  color: vars.color.gray800,
  backgroundColor: vars.color.gray150,
  borderRadius: vars.radius.round,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '0.5rem 1.6rem',
});

export const tagDeleteBtn = style({
  fontSize: vars.fontSize.md,
  color: vars.color.gray400,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      color: vars.color.gray500,
    },
  },
});
