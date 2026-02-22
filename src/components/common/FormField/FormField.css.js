import { vars } from '@/styles';
import { styleVariants } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

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

const baseInput = style({
  width: '100%',
  backgroundColor: vars.color.gray150,
  borderRadius: vars.radius.md,
  padding: '1.6rem',
  fontSize: vars.fontSize.xs,
  border: '1px solid transparent',
  outline: 'none',

  selectors: {
    '&::placeholder': {
      color: vars.color.gray400,
    },
    '&:focus': {
      border: `1px solid ${vars.color.main}`,
    },
  },
});

export const inputVariants = styleVariants({
  default: [baseInput, { height: '5.6rem' }], // auth
  comment: [baseInput, { minHeight: '10.4rem' }],
  description: [baseInput, { minHeight: '28rem' }],
});
