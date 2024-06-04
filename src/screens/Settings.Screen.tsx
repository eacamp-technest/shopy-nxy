import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {CardProduct} from 'components/CardProduct';
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
        <CardProduct
          type={'list'}
          price={95}
          title={'Nike Air Max 90'}
          image={require('../assets/images/nike.png')}
        />
      </View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: normalize('horizontal', 24),
  },
});
