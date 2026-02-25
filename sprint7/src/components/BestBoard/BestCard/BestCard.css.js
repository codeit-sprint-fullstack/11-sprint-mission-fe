import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  width: '100%',
  padding: '0 24px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F9FAFB',
  borderRadius: '8px',
});

export const cardTitleWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '16px 0',
});

export const titleBox = style({
  flex: 1,
  minWidth: 0,
  marginRight: '8px',
  fontSize: '20px',
  fontWeight: 'bold',
  wordBreak: 'break-word',
});

export const ImageBox = style({
  width: '72px',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #E5E7EB',
  borderRadius: '8px',
});

export const nameWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '14px',
  color: '#4B5563',
  marginBottom: '16px',
});

export const nameContents = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
});

export const hartContents = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
});
