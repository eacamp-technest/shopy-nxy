import {ImageResources} from 'assets/VectorResources.g';
import {Divider} from 'components/Divider';
import {NavBar} from 'components/NavBar';
import {SliderColor} from 'components/SliderColor';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SceneRendererProps} from 'react-native-tab-view';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';

export const FilterScreen: React.FC<SceneRendererProps> = ({}) => {
  return (
    <View style={styles.root}>
      <SliderColor />
      <Divider height={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: normalize('vertical', 32),
    borderStartColor: colors.white,
    paddingTop: normalize('vertical', 24),

    backgroundColor: 'white',
  },
  text: {
    fontSize: 40,
    color: colors.bdazzledBlue.darkest,
  },
});
