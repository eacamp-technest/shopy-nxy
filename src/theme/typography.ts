import {StyleSheet, TextStyle} from 'react-native';
import {normalize} from './metrics';

export const bebasFonts = {
  700: 'BebasNeue',
};

export const montserratFonts = {
  400: 'Montserrat-Regular',
  600: 'Montserrat-SemiBold',
  700: 'Montserrat-Bold',
};

export const commonFontStyling: TextStyle = {
  includeFontPadding: false,
  padding: 0,
};

const fontSize48 = normalize('font', 48);
const fontSize32 = normalize('font', 32);
const fontSize24 = normalize('font', 24);
const fontSize16 = normalize('font', 16);
const fontSize14 = normalize('font', 14);
const fontSize12 = normalize('font', 12);

const lineHeight56 = normalize('font', 56);
const lineHeight36 = normalize('font', 36);
const lineHeight32 = normalize('font', 32);
const lineHeight24 = normalize('font', 24);
const lineHeight20 = normalize('font', 20);
const lineHeight16 = normalize('font', 16);
const lineHeight14 = normalize('font', 14);
const lineHeight12 = normalize('font', 12);

export const TypographyStyles = StyleSheet.create({
  title1: {
    fontFamily: bebasFonts[700],
    fontSize: fontSize48,
    lineHeight: lineHeight56,
    ...commonFontStyling,
  } as TextStyle,
  title2: {
    fontFamily: bebasFonts[700],
    fontSize: fontSize32,
    lineHeight: lineHeight36,
    ...commonFontStyling,
  } as TextStyle,
  title3: {
    fontFamily: bebasFonts[700],
    fontSize: fontSize24,
    lineHeight: lineHeight32,
    ...commonFontStyling,
  } as TextStyle,
  smallNormal: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize12,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  },
  mediumNormal: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize14,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  },
  mediumLarge: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  },
  normalNormal: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  },
  normalLarge: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  },
  normalXLarge: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight24,
    ...commonFontStyling,
  },
  tinyNoneRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    ...commonFontStyling,
  },
  smallSemiBold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    ...commonFontStyling,
  },
  mediumSemiBold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize14,
    lineHeight: lineHeight14,
    ...commonFontStyling,
  },
  normalSemiBold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  },
  largeSemiBold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  },

  textAlignCenter: {
    textAlign: 'center',
  },
});
