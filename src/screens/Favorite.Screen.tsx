import React from 'react';
import {colors} from 'theme/colors';
import {View, StyleSheet} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {normalize} from 'theme/metrics';

export const FavoriteScreen: React.FC = () => {
  return (
    <SafeTopProvider
      statusBarColor={colors.bdazzledBlue.darkest}
      style={styles.provider}>
      <View style={styles.header} />
      <View style={styles.main} />
    </SafeTopProvider>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.bdazzledBlue.darkest,
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
