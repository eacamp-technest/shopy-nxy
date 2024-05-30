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
      content={'light-content'}
      statusBarColor={colors.bdazzledBlue.darkest}>
      <View style={styles.header} />
      <View style={styles.main}>
        <CartItem
          title={'Man'}
          size={'small'}
          background={colors.blue.base}
          image={require('../assets/images/manSmall.png')}
        />
        <CartItem
          size={'small'}
          title={'Woman'}
          background={colors.red.base}
          image={require('../assets/images/womanSmall.png')}
        />
        <CartItem
          size={'small'}
          title={'Kids'}
          background={colors.skyBlue.base}
          image={require('../assets/images/kidsSmall.png')}
        />
        <CartItem
          size={'small'}
          title={'Teens'}
          background={colors.lavender.base}
          image={require('../assets/images/teensSmall.png')}
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
    gap: 20,
    backgroundColor: colors.white,
  },
});
