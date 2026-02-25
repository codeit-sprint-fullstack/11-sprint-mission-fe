import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderBottom: '1px solid #E5E7EB',
  selectors: {
    '&:not(:last-child)': {
      marginBottom: '24px',
    },
  },
});

export const profileWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  marginTop: '24px',
  marginBottom: '12px',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const userName = style({
  fontSize: '12px',
  color: '#4B5563',
});

export const date = style({
  fontSize: '12px',
  color: '#9CA3AF',
});
