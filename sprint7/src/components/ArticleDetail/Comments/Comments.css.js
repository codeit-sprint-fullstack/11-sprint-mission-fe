import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const titleText = style({
  color: '#111827',
});

export const btnWrapper = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
});

export const btn = style({
  padding: '12px 23px',
  borderRadius: '8px',
  backgroundColor: '#9CA3AF',
  color: 'white',
  cursor: 'not-allowed',
});

export const btnActive = style({
  padding: '12px 23px',
  borderRadius: '8px',
  backgroundColor: '#3692FF',
  color: 'white',
  cursor: 'pointer',
});

export const commentsTextarea = style({
  height: '104px',
  resize: 'none',
  overflowY: 'auto',
  padding: '16px 24px',
  border: 'none',
  borderRadius: '12px',
  backgroundColor: '#F3F4F6',
});
