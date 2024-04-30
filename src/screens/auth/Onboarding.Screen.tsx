import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'components/Button';

export const OnboardingScreen = () => {
  return (
    <View style={styles.root}>
      <Button position={'center'} text={'Create'} type={'secondary'} />
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: 10,
  },
});
