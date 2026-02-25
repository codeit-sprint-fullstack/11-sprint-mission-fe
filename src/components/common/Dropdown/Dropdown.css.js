import { style } from '@vanilla-extract/css';
import { vars } from '@/styles';

export const dropdownContainer = style({
  position: 'relative',
  display: 'inline-block',
});

export const triggerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const menuWrapper = style({
  position: 'absolute',
  top: 'calc(100% + 0.4rem)',
  right: 0,
  backgroundColor: 'white',
  borderRadius: vars.radius.md,
  border: `0.1rem solid ${vars.color.gray200}`,
  zIndex: 1,
  boxShadow: '0 0.4rem 1.5rem rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
});
