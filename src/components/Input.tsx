import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import {Resources, SvgImage} from './SvgImage';
import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';
import {TInputVariants, useInputTheme} from 'hook/useInputTheme';
import {CommonStyles} from 'theme/commonStyles';

// ! Interface

type TState = 'default' | 'focused' | 'disabled';
type TInputTypes = 'text' | 'numberMobile';
type TPosition = 'left' | 'right' | 'default';

interface IInput {
  variant?: TInputVariants;
  label?: string;
  position?: TPosition;
  icon?: Resources;
  disabled?: boolean;
  errorMessage?: string;
  placeholder?: string;
  value?: string;
  caption?: string;
  state?: TState;
  style?: StyleProp<ViewStyle>;
  type: TInputTypes;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (value: string) => void;
}

export const Input: React.FC<IInput> = ({
  disabled,
  errorMessage,
  value,
  label,
  placeholder,
  //   type = 'text',
  position = 'default',
  maxLength,
  onChange,
  icon,
  keyboardType,
  variant = 'default',
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  const handleInputOnBlur = () => setFocus(false);
  const handleInputOnFocus = () => setFocus(true);

  const inputState = disabled
    ? 'disabled'
    : focus
    ? 'focus'
    : errorMessage
    ? 'error'
    : 'state';

  const {
    input: inputStyles,
    label: labelStyles,
    errorText: errorStyles,
    wrapper: wrapperStyles,
    noIcon: noIconStyles,
  } = useInputTheme(variant, inputState);

  const iconColor = disabled ? colors.skyBase : colors.ink.base;
  const placeholderColor = disabled ? colors.skyBase : colors.ink.base;
  const errorVariant = errorMessage && !focus && !disabled;
  const labelDefault = variant === 'default' && label;

  return (
    <View style={styles.root}>
      {labelDefault ? <Text style={labelStyles}>{label}</Text> : null}
      <View
        style={[styles[position], wrapperStyles, !icon ? noIconStyles : null]}>
        {icon ? <SvgImage source={icon} color={iconColor} /> : null}
        <View style={[CommonStyles.flex, !labelDefault ? styles.main : null]}>
          {!labelDefault ? <Text style={labelStyles}>{label}</Text> : null}
          <TextInput
            autoCorrect={false}
            keyboardType={keyboardType}
            value={value}
            editable={!disabled}
            maxLength={maxLength}
            placeholder={placeholder}
            style={[inputStyles, labelDefault ? styles.input : styles.floating]}
            placeholderTextColor={placeholderColor}
            onFocus={handleInputOnFocus}
            onBlur={handleInputOnBlur}
            onChangeText={onChange}
          />
        </View>
      </View>
      {errorVariant ? <Text style={errorStyles}>{errorMessage}</Text> : null}
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: normalize('vertical', 12),
  } as ViewStyle,
  default: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.skyLight,
    gap: normalize('horizontal', 4),
    paddingLeft: normalize('horizontal', 12),
    paddingRight: normalize('horizontal', 16),
    ...CommonStyles.alignCenterRow,
  } as ViewStyle,
  right: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.skyLight,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: normalize('horizontal', 4),
    paddingLeft: normalize('horizontal', 12),
    paddingRight: normalize('horizontal', 16),
  } as ViewStyle,
  left: {} as ViewStyle,
  input: {
    width: '90%',
    paddingVertical: normalize('vertical', 16),
  } as ViewStyle,
  main: {
    paddingVertical: normalize('vertical', 8),
  } as ViewStyle,
  floating: {
    paddingTop: normalize('vertical', 4),
  } as ViewStyle,
});
