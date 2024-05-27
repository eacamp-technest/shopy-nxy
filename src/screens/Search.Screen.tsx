import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const SearchScreen: React.FC = () => {
  return (
    <SafeTopProvider
      content={'default'}
      style={styles.provider}
      statusBarColor={colors.red.base}>
      <View style={styles.header} />
      <View style={styles.main} />
    </SafeTopProvider>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.red.base,
  },
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
