import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'components/Button';
import {RadioButton} from 'components/RadioButton';

export const OnboardingScreen = () => {
  return (
    <View style={styles.root}>
      <Button position={'center'} text={'Create'} type={'secondary'} />
      <RadioButton />
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: 10,
  },
});
