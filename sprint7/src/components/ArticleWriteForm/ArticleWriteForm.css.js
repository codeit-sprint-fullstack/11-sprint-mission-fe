import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '32px',
});
export const titleText = style({
  fontSize: '20px',
  fontWeight: '800',
  color: '#1F2937',
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

export const contentTitleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '24px',
});

export const contentTitle = style({
  color: '#1F2937',
  fontSize: '18px',
  fontWeight: 'bold',
});

export const titleInput = style({
  padding: '16px 24px',
  borderRadius: '12px',
  backgroundColor: '#F3F4F6',
  border: 'none',
});

export const desWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const desTextarea = style({
  height: '282px',
  resize: 'none',
  overflowY: 'auto',
  padding: '16px 24px',
  border: 'none',
  borderRadius: '12px',
  backgroundColor: '#F3F4F6',
});
