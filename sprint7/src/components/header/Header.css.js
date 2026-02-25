import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  backgroundColor: 'white',
  borderBottom: '1px solid #DFDFDF',
});

export const headerWrapper = style({
  maxWidth: '1920px',
  margin: '0 auto',
  padding: '10px 200px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const menuContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '32px',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#4B5563',
});

export const activeLink = style({
  color: '#3692FF',
});

export const loginBtn = style({
  padding: '12px 24px',
  backgroundColor: '#3692FF',
  color: 'white',
  borderRadius: '8px',
  fontWeight: '600',
});
