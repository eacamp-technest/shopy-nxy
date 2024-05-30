import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';

export const SettingsScreen: React.FC = () => {
  return (
    <SafeTopProvider
      style={colors.skyBlue.base}
      content={'dark-content'}
      statusBarColor={colors.skyBlue.base}>
      <View style={styles.header} />
      <View style={styles.main} />
    </SafeTopProvider>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: mainPadding,
    gap: normalize('vertical', 24),
    height: 100,
  },
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
