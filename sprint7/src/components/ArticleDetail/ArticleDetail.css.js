import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '32px',
});

export const title = style({
  fontSize: '20px',
  color: '#1F2937',
  fontWeight: 'bold',
});

export const userProfileWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '32px',
  margin: '16px 0',
});

export const userProfile = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const profileImg = style({
  marginRight: '16px',
});

export const userName = style({
  fontSize: '14px',
  color: '#4B5563',
  marginRight: '8px',
});

export const date = style({
  fontSize: '14px',
  color: '#9CA3AF',
});

export const profileLine = style({
  color: '#E5E7EB',
  fontSize: '32px',
  fontWeight: 'lighter',
});

export const likeWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  border: '1px solid #E5E7EB',
  alignItems: 'center',
  borderRadius: '35px',
  padding: '4px 12px',
  gap: '4px',
});

export const likeNumber = style({
  color: '#6B7280',
});

export const divideLine = style({
  width: '100%',
  borderBottom: '1px solid #E5E7EB',
  marginBottom: '24px',
});

export const contentText = style({
  fontSize: '18px',
  color: '#1F2937',
});
