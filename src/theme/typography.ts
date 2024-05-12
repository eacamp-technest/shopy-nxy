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

export const InterFonts = {
  500: 'Inter-Medium',
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
const lineHeight14_52 = normalize('font', 14.52);
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
  RegularNoneBold: {
    fontFamily: montserratFonts[700],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  TinyNormalRegular: {
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
  SmallNormalRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  },
  RegularNoneRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  },
  RegularTightRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  },
  RegularNormalRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight24,
    ...commonFontStyling,
  },
  TinyNoneRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    ...commonFontStyling,
  },
  TinyNoneSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    ...commonFontStyling,
  },
  SmallNoneSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize14,
    lineHeight: lineHeight14,
    ...commonFontStyling,
  },
  RegularNoneSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  },
  SmallNormalSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  },
  RegularTightSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  },
  Inter: {
    fontFamily: InterFonts[500],
    fontSize: fontSize12,
    lineHeight: lineHeight14_52,
    ...commonFontStyling,
  },

  textAlignCenter: {
    textAlign: 'center',
  },
});
