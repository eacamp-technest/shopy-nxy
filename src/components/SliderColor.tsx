import React, {useState} from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

interface ISlider {
  sliderColor?: StyleProp<ViewStyle>;
  selectedStyle?: StyleProp<ViewStyle>;
}

export const SliderColor: React.FC<ISlider> = ({
  sliderColor,
  selectedStyle,
}) => {
  const [values, setValues] = useState([1, 5]);

  return (
    <View style={styles.root}>
      <View style={styles.slider}>
        <Text style={TypographyStyles.title3}>PRICE RANGE</Text>
        <View style={CommonStyles.justifyBetweenRow}>
          <Text style={TypographyStyles.RegularTightSemibold}>{'$69'}</Text>
          <Text style={TypographyStyles.RegularTightSemibold}>{'$321'}</Text>
        </View>
        <MultiSlider
          min={1}
          max={2}
          step={1}
          values={values}
          sliderLength={310}
          onValuesChange={setValues}
          trackStyle={styles.trackStyle}
          selectedStyle={selectedStyle}
          unselectedStyle={styles.unselectedStyle}
          containerStyle={CommonStyles.alignCenterRow}
          markerStyle={[styles.markerStyle, sliderColor]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: normalize('horizontal', 24),
  },
  slider: {
    width: '100%',
    gap: normalize('vertical', 16),
  },
  markerStyle: {
    borderWidth: 0,
    borderRadius: 100,
    height: normalize('height', 32),
    width: normalize('width', 32),
  },
  unselectedStyle: {
    backgroundColor: colors.skyLight,
  },
  trackStyle: {
    height: normalize('height', 2),
  },
});
