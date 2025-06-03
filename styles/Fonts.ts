import { TextStyle } from 'react-native';

type FontScale = Record<string, TextStyle>;

export type FontSystem = {
  [key: string]: FontScale | TextStyle;
};

export const fonts = {
  headline: {
    h1: {
      fontFamily: 'Inter-Bold',
      fontSize: 30,
    },
    h2: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
    },
    h3: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
    },
    h4: {
      fontFamily: 'Inter-Medium',
      fontSize: 20,
    },
  },
  body: {
    b1: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
    },
  },
  button: {
    Btn1: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 16,
      lineHeight: 18,
      letterSpacing: 0.32,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
    Btn2: {
      fontFamily: 'Inter-SemiBold',
      fontSize: 14,
      lineHeight: 16,
      letterSpacing: 0.28,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  },
} satisfies FontSystem;
