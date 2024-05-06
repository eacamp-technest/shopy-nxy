import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';

export const LoginScreen: React.FC = () => {
  return (
    <SafeMainProvider>
      <View style={styles.root}>
        <NavBar
          largeTitle={'Welcome!'}
          leftIcon={ImageResources.chevronLeft}
          style={styles.largeText}
          leftColor={colors.gray.base}
        />
      </View>
    </SafeMainProvider>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  largeText: {
    paddingTop: normalize('vertical', 16),
  },
});
