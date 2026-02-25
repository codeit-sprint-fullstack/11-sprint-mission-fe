import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const emptyWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '40px',
  marginBottom: '16px',
});

export const emptyText = style({
  color: '#9CA3AF',
  textAlign: 'center',
  lineHeight: '26px',
});

export const backBtn = style({
  padding: '12px 64px',
  borderRadius: '40px',
  color: 'white',
  cursor: 'pointer',
  marginTop: '48px',
  backgroundColor: '#3692FF',
  alignSelf: 'center',
});
