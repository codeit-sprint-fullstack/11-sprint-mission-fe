import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const banner = style({
  backgroundColor: vars.color.blue200,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  overflow: 'hidden',
  paddingTop: '4rem',

  '@media': {
    'screen and (min-width: 744px)': {
      paddingTop: '6rem',
    },
    
    'screen and (min-width: 1200px)': {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '54rem',
      paddingTop: '0',
    },
  },
});

export const bannerContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '30rem',
  gap: '1.8rem',

  '@media': {
    'screen and (min-width: 744px)': {
      maxWidth: 'none',
      gap: '2.4rem',
    },

    'screen and (min-width: 1200px)': {
      maxWidth: '36rem',
      textAlign: 'left',
      alignItems: 'flex-start',
      position: 'relative',
      top: '-32%',
      gap: '3.2rem',
    },
  },
});

export const bannerTitle = style({
  whiteSpace: 'pre-line',
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray900,

  '@media': {
    'screen and (min-width: 744px)': {
      whiteSpace: 'normal',
      fontSize: vars.fontSize.xxl,
    },

    'screen and (min-width: 1200px)': {
      whiteSpace: 'pre-line',
    },
  },
});

export const bannerButton = style({
  width: '24rem',

  '@media': {
    'screen and (min-width: 744px)': {
      width: '36rem',
    },
  },
});

export const bannerImage = style({
  width: '80%',
  height: 'auto',
  marginTop: '3.2rem',
  display: 'block',

  '@media': {
    'screen and (min-width: 1200px)': {
      maxWidth: '40%',
      marginTop: 0,
    },
  },
});
