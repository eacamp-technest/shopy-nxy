import React, {useState} from 'react';
import {
  Text as NativeText,
  StyleSheet,
  Pressable,
  StyleProp,
  ActivityIndicator,
  PressableProps,
  ViewStyle,
} from 'react-native';
import {SvgImage, Resources} from 'components/SvgImage';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {TTypesButton, getButtonTheme} from 'helpers/buttonTheme';

// ! Interface

type TSize = 'small' | 'block' | 'large';
type TPosition = 'left' | 'right' | 'center';

interface IButton {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  size?: TSize;
  type?: TTypesButton;
  icon?: Resources;
  position?: TPosition;
  style?: StyleProp<ViewStyle>;
  hitSlop?: PressableProps['hitSlop'];
  onPress?: () => void;
}

// ! Component

export const Button: React.FC<IButton> = ({
  text,
  disabled,
  loading,
  size = 'block',
  type = 'primary',
  icon,
  position = 'left',
  style,
  onPress,
  hitSlop,
}) => {
  const [press, setPress] = useState<boolean>(false);

  const svgSize = size === 'small' ? 16 : 24;

  const onPressIn = () => setPress(true);
  const onPressOut = () => setPress(false);

  const {component: componentStyle, text: textStyle} = getButtonTheme(type, {
    press,
    disabled,
  });

  const renderLoading = () => {
    return loading ? (
      <ActivityIndicator
        color={colors.primary.base}
        size={'small'}
        style={StyleSheet.absoluteFillObject}
      />
    ) : null;
  };

  return (
    <Pressable
      hitSlop={hitSlop}
      style={[
        styles.root,
        styles[size],
        styles[position],
        componentStyle,
        style,
      ]}
      disabled={disabled || loading}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <NativeText style={[styles.text, textStyle]}>{text}</NativeText>
      {icon ? (
        <SvgImage
          color={textStyle.color}
          width={svgSize}
          height={svgSize}
          source={icon}
        />
      ) : null}
      {renderLoading()}
    </Pressable>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    borderColor: 'transparent',
    overflow: 'hidden',
    ...CommonStyles.alignCenterJustifyBetweenRow,
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    ...TypographyStyles.RegularNoneSemibold,
  },
  left: {
    flexDirection: 'row-reverse',
  },
  center: {
    ...CommonStyles.alignJustifyCenter,
  },
  right: {},
  small: {
    borderWidth: 1,
    padding: normalize('vertical', 7),
  },
  block: {
    borderWidth: 1,
    padding: normalize('vertical', 15),
  },
  large: {
    borderWidth: 1,
    padding: normalize('vertical', 15),
  },
});
