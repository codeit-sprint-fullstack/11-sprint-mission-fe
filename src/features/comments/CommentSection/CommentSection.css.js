import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '7rem',
});

export const inputSection = style({
  width: '100%', 
  display: 'flex', 
  marginBottom: '2.4rem',
})

export const listWrapper = style({
  width: '100%', 
  display: 'flex', 
  flexDirection: 'column',
  marginBottom: '5.6rem',
  gap: '2.4rem',
});

export const buttonContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
});

export const flipIcon = style({
  transform: 'scaleY(-1)',
  fontSize: vars.fontSize.md,
});
