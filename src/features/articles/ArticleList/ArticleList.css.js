import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const articleList = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  marginBottom: '6rem',
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const sectionTitle = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray900,
});

export const articleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const emptyMessage = style({
  width: '100%',
  padding: '8rem 0',
  textAlign: 'center',
  color: vars.color.gray400,
  fontSize: vars.fontSize.md,

});
