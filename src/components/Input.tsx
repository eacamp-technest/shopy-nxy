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
} from 'react-native';
import {SvgImage, Resources} from './SvgImage';
import {TypographyStyles} from 'theme/typography';
import {colors} from 'theme/colors';
import {standardHitSlopSize} from 'theme/consts.styles';
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

interface IInput {
  type?: 'text' | 'phone' | 'password' | 'select';
  label?: string;
  caption?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  icon?: TIcon | Resources;
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
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const placeholderColor = props.disabled ? colors.skyBase : colors.ink.lighter;

  const renderIcon = () => {
    if (type === 'password') {
      return (
        <Pressable hitSlop={standardHitSlopSize}>
          <SvgImage
            source={
              secureTextEntry ? ImageResources.eyeOff : ImageResources.eye
            }
            color={colors.ink.base}
            width={24}
            height={24}
            onPress={() => setSecureTextEntry(state => !state)}
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
        color={props.disabled ? colors.skyBase : colors.inkBase}
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

  return (
    <View style={[styles.root, props?.style]}>
      {props.label ? (
        <Text style={TypographyStyles.normalSemiBold}>{props.label}</Text>
      ) : null}
      <View
        style={[
          styles.wrapper,
          focused && styles.focused,
          props.disabled && styles.wrapperDisabled,
          (('position' in (icon ?? {}) && icon?.position === 'right') ||
            type === 'password') &&
            CommonStyles.rowReverse,
        ]}>
        {renderIcon()}
        <TextInput
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          value={value}
          onFocus={handleOnFocused}
          onBlur={handleOnBlur}
          autoCapitalize="none"
          editable={!props.disabled}
          secureTextEntry={secureTextEntry}
          onChangeText={setValue}
          placeholderTextColor={placeholderColor}
          style={styles.input}
        />
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
  },
  focused: {
    borderWidth: 2,
    borderColor: colors.primary.base,
  },
  wrapperDisabled: {
    color: colors.skyBase,
    borderColor: colors.skyLighter,
    backgroundColor: colors.skyLighter,
  },
  error: {
    color: colors.primary.base,
  },
  caption: {
    color: colors.ink.lighter,
    ...TypographyStyles.mediumLarge,
  },
  wrapper: {
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: colors.skyLight,
    height: normalize('height', 48),
    gap: normalize('horizontal', 12),
    paddingHorizontal: normalize('horizontal', 16),
  },
  input: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    ...TypographyStyles.normalNormal,
  },
});
