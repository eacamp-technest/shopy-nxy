import React, {useState} from 'react';
import {View, StyleSheet, Pressable, ViewProps, StyleProp} from 'react-native';
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
  },
  right: {
    backgroundColor: colors.primary.base,
  },
  circle: {
    backgroundColor: colors.white,
    top: 2,
    left: 2,
    borderRadius: 50,
    width: normalize('width', 28),
    height: normalize('height', 28),
  },
  rightCircle: {
    left: 26,
  },
  miniKnop: {
    top: 6,
    left: 6,
    borderRadius: 32,
    width: normalize('width', 48),
    height: normalize('height', 24),
  },
  miniKnopCircle: {
    top: 6,
    left: 6,
    width: normalize('width', 12),
    height: normalize('height', 12),
  },
  rightMiniKnopCircle: {
    left: 30,
  },
  material: {
    width: normalize('width', 36),
    height: normalize('height', 20),
  },
  materialCircle: {
    top: 0,
    left: 0,
    width: normalize('width', 20),
    height: normalize('height', 20),
  },
  rightMaterialCircle: {
    left: 16,
  },
});
