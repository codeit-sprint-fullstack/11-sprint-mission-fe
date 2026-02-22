import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css.js';

export const featureContainer = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '5rem 1.6rem 0',

  '@media': {
    'screen and (min-width: 744px)': {
      padding: '5rem 2.4rem 0',
    },

    'screen and (min-width: 1200px)': {
      padding: '13.8rem 0',
      width: '100%',
    },
  },
});

export const featureContent = style({
  backgroundColor: vars.color.gray50,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: vars.radius.md,

  '@media': {
    'screen and (min-width: 744px)': {
      maxWidth: '65rem',
      display: 'block',
    },

    'screen and (min-width: 1200px)': {
      maxWidth: '98.8rem',
      height: '44.4rem',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '6rem',
    },
  },
});

export const contentVariants = styleVariants({
  default: {
    '@media': {
      'screen and (min-width: 1200px)': {
        flexDirection: 'row',
      },
    },
  },
  reverse: {
    '@media': {
      'screen and (min-width: 1200px)': {
        flexDirection: 'row-reverse',
      },
    },
  },
});

export const featureImage = style({
  width: '100%',
  height: 'auto',

  '@media': {
    'screen and (min-width: 1200px)': {
      width: 'auto',
      height: '100%',
    },
  },
});

export const featureText = style({
  padding: '2.4rem 1.8rem',
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    'screen and (min-width: 1200px)': {
      padding: '0',
    },
  },
});

export const alignVariants = styleVariants({
  default: {
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  reverse: {
    textAlign: 'right',
    alignItems: 'flex-end',
  },
});

export const badgeText = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.main,

  '@media': {
    'screen and (min-width: 744px)': {
      fontSize: vars.fontSize.sm,
    },
  },
});

export const titleText = style({
  margin: '1.2rem 0 2.4rem',
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray700,
  whiteSpace: 'normal',

  '@media': {
    'screen and (min-width: 744px)': {
      fontSize: vars.fontSize.xl,
    },

    'screen and (min-width: 1200px)': {
      fontSize: vars.fontSize.xxl,
      whiteSpace: 'pre-line',
    },
  },
});

export const descriptionText = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray700,
  whiteSpace: 'pre-line',

  '@media': {
    'screen and (min-width: 744px)': {
      fontSize: vars.fontSize.sm,
    },

    'screen and (min-width: 1200px)': {
      fontSize: vars.fontSize.lg,
    },
  },
});
