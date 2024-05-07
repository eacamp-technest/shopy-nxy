import React, {Fragment} from 'react';
import {View, Text, Pressable, ViewStyle, StyleProp} from 'react-native';
import {TypographyStyles} from 'theme/typography';
import {SvgImage, Resources} from './SvgImage';
import {standardHitSlopSize} from 'theme/consts.styles';
import {CommonStyles} from 'theme/commonStyles';

// ! Interface

interface INavBar {
  title?: string;
  largeTitle?: string;
  leftIcon?: Resources;
  rightIcon?: Resources;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  leftColor?: string;
  rightColor?: string;
  onPress?: () => void;
}

export const NavBar: React.FC<INavBar> = ({
  title,
  leftIcon,
  rightIcon,
  largeTitle,
  onPress,
  style,
  rightColor,
  leftColor,
}) => {
  return (
    <Fragment>
      <View style={CommonStyles.alignCenterJustifyBetweenRow}>
        {leftIcon ? (
          <Pressable
            hitSlop={standardHitSlopSize}
            style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}
            onPress={onPress}>
            <SvgImage source={leftIcon} color={leftColor} />
          </Pressable>
        ) : (
          <View />
        )}
        {title ? (
          <Text style={TypographyStyles.title3}>{title}</Text>
        ) : (
          <View />
        )}
        {rightIcon ? (
          <Pressable
            hitSlop={standardHitSlopSize}
            style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}
            onPress={onPress}>
            <SvgImage source={rightIcon} color={rightColor} />
          </Pressable>
        ) : (
          <View />
        )}
      </View>
      {largeTitle ? (
        <Text style={[TypographyStyles.title2, style]}>{largeTitle}</Text>
      ) : null}
    </Fragment>
  );
};
