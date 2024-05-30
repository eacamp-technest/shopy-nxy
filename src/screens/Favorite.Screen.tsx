import React from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CartItem} from 'components/CartItem';
import {View, StyleSheet} from 'react-native';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const FavoriteScreen: React.FC = () => {
  return (
    <SafeTopProvider
      style={colors.bdazzledBlue.darkest}
      content={'dark-content'}
      statusBarColor={colors.bdazzledBlue.darkest}>
      <View style={styles.header} />
      <View style={styles.main}>
        <CartItem
          title={'Man'}
          size={'small'}
          background={colors.blue.base}
          image={require('../assets/images/imageWoman.png')}
        />
        <CartItem
          size={'small'}
          title={'Woman'}
          background={colors.red.base}
          image={require('../assets/images/imageWoman.png')}
        />
      </View>
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
