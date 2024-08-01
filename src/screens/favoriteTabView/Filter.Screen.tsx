import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Divider} from 'components/Divider';
import {SliderColor} from 'components/SliderColor';
import {PartialsColor} from 'components/PartialsColor';
import {SceneRendererProps} from 'react-native-tab-view';

export const FilterScreen: React.FC<SceneRendererProps> = ({}) => {
  return (
    <View style={styles.root}>
      <SliderColor />
      <Divider height={'large'} />
      <View style={styles.partial}>
        <PartialsColor position={'vertical'} title={'COLORS'} />
      </View>
      <Divider height={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderStartColor: colors.white,
    backgroundColor: colors.white,
    gap: normalize('vertical', 32),
    paddingTop: normalize('vertical', 24),
  },
  partial: {
    paddingHorizontal: normalize('horizontal', 24),
  },
});
