import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  cursor: 'pointer',
});

export const btnWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  border: '1px solid #E5E7EB',
  backgroundColor: 'white',
  padding: '12px 20px',
  borderRadius: '12px',
});

export const btnText = style({
  marginRight: '24px',
});

export const dropdownWrapper = style({
  position: 'absolute',
  top: '56px',
  border: '1px solid #E5E7EB',
  backgroundColor: 'white',
  padding: '12px 20px',
  width: '100%',
  borderRadius: '12px',
  cursor: 'pointer',
});

export const listItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: '12px',
    },
  },
});
