import {SliderColor} from 'components/SliderColor';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SceneRendererProps} from 'react-native-tab-view';
import {colors} from 'theme/colors';

export const FilterScreen: React.FC<SceneRendererProps> = ({}) => {
  return (
    <View style={styles.root}>
      <SliderColor />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,

    backgroundColor: 'white',
  },
  text: {
    fontSize: 40,
    color: colors.bdazzledBlue.darkest,
  },
});
