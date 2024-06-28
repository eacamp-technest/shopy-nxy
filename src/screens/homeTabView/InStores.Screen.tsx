import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {SceneRendererProps} from 'react-native-tab-view';

export const InStoresScreenTab: React.FC<SceneRendererProps> = ({}) => {
  return (
    <View style={styles.root}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View
          style={{width: '50%', height: 2, backgroundColor: '#5EC6EB'}}></View>
      </View>
      <Text style={styles.text}>InStore</Text>
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
