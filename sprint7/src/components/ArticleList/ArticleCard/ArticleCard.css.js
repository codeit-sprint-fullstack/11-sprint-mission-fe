import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#FCFCFC',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid #E5E7EB',
});

export const titleBox = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const titleFont = style({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#1F2937',
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

export const profileContailer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '24px',
  marginTop: '16px',
});

export const userProfileWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
});

export const hartWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',
});

export const nickNameFont = style({
  fontSize: '14px',
  color: '#4B5563',
});

export const dateFont = style({
  fontSize: '14px',
  color: '#9CA3AF',
});

export const LikeFont = style({
  fontSize: '16px',
  color: '#6B7280',
});
