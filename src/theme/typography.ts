import {StyleSheet, TextStyle} from 'react-native';
// import {colors} from './colors';
import {normalize} from './metrics';

export const bebasFonts = {
  700: 'BebasNeue-Bold',
};

export const montseratFonts = {
  400: 'Montserrat-Regular',
  600: 'Montserrat-SemiBold',
  700: 'Montserrat-Bold',
};

export const commonFontStyling: TextStyle = {
  includeFontPadding: false,
  padding: 0,
  //   color: colors.gray[800],
};

const fontSize48 = normalize('font', 48);
const fontSize32 = normalize('font', 32);
const fontSize24 = normalize('font', 24);
const fontSize18 = normalize('font', 18);
const fontSize16 = normalize('font', 16);
const fontSize14 = normalize('font', 14);
const fontSize12 = normalize('font', 12);

const lineHeight56 = normalize('font', 56);
const lineHeight36 = normalize('font', 36);
const lineHeight32 = normalize('font', 32);
const lineHeight24 = normalize('font', 24);
const lineHeight20 = normalize('font', 20);
const lineHeight18 = normalize('font', 18);
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
  regularNone: {
    fontFamily: montseratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  regularTight: {
    fontFamily: montseratFonts[600],
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  } as TextStyle,
  regularNormal: {
    fontFamily: montseratFonts[700],
    fontSize: fontSize16,
    lineHeight: lineHeight24,
    ...commonFontStyling,
  } as TextStyle,
  smallNone: {
    fontFamily: montseratFonts[400],
    fontSize: fontSize14,
    lineHeight: lineHeight14,
    ...commonFontStyling,
  } as TextStyle,
  smallTight: {
    fontFamily: montseratFonts[600],
    fontSize: fontSize14,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  smallNormal: {
    fontFamily: montseratFonts[700],
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  } as TextStyle,
  tinyNone: {
    fontFamily: montseratFonts[400],
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    ...commonFontStyling,
  } as TextStyle,
  tinyTight: {
    fontFamily: montseratFonts[600],
    fontSize: fontSize12,
    lineHeight: lineHeight14,
    ...commonFontStyling,
  } as TextStyle,
  tinyNormal: {
    fontFamily: montseratFonts[700],
    fontSize: fontSize12,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  largeNone: {
    fontFamily: montseratFonts[400],
    fontSize: fontSize18,
    lineHeight: lineHeight18,
    ...commonFontStyling,
  } as TextStyle,
  largeTight: {
    fontFamily: montseratFonts[600],
    fontSize: fontSize18,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  } as TextStyle,
  largeNormal: {
    fontFamily: montseratFonts[700],
    fontSize: fontSize18,
    lineHeight: lineHeight24,
    ...commonFontStyling,
  } as TextStyle,
});
