import 'styled-components';
import { configureFonts, DefaultTheme } from 'react-native-paper';

// All app colors
enum COLORS {
  PRIMARY = '#F8F8F8',
  SECONDARY = '#383838',
  BLACK = '#000000',
  WHITE = '#FFFFFF',
  GREY = '#989898',
  GREY_DARK = '#686868',
  INPUT = '#F0F0F0',
  TRANSPARENT = 'transparent'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 8,
  LARGE_SIZE = 16,
  MEDIUM_SIZE = 12,
  POPPINS_EXTRABOLD = 'POPPINS_EXTRABOLD',
  POPPINS_BOLD = 'POPPINS_BOLD',
  POPPINS_SEMIBOLD = 'POPPINS_SEMIBOLD',
  POPPINS_THIN = 'POPPINS_THIN',
  POPPINS_LIGHT = 'POPPINS_LIGHT',
  POPPINS_MEDIUM = 'POPPINS_MEDIUM',
  POPPINS_REGULAR = 'POPPINS_REGULAR'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      PRIMARY: string;
      SECONDARY: string;
      TRANSPARENT: string;
      BLACK: string;
      WHITE: string;
      GREY: string;
      GREY_DARK: string;
      INPUT: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      LARGE_SIZE: number;
      MEDIUM_SIZE: number;
      POPPINS_EXTRABOLD: string;
      POPPINS_BOLD: string;
      POPPINS_SEMIBOLD: string;
      POPPINS_THIN: string;
      POPPINS_LIGHT: string;
      POPPINS_MEDIUM: string;
      POPPINS_REGULAR: string;
    };
  }
}

const paperFontConfig = {
  default: {
    regular: {
      fontFamily: FONTS.POPPINS_REGULAR,
      fontWeight: 'normal'
    },

    light: {
      fontFamily: FONTS.POPPINS_LIGHT,
      fontWeight: 'normal'
    },

    medium: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontWeight: 'normal'
    },

    thin: {
      fontFamily: FONTS.POPPINS_THIN,
      fontWeight: 'normal'
    },

    semiBold: {
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      fontWeight: 'bold'
    },

    bold: {
      fontFamily: FONTS.POPPINS_BOLD,
      fontWeight: 'bold'
    },

    extraBold: {
      fontFamily: FONTS.POPPINS_EXTRABOLD,
      fontWeight: 'bold'
    }
  }
};

export const paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.PRIMARY,
    accent: COLORS.SECONDARY,
    text: COLORS.SECONDARY,
    background: COLORS.WHITE
  },
  // @ts-ignore
  fonts: configureFonts(paperFontConfig)
};

export const styledComponentTheme = { colors: COLORS, fonts: FONTS };
