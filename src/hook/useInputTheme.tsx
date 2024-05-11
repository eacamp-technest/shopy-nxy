import {TextStyle, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';
import {TypographyStyles} from 'theme/typography';

const defaultStyles = {
  state: {
    label: {
      ...TypographyStyles.RegularNoneSemibold,
    } as TextStyle,
    wrapper: {
      borderWidth: 1,
      borderColor: colors.skyLight,
    } as ViewStyle,
    noIcon: {} as ViewStyle,
    errorText: {} as TextStyle,
    input: {} as TextStyle,
  },
  focus: {
    label: {
      ...TypographyStyles.RegularNoneSemibold,
    } as TextStyle,
    wrapper: {
      borderWidth: 1,
      borderColor: colors.blue.base,
    } as ViewStyle,
    noIcon: {} as ViewStyle,
    errorText: {} as TextStyle,
    input: {} as TextStyle,
  },
  disabled: {
    label: {
      ...TypographyStyles.RegularNoneSemibold,
    } as TextStyle,
    wrapper: {
      borderWidth: 0,
      backgroundColor: colors.skyLighter,
    } as ViewStyle,
    noIcon: {
      borderWidth: 1,
      borderColor: colors.skyLighter,
      backgroundColor: colors.skyLightest,
    } as ViewStyle,
    errorText: {} as TextStyle,
    input: {} as TextStyle,
  },
  error: {
    label: {
      ...TypographyStyles.RegularNoneSemibold,
    } as TextStyle,
    wrapper: {
      borderColor: colors.red.base,
    } as ViewStyle,
    errorText: {
      color: colors.red.base,
      ...TypographyStyles.RegularTightRegular,
    } as TextStyle,
    noIcon: {} as ViewStyle,
    input: {} as TextStyle,
  },
};

const floatingStyles = {
  state: {
    label: {
      ...TypographyStyles.TinyNoneRegular,
    } as TextStyle,
    wrapper: {
      borderWidth: 1,
      borderColor: colors.skyLight,
    } as ViewStyle,
    noIcon: {} as ViewStyle,
    errorText: {} as TextStyle,
    input: {} as TextStyle,
  },
  focus: {
    label: {
      ...TypographyStyles.TinyNoneRegular,
    } as TextStyle,
    wrapper: {
      borderWidth: 1,
      borderColor: colors.blue.base,
    } as ViewStyle,
    noIcon: {} as ViewStyle,
    errorText: {} as TextStyle,
    input: {} as TextStyle,
  },
  disabled: {
    label: {
      color: colors.skyBase,
      ...TypographyStyles.TinyNoneRegular,
    } as TextStyle,
    wrapper: {
      borderWidth: 0,
      backgroundColor: colors.skyLighter,
    } as ViewStyle,
    noIcon: {
      borderWidth: 1,
      borderColor: colors.skyLighter,
      backgroundColor: colors.skyLightest,
    } as ViewStyle,
    errorText: {} as TextStyle,
    input: {} as TextStyle,
  },
  error: {
    label: {
      ...TypographyStyles.TinyNoneRegular,
    } as TextStyle,
    wrapper: {
      borderColor: colors.red.base,
    } as ViewStyle,
    errorText: {
      color: colors.red.base,
      ...TypographyStyles.RegularTightRegular,
    } as TextStyle,
    noIcon: {} as ViewStyle,
    input: {} as TextStyle,
  },
};

export type TInputVariants = 'default' | 'floating';

const inputTheme = {
  default: defaultStyles,
  floating: floatingStyles,
};

export const useInputTheme = (
  variant: TInputVariants,
  state: 'focus' | 'state' | 'disabled' | 'error',
) => {
  return inputTheme[variant][state];
};
