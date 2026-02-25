import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  backgroundColor: '#111827',
});

export const snsContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
});

export const footerMenuContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '30px',
  color: '#E5E7EB',
});

export const footerWrapper = style({
  maxWidth: '1920px',
  height: '160px',
  color: '#9CA3AF',
  margin: '0 auto',
  padding: '32px 400px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});
