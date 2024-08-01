import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export const SliderColor: React.FC = () => {
  const [values, setValues] = useState([1, 5]);

  return (
    <View style={styles.root}>
      <View style={styles.slider}>
        <Text style={TypographyStyles.title3}>PRICE RANGE</Text>
        <View style={styles.price}>
          <Text style={TypographyStyles.RegularTightSemibold}>{'$69'}</Text>
          <Text style={TypographyStyles.RegularTightSemibold}>{'$321'}</Text>
        </View>
        <MultiSlider
          min={1}
          max={2}
          step={1}
          values={values}
          sliderLength={280}
          onValuesChange={setValues}
          trackStyle={styles.trackStyle}
          markerStyle={styles.markerStyle}
          selectedStyle={styles.selectedStyle}
          unselectedStyle={styles.unselectedStyle}
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
    gap: normalize('vertical', 16),
    // backgroundColor: 'green',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  markerStyle: {
    borderWidth: 0,
    borderRadius: 100,
    height: normalize('height', 32),
    width: normalize('width', 32),
    backgroundColor: colors.primary.base,
  },
  unselectedStyle: {
    backgroundColor: colors.skyLight,
  },
  trackStyle: {
    height: normalize('height', 2),
  },
  selectedStyle: {
    backgroundColor: colors.primary.base,
  },
});
