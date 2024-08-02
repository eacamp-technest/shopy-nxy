import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Divider} from 'components/Divider';
import {SliderColor} from 'components/SliderColor';
import {PartialsColor} from 'components/PartialsColor';
import {SceneRendererProps} from 'react-native-tab-view';

export const FilterScreen: React.FC<SceneRendererProps> = ({}) => {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.contentContainerStyle}>
      <SliderColor />
      <Divider height={'large'} />
      <View style={styles.partial}>
        <PartialsColor position={'vertical'} title={'COLORS'} />
      </View>
      <Divider height={'large'} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderStartColor: colors.white,
    backgroundColor: colors.white,

    paddingTop: normalize('vertical', 24),
  },
  contentContainerStyle: {
    gap: normalize('vertical', 32),
  },
  partial: {
    paddingHorizontal: normalize('horizontal', 24),
  },
});
