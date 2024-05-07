import React, {Fragment} from 'react';
import {View, Text, Pressable, StyleSheet, TextStyle} from 'react-native';
import {TypographyStyles} from 'theme/typography';
import {SvgImage, Resources} from './SvgImage';
import {standardHitSlopSize} from 'theme/consts.styles';
import {CommonStyles} from 'theme/commonStyles';
import {normalize} from 'theme/metrics';

// ! Interface

interface INavBar {
  title?: string;
  largeTitle?: string;
  leftIcon?: Resources;
  rightIcon?: Resources;
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
        <Text style={[TypographyStyles.title2, styles.largeText]}>
          {largeTitle}
        </Text>
      ) : null}
    </Fragment>
  );
};

// ! Styles

const styles = StyleSheet.create({
  largeText: {
    paddingTop: normalize('vertical', 16),
    paddingBottom: normalize('vertical', 24),
  } as TextStyle,
});
