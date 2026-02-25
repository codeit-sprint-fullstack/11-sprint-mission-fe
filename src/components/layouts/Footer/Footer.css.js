import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css.js';

export const footer = style({
  height: '16rem',
  backgroundColor: vars.color.gray900,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.regular,
});

export const footerContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateAreas: `
    "links social"
    "copyright copyright"
  `,
  gap: '1.2rem',
  alignItems: 'center',
  padding: '3.2rem 1.6rem 0',

  '@media': {
    'screen and (min-width: 744px)': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3.2rem 2.4rem 0',
    },
    'screen and (min-width: 1200px)': {
      padding: '3.2rem 20rem 0',
    },
  },
});

export const footerCopyright = style({
  gridArea: 'copyright',
  color: vars.color.gray400,
});

export const footerLinks = style({
  gridArea: 'links',
  display: 'flex',
  gap: '3.0rem',
});

export const linkItem = style({
  color: vars.color.gray200,
});

export const socialMedia = style({
  gridArea: 'social',
  display: 'flex',
  gap: '1.2rem',
});

export const socialLink = style({
  fontSize: vars.fontSize.md,
});
