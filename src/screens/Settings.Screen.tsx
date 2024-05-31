import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const SettingsScreen: React.FC = () => {
  return (
    <SafeTopProvider style={colors.white}>
      <View style={styles.root}>
        <NavBar
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          title={'SETTINGS'}
          styleTitle={colors.ink.base}
        />
        <Text>SETTINGS</Text>
      </View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: normalize('horizontal', 24),
  },
});
