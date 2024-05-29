import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {CartItem} from 'components/CartItem';

export const SearchScreen: React.FC = () => {
  return (
    <SafeTopProvider style={styles.provider}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.main}>
          <CartItem />
        </View>
      </ScrollView>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.white,
  },
  root: {
    flex: 1,
    gap: normalize('vertical', 24),
    paddingHorizontal: normalize('horizontal', 24),
  },
  contentContainer: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  main: {
    gap: normalize('vertical', 24),
  },
});
