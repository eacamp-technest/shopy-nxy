import React from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {View, StyleSheet} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const FavoriteScreen: React.FC = () => {
  return (
    <SafeTopProvider
      style={styles.provider}
      content={'dark-content'}
      statusBarColor={colors.yellow.base}>
      <View style={styles.header} />
      <View style={styles.main} />
    </SafeTopProvider>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.yellow.base,
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
