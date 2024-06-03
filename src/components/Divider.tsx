import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'theme/colors';

type THeight = 'small' | 'medium' | 'large';

interface IDivider {
  height: THeight;
}

export const Divider: React.FC<IDivider> = ({height}) => (
  <View style={styles[height]} />
);

const styles = StyleSheet.create({
  small: {
    height: 1,
    backgroundColor: colors.skyLighter,
  },
  medium: {
    height: 12,
    backgroundColor: colors.skyLightest,
  },
  large: {
    height: 20,
    backgroundColor: colors.skyLightest,
  },
});
