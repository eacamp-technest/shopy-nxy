import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton} from 'components/RadioButton';

export const OnboardingScreen = () => {
  return (
    <View style={styles.root}>
      <RadioButton disabled={false} />
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: 10,
  },
});
