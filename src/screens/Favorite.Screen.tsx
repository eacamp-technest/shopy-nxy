import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';

import {SafeTopProvider} from 'containers/SafeTopProvider';

export const FavoriteScreen: React.FC = () => {
  return (
    <SafeTopProvider
      style={colors.bdazzledBlue.darkest}
      content={'light-content'}
      statusBarColor={colors.bdazzledBlue.darkest}>
      <View style={styles.header}>
        <NavBar styleTitle={colors.white} title={'SAVED ITEMS'} />
      </View>
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text>AAA</Text>
      </ScrollView>
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
    paddingHorizontal: normalize('horizontal', 24),
  },
  contentContainerStyle: {
    paddingVertical: normalize('vertical', 32),
  },
});
