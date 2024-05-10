import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  ViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';

type TSize = 'miniKnop' | 'material' | 'switch';
type TCircle = 'circle' | 'miniKnopCircle' | 'materialCircle';
type TRightCircle =
  | 'rightCircle'
  | 'rightMiniKnopCircle'
  | 'rightMaterialCircle';
interface ISwitch {
  size?: TSize;
  style?: StyleProp<ViewProps>;
  circleSize?: TCircle;
  rightCircles?: TRightCircle;
}
export const Switch: React.FC<ISwitch> = ({
  size = 'switch',
  style,
  circleSize = 'circle',
  rightCircles = 'rightCircle',
}) => {
  const [isSwitchOn, setSwitchOn] = useState(true);
  return (
    <View
      style={[styles.switch, styles[size], isSwitchOn && styles.right, style]}>
      <Pressable onPress={() => setSwitchOn(!isSwitchOn)}>
        <View
          style={[
            styles.circle,
            styles[circleSize],
            isSwitchOn && styles[rightCircles],
          ]}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  switch: {
    borderRadius: 32,
    backgroundColor: colors.skyLight,
    width: normalize('width', 56),
    height: normalize('height', 32),
  } as ViewStyle,
  right: {
    backgroundColor: colors.primary.base,
  } as ViewStyle,
  circle: {
    backgroundColor: colors.white,
    top: 2,
    left: 2,
    borderRadius: 50,
    width: normalize('width', 28),
    height: normalize('height', 28),
  } as ViewStyle,
  rightCircle: {
    left: 26,
  } as ViewStyle,
  miniKnop: {
    top: 6,
    left: 6,
    borderRadius: 32,
    width: normalize('width', 48),
    height: normalize('height', 24),
  } as ViewStyle,
  miniKnopCircle: {
    top: 6,
    left: 6,
    width: normalize('width', 12),
    height: normalize('height', 12),
  } as ViewStyle,
  rightMiniKnopCircle: {
    left: 30,
  } as ViewStyle,
  material: {
    width: normalize('width', 36),
    height: normalize('height', 20),
  } as ViewStyle,
  materialCircle: {
    top: 0,
    left: 0,
    width: normalize('width', 20),
    height: normalize('height', 20),
  } as ViewStyle,
  rightMaterialCircle: {
    left: 16,
  } as ViewStyle,
});
