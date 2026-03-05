import { style } from '@vanilla-extract/css';

export const footer = style({
  height: '160px',
  width: '100%',
  backgroundColor: '#111827',
  padding: '32px 200px',
  bottom: 0,
  position: 'absolute',
});

export const footerContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '16px',
  fontWeight: '400',
  color: '#e5e7eb',
});

export const copyright = style({
  color: '#9ca3af',
});

export const footerLink = style({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '30px',
});

export const footerLinkAnchor = style({
  textDecoration: 'none',
  color: '#e5e7eb',
});

export const social = style({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '12px',
  flexShrink: 0,
});

export const socialImg = style({
  width: '18px',
  height: '18px',
});
