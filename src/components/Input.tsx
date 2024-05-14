import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  Pressable,
  TextStyle,
} from 'react-native';
import {SvgImage, Resources} from './SvgImage';
import {TypographyStyles} from 'theme/typography';
import {colors} from 'theme/colors';
import {standardHitSlopSize} from 'theme/const.styles';
import {CommonStyles} from 'theme/commonStyles';
import {ImageResources} from 'assets/VectorResources.g';
import {normalize} from 'theme/metrics';

type TIcon = {
  source: Resources;
  color?: string;
  width?: number;
  height?: number;
  position?: 'left' | 'right';
};

type TLabel = {
  variant?: 'default' | 'floating';
};

export interface IInput {
  type?: 'text' | 'phone' | 'password' | 'select';
  label?: string;
  variant?: TLabel | string;
  caption?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  icon?: TIcon;
  errorMessage?: string;
  style?: StyleProp<ViewStyle>;
  setValue?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<IInput> = ({
  value,
  type = 'text',
  setValue,
  icon,
  variant = 'default',
  disabled,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(false);
  const placeholderColor = disabled ? colors.skyBase : colors.ink.lighter;
  const isMoreIcon =
    ('position' in (icon ?? {}) && icon?.position === 'right') ||
    type === 'password';

  const handleSecurityIcon = () => {
    if (disabled) {
      return;
    }
    setSecureTextEntry(state => !state);
  };

  const renderIcon = () => {
    if (type === 'password') {
      return (
        <Pressable hitSlop={standardHitSlopSize}>
          <SvgImage
            source={
              secureTextEntry ? ImageResources.eyeOff : ImageResources.eye
            }
            color={disabled ? colors.skyBase : colors.inkBase}
            width={24}
            height={24}
            onPress={handleSecurityIcon}
          />
        </Pressable>
      );
    }

    if (!icon) {
      return null;
    }

    if ('source' in icon) {
      return (
        <SvgImage
          source={icon.source}
          width={icon.width}
          color={icon.color}
          height={icon.height}
        />
      );
    }

    return (
      <SvgImage
        source={icon}
        color={disabled ? colors.skyBase : colors.inkBase}
      />
    );
  };

  const handleOnFocused = () => {
    setFocused(true);
    props?.onFocus?.();
  };
  const handleOnBlur = () => {
    setFocused(false);
    props?.onBlur?.();
  };

  const renderFloatingLabel = () => {
    return (
      <View style={styles.floating}>
        <Text
          style={[
            styles.floatingText,
            disabled ? styles.floatingTextDisabled : null,
          ]}>
          {props.label}
        </Text>
        <TextInput
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          value={value}
          onFocus={handleOnFocused}
          onBlur={handleOnBlur}
          autoCapitalize="none"
          editable={!disabled}
          secureTextEntry={secureTextEntry}
          onChangeText={setValue}
          placeholderTextColor={placeholderColor}
        />
      </View>
    );
  };

  return (
    <View style={[styles.root, props?.style]}>
      {props.label && variant === 'default' ? (
        <Text style={TypographyStyles.RegularNoneSemibold}>{props.label}</Text>
      ) : null}
      <View
        style={[
          styles.wrapper,
          focused && styles.focused,
          disabled && styles.wrapperDisabled,
          isMoreIcon && CommonStyles.rowReverse,
        ]}>
        {renderIcon()}
        {variant === 'floating' ? (
          renderFloatingLabel()
        ) : (
          <TextInput
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            value={value}
            onFocus={handleOnFocused}
            onBlur={handleOnBlur}
            autoCapitalize="none"
            editable={!disabled}
            secureTextEntry={secureTextEntry}
            onChangeText={setValue}
            placeholderTextColor={placeholderColor}
            style={styles.input}
          />
        )}
      </View>
      {props.caption || props.errorMessage ? (
        <Text
          style={[
            styles.caption,
            props?.errorMessage ? styles.error : undefined,
          ]}>
          {props.errorMessage ?? props.caption}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: normalize('vertical', 12),
  } as ViewStyle,
  focused: {
    borderWidth: 2,
    borderColor: colors.primary.base,
  } as ViewStyle,
  wrapperDisabled: {
    color: colors.skyBase,
    borderColor: colors.skyLighter,
    backgroundColor: colors.skyLighter,
  } as ViewStyle,
  error: {
    color: colors.primary.base,
  } as TextStyle,
  caption: {
    color: colors.ink.lighter,
    ...TypographyStyles.SmallNormalRegular,
  } as TextStyle,
  wrapper: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.skyLight,
    height: normalize('height', 48),
    gap: normalize('horizontal', 12),
    paddingHorizontal: normalize('horizontal', 16),
    ...CommonStyles.alignCenterRow,
  } as ViewStyle,
  input: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    ...TypographyStyles.RegularNoneRegular,
    lineHeight: 22,
  } as TextStyle,
  floating: {
    flexGrow: 1,
    flex: 1,
    width: '100%',
    gap: normalize('vertical', 4),
  } as ViewStyle,
  floatingText: {
    color: colors.ink.lighter,
    ...TypographyStyles.TinyNoneRegular,
  } as TextStyle,
  floatingTextDisabled: {
    color: colors.skyBase,
  } as TextStyle,
});
