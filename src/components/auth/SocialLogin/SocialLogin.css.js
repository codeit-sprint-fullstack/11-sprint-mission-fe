import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.6rem 2.4rem',
  backgroundColor: vars.color.blue100, 
  borderRadius: vars.radius.sm,
});

export const title = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray800,
  
});

export const iconGroup = style({
  display: 'flex',
  gap: '1.6rem',
});

export const iconButton = style({
  cursor: 'pointer',
});