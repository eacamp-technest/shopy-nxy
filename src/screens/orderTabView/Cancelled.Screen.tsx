import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';

export const CancelledScreen = () => {
  return (
    <View style={styles.root}>
      <Text>CancelledScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
