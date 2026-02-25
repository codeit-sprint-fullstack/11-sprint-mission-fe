import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '40px',
});

export const articleTtileWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '24px',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#1F2937',
});

export const writeBtn = style({
  padding: '12px 24px',
  backgroundColor: '#3692FF',
  color: 'white',
  borderRadius: '8px',
});

export const searchBarWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});

export const itemListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  marginTop: '24px',
});
