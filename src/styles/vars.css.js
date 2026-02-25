import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    main: '#3692FF',

    blue100: '#E6F2FF',
    blue200: '#CFE5FF',
    blue300: '#1967D6',
    blue400: '#1251AA',

    gray50: '#FCFCFC',
    gray100: '#F9FAFB',
    gray150: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#C9CDD2',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',

    red: '#F74747',
  },
  font: {
    primary: 'var(--font-pretendard), sans-serif',
  },
  fontSize: {
    xxs: '1.4rem',
    xs: '1.6rem',
    sm: '1.8rem',
    md: '2.0rem',
    lg: '2.4rem',
    xl: '3.2rem',
    xxl: '4.0rem',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extraBold: '800',
  },
  radius: {
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    round: '10rem',
  },
});
