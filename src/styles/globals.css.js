import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#ffffff',
    darkgrey: '#9ca3af',
    loginBlack: '#1f2937',
    loginGrey: '#f3f4f6',
    highlight: '#3692ff',
    loginQuick: '#e6f2ff',
    lightblue: '#cfe5ff',
    footerBackground: '#111827',
    mainContentBackground: '#fcfcfc',
    fontTitle: '#374151',
    fontFooter: '#e5e7eb',
    red: '#f76464',
  },
  font: {
    titleWeight: '700',
    contentWeight: '500',
    titleSize: '40px',
    highlightSize: '18px',
    highlightWeight: '700',
    contentSize: '24px',
    footerSize: '16px',
    footerWeight: '400',
    blueSize: '16px',
    blueWeight: '600',
    lineHeight: '32px',
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('a:hover', {
  cursor: 'pointer',
});

globalStyle('html, body', {
  fontFamily: 'Pretendard, sans-serif',
  fontSize: '10px',
});
