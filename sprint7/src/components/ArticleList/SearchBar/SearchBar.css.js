import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  gap: 16,
});

export const inputWrapper = style({
  position: 'relative',
  flex: 1,
});

export const input = style({
  width: '100%',
  padding: '12px 40px',
  border: '1px solid #E5E7EB',
  backgroundColor: '#F3F4F6',
  borderRadius: '12px',
});

export const searchIcon = style({
  position: 'absolute',
  top: '50%',
  left: '16px',
  transform: 'translateY(-50%)',
});
