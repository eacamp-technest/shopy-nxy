import React, {Fragment} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {TypographyStyles} from 'theme/typography';
import {SvgImage, Resources} from './SvgImage';
import {standardHitSlopSize} from 'theme/const.styles';
import {CommonStyles} from 'theme/commonStyles';
import {normalize} from 'theme/metrics';

interface INavBar {
  title?: string;
  largeTitle?: string;
  leftIcon?: Resources;
  rightIcon?: Resources;
  disabled?: boolean;
  leftColor?: string;
  rightColor?: string;
  leftOnPress?: () => void;
  rightOnPress?: () => void;
}

export const NavBar: React.FC<INavBar> = ({
  title,
  leftIcon,
  rightIcon,
  largeTitle,
  leftOnPress,
  rightOnPress,
  rightColor,
  leftColor,
}) => {
  return (
    <Fragment>
      <View style={styles.root}>
        {leftIcon ? (
          <Pressable
            hitSlop={standardHitSlopSize}
            style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}
            onPress={leftOnPress}>
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
            onPress={rightOnPress}>
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

const styles = StyleSheet.create({
  root: {
    paddingVertical: normalize('vertical', 12),
    ...CommonStyles.alignCenterJustifyBetweenRow,
  } as ViewStyle,
  largeText: {
    paddingTop: normalize('vertical', 16),
    paddingBottom: normalize('vertical', 8),
  } as TextStyle,
});
