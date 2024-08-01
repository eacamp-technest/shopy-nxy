import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';

export const SliderColor: React.FC = () => {
  return (
    <View style={styles.root}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={2}
        minimumTrackTintColor={colors.skyLight}
        maximumTrackTintColor={colors.primary.base}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: normalize('horizontal', 24),
  },
  slider: {
    height: 2,
  },
});
